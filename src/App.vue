<template>
    <div class="main-wrapper-body">
        <header>
            <header-navigation />
        </header>
        <main>
            <router-view />
        </main>
        <footer-body />
    </div>
</template>
<script>
    import HeaderNavigation from './components/HeaderNavigation.vue';
    import FooterBody from './components/FooterBody.vue';
    import {mapActions} from 'vuex';
    export default {
        name: 'App',
        components: {
            HeaderNavigation,
            FooterBody,
        },
        methods: {
            ...mapActions('list', ['fetchDataList']),
        },
        async created () {
            await this.fetchDataList();
        }
    }
</script>
<style lang="scss">
    @font-face {
        font-family: 'Roboto-Regular';
        src: url(./fonts/Roboto-Regular.ttf);
    }

    @font-face {
        font-family: 'Knewave';
        src: url(./fonts/knewave.ttf);
    }
    @import './styles/common.scss';

    .main-wrapper-body {
        background-image: url('./assets/main-background.png');

        header {
            position: absolute;
            z-index: 999;
            width: 100%;
            background-color: $custom-light-green;
        }
    }
</style>
