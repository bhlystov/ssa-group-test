<template>
    <div class="main-wrapper-body">
        <header>
            <header-navigation />
        </header>
        <main>
            <transition name="fade">
                <router-view />
            </transition>
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
            ...mapActions('contentText', ['fetchContentText']),
        },
        async created () {
            await this.fetchDataList();
            await this.fetchContentText();
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
