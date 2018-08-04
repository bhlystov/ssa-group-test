<template>
    <div>
        <el-alert
                class="custom-alert-info"
                type="info"
                show-icon
                :title="lastSystemUpdate"
                :closable="false"
                v-if="checkEmptyOrderCount()"
        >
        </el-alert>

        <div class="header-nav">
            <div class="button-wrapper">
                <period-toggle
                        :data-list-toggle="dataListToggle"
                        :groupBy="groupBy"
                />
            </div>

            <range-picker
                    :date-from="dateFrom"
                    :date-to="dateTo"
                    @pickRange="reload()"
            />
        </div>

        <el-alert
                title="Внимание!"
                type="warning"
                description="Данных за данный период не найдено. Выберите, пожалуйста, другой интервал даты."
                show-icon
                v-if="!checkEmptyOrderCount()"
                v-show="isFinishedLoadingDataFromServer"
                class="information-empty-data-render"
        >
        </el-alert>

        <div
                v-loading="loading"
                v-if="checkEmptyOrderCount()"
        >
            <sales-chart-by-period
                    title="График продаж"
                    :labels="chartByPeriodLabels"
                    :yAxis="chartByPeriodParamsView"
                    :series="chartByPeriodSeries"
            />

            <div class="wrapper-diagram-pie-chart">
                <sales-pie-chart
                        title="График заказов в разрезе статусов"
                        :series="pieByPeriodStatusSeries"
                        :drilldown="pieByPeriodStatusDrilldown"
                        :colors="optionsColorsPieCharts"
                />

                <sales-pie-chart
                        title="График заказов в разрезе типа оплаты"
                        :series="pieByPeriodPaymentType"
                        :colors="optionsColorsPieCharts"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import PeriodToggle from "./components/PeriodToggle.vue";
    import RangePicker from "./components/RangePicker.vue";
    import SalesChartByPeriod from "./components/analytics/SalesChartByPeriod.vue";
    import SalesPieChart from "./components/analytics/SalesPieChart.vue";
    import apiClient from "./api/client";
    import { format, subDays, parse } from "date-fns";

    const formatDate = date => format(parse(date), 'DD.MM.YYYY');
    const formatDateTime = date => format(parse(date), 'DD.MM.YYYY / H:mm');

    export default {
        name: 'Analytics',
        components: {
            PeriodToggle,
            RangePicker,
            SalesChartByPeriod,
            SalesPieChart,
        },
        props: {
            companyId: {
                type: Number,
                required: true,
            },
            dateFrom: {
                type: String,
                default() {
                    return formatDate (subDays(new Date(), 30));
                },
            },
            dateTo: {
                type: String,
                default() {
                    return formatDate (new Date());
                },
            },
            groupBy: {
                type: String,
                default: 'month',
            },
        },
        data() {
            return {
                loading: false,
                dataListToggle: [{label: "день", code: "day"}, {label: "месяц", code: "month"}],
                analytics: {},
                isFinishedLoadingDataFromServer: false,
            }
        },
        computed: {
            lastSystemUpdate(){
                return this.analytics["last_update_date"] ?
                    `Данные обновляются 1 раз в час. Последнее обновление ${formatDateTime(this.analytics["last_update_date"])}` :
                    '';
            },
            /**
             * Calculation of data for the column graph by sales schedule
             *
             * */
            chartByPeriodSource() {
                switch (this.groupBy) {
                    case 'day':
                        return this.analytics["by_date"] || [];
                        break;
                    case 'month':
                        return this.analytics["by_month"] || [];
                        break;
                }
            },
            chartByPeriodLabels() {
                return this.chartByPeriodSource ? this.chartByPeriodSource.map(item => item.label) : [];
            },
            chartByPeriodParamsView() {
                return [{
                        labels: {
                            format: '{value}',
                            style: {
                                color: "#428bca",
                            }
                        },
                        title: {
                            text: 'Кол-во заказов',
                            style: {
                                color: "#428bca",
                            }
                        }
                    }, {
                        labels: {
                            format: '{value} грн',
                            style: {
                                color: "#ff642a",
                            }
                        },
                        title: {
                            text: 'Оборот',
                            style: {
                                color: "#ff642a",
                            }
                        },
                        opposite: true
                }, {
                        labels: {
                            format: '{value} грн',
                            style: {
                                color: "#90EE90",
                            }
                        },
                        title: {
                            text: 'Доход.',
                            style: {
                                color: "#90EE90",
                            }
                        },
                        opposite: true,
                        visible: false
                    }];
            },
            chartByPeriodSeries() {
                const series = [];
                const lines = {
                    orders_count: {
                        label: "Количество заказов.",
                        type: "column",
                        color: "#428bca"
                    },
                    turnover: {
                        label: "Оборот.",
                        type: "spline",
                        dashStyle: 'shortdot',
                        yAxis: 1,

                        color: "#ff642a",
                    },
                    revenue: {
                        label: "Доход.",
                        type: "spline",
                        yAxis: 2,
                        color: "#90EE90",
                    },
                };

                for (const [key, line] of Object.entries(lines)) {
                    series.push({
                        name: line.label,
                        type: line.type,
                        dashStyle: line.dashStyle,
                        yAxis: line.yAxis,
                        color: line.color,
                        data: this.chartByPeriodSource ? this.chartByPeriodSource.map(item => item[key]) : [],   //Здесь ругается на map
                    })
                }
                return series;
            },


            /**
             * Calculation of data on the schedule of orders by status
             *
             * */
            pieByPeriodSourceStatus() {
                return this.analytics["by_status"] || [];
            },
            pieByDeclineStatus() {
                return this.analytics["by_decline_status"] || [];
            },
            pieUnicKeysGroupCode() {
                let obj = {};
                this.pieByPeriodSourceStatus.forEach( item =>  obj[item.status_group_code] = item.status_group_label );

                return obj;
            },
            pieByPeriodStatusSeries() {
                const arrUnicKeysGroupCode = Object.keys(this.pieUnicKeysGroupCode);

                const data = arrUnicKeysGroupCode.map( key => {
                    return {
                        name: this.pieUnicKeysGroupCode[key],
                        y: this.pieByPeriodSourceStatus
                                .map( item => item.status_group_code === key ? item.orders_count : 0)
                                .reduce((sum, current) => sum + current),
                        drilldown: key
                    }
                });

                return data;
            },
            pieByPeriodStatusDrilldown() {
                const arrUnicKeysGroupCode = Object.keys(this.pieUnicKeysGroupCode);
                const series = [];

                const temp = arrUnicKeysGroupCode.map( itemArrKey => {
                    return {
                        [itemArrKey]: this.pieByPeriodSourceStatus.map( item => {
                            if( itemArrKey === item.status_group_code ) {
                                return {
                                    name: item.status_label,
                                    y: item.orders_count,
                                    drilldown: item.status_id === 5 ? item.status_id : '',  //status_id": 5 => Заказ отменен компанией
                                }
                            }
                        }).filter(item => item !== undefined && item !== null),
                    }
                });

                //формирование данных для второго drilldown
                temp.forEach( (item) => {
                    for(let key in item) {
                        series.push(
                            {
                                id: key,
                                name: 'Заказов',
                                data: item[key]
                            }
                        );
                    }
                });

                //Данные для прорисовки третьего drilldown
                series.push(
                    {
                        id: 5,
                        name: 'Заказов',
                        data: this.pieByDeclineStatus.map( item => {
                                return {
                                    name: item.label,
                                    y: item.count
                                }
                        }).filter(item => item !== undefined && item !== null),
                    }
                );

                return series;
            },


            /**
             * Calculation of data payment by type of payment
             *
             * */
            pieByPeriodSourcePaymentType() {
                return this.analytics["by_payment_type"] || [];
            },

            pieByPeriodPaymentType() {

                const data = this.pieByPeriodSourcePaymentType.map(item => {
                    return {
                        name: item.type_label,
                        y: item.orders_count,
                    }
                });

                return data;
            },
            optionsColorsPieCharts() {
                return ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066',
                    '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'];
            },
        },
        mounted() {
            this.reload();
        },
        methods: {
            async reload() {
                this.loading = true;
                this.analytics  = await apiClient.getAnaliticsData( this.companyId,  {from: this.$route.query.from, to: this.$route.query.to} );
                this.isFinishedLoadingDataFromServer = true;
                this.loading = false;
            },
            //Внесено как метод а не computed так как при начальной
            // инициализации компонента выдает ошибку, работает только как метод
            checkEmptyOrderCount() {
                return this.analytics["by_status"]
                    ? this.analytics["by_status"].some( item => item && item.orders_count > 0)
                    : false;
            },
        },
    }
</script>

<style lang="scss">
    .custom-alert-info {
        margin-bottom: 15px;

        //TODO временное решение, нужно будет переопределить переменные в глобальном файле scss
        .el-alert__icon {
            font-size: 24px;
            width: 24px;
        }
        .el-alert__title {
            font-size: 14px;
        }
    }

    .header-nav {
        height: 67px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #337ab7;
        padding: 0 20px 0 20px;

        .button-wrapper {
            display: flex;
        }
    }

    .information-empty-data-render {
        margin-top: 15px;
    }

    .wrapper-diagram-pie-chart {
        display: flex;

        .diagram-pie-chart {
            width: 50%;
        }
    }

</style>
