<template>
    <div class="block picker-range">
        <el-date-picker
                v-model="selectedDateRange"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="-"
                start-placeholder="Дата начала"
                end-placeholder="Дата окончания"
                :picker-options="pickerOptions"
                format="dd.MM.yyyy"
                value-format="dd.MM.yyyy"
        >
        </el-date-picker>
    </div>
</template>

<script>
    import { format, subDays, parse } from "date-fns";

    const formatDate = date => format(parse(date), 'DD.MM.YYYY');

    export default {
        name: 'RangePicker',
        props: {
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
        },
        data() {
            return {
                pickerOptions: {
                    shortcuts: [{
                        text: 'За неделю',
                        onClick(picker) {
                            const end = new Date();
                            const start = subDays(new Date(), 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: 'За месяц',
                        onClick(picker) {
                            const end = new Date();
                            const start = subDays(new Date(), 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: 'За 3 месяца',
                        onClick(picker) {
                            const end = new Date();
                            const start = subDays(new Date(), 90);
                            picker.$emit('pick', [start, end]);
                        }
                    },
                        {
                        text: 'Последние 6 месяцей',
                        onClick(picker) {
                            const end = new Date();
                            const start = subDays(new Date(), 182);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                selectedDateRange: [`${this.dateFrom}`, `${this.dateTo}`],
                localDateFrom: '',
                localDateTo: '',
            };
        },
        watch: {
            selectedDateRange() {
                this.toggleNewDateRange();
            }
        },
        methods: {
            /**
             * Toogle new data range
             * and emit event with data
             *
             * @method toogleNewDateRange
             * @return {void}
             */
            toggleNewDateRange() {
                [this.localDateFrom, this.localDateTo] = this.selectedDateRange;
                this.$router.push({name: 'analytics/index', query: {group: this.$route.query.group, from: this.localDateFrom, to: this.localDateTo}});
                this.$emit('pickRange');
            }
        }
    };
</script>