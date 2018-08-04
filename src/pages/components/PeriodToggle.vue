<template>
    <el-button-group class="buttons-nav">
        <el-button
                type="success"
                v-for="item in dataListToggle"
                :key="item.code"
                @click="clickHandler(item.code)"
                :disabled="groupBy === item.code"
        >
            {{ item.label }}
        </el-button>
    </el-button-group>
</template>

<script>
    export default {
        name: 'PeriodToggle',
        props: {
            dataListToggle: {
                type: Array,
                default() {
                    return [];
                },
            },
            groupBy: {
                type: String,
            }
        },
        methods: {
            /**
             * @method clickHandler
             * @param orderByData {String} //month / day
             */
            clickHandler(orderByData) {
                this.$router.push({name: 'analytics/index', query: {group: orderByData, from: this.$route.query.from, to: this.$route.query.to}});
            }
        }
    }
</script>

<style lang="scss">
    .header-nav {
        .buttons-nav {
            display: block;
            &::before, &::after{
                display: none;
            }
        }
    }
</style>