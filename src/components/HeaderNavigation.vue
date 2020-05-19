<template>
    <nav class="container">
        <ul class="navigation-list col-lg-9">
            <li>
                <router-link :to="{ name: 'content'}">Content</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'otherLinks'}">Other links</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'aboutUs'}">About Us</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'contacts'}">Contact</router-link>
            </li>
        </ul>
        <figure class="container-logo col-lg-3 col-md-3">
            <router-link :to="{ name: 'main'}">
                <img src="../assets/logo.png" alt="Logo" class="logo"/>
            </router-link>
        </figure>
    </nav>
</template>
<script>
    export default {
        name: 'HeaderNavigation',
    }
</script>
<style lang="scss" scoped>
    @import '../styles/common.scss';
    nav {
        padding-top: 7px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0px auto;
        @include constantaMaxMinWidth;

        .navigation-list {
            font-size: 0;

            li {
                display: inline-block;
                font-size: 24px;
                margin-right: 40px;
                a {
                    @include fontRoboto;
                    color: $custom-blue-green;
                }
            }
        }

        .container-logo {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .logo {
                height: 57px;
            }
        }

        @media (min-width: 320px) and  (max-width: 767px){
            .navigation-list {
                max-width: 168px;
                li {
                    margin-right: 17px;
                }
            }
        }
    }

    @media (min-width: 320px) and  (max-width: 990px) {
        nav {
            .navigation-list {
                li {
                    font-size: 19px;
                }
            }
        }
    }
</style>