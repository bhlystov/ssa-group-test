<template>
    <section class="content-page">
        <div class="left-part col-lg-8">
            <p class="input-text-footer col-lg-5">{{ footerInputValue | upperCase }}</p>
            <p></p>
            <p></p>
        </div>

        <div class="right-part col-lg-4">

        </div>
    </section>
</template>
<script>
    import {filter} from './mixins/filter.js';
    import {mapState} from 'vuex';
    export default {
        name: 'Content',
        computed: {
            ...mapState('list', ['footerInputValue']),
        },
        mixins: [filter],
    }
</script>
<style lang="scss" scoped>
    @import '../styles/common.scss';
    .content-page {
        @include constantaMaxMinWidth;
        height: 300px;
        margin: 0px auto;
        padding-top: 100px;
        background-color: #FFFFFF;
        display: flex;

        .input-text-footer {
            @include fontKnewave;
            font-size: 72px;
            background-color: #f9e81c;
        }
    }
</style>