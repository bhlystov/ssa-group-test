<template>
    <section class="content-page">
        <div class="left-part col-lg-8 col-sm-12">

            <p class="input-text-footer"
               v-if="footerInputValue"
            >
                <span>
                    {{ footerInputValue | upperCase }}
                </span>
            </p>
            <p class="content-text">
                {{ contentText.contentText_1 }}
            </p>
            <p class="content-text">
                {{ contentText.contentText_2 }}
            </p>

            <figure>
                <img src="../assets/marshmallows.png" alt="Marshmallows" />
                <figcaption class="under-img">Tussenkop</figcaption>
            </figure>

            <p class="content-text">
                {{ contentText.contentText_3 }}
            </p>
        </div>

        <div class="right-part col-lg-4 col-sm-12">
            <div class="sticky-container">
                <p class="title">{{ 'Some Title' | upperCase}}</p>
                <p class="content">
                    {{ contentText.contentText_4 }}
                </p>
                <p class="end-content">Leonerdo da Vinchi</p>
            </div>
        </div>
    </section>
</template>
<script>
    import {filter} from './mixins/filter.js';
    import {mapState, mapActions} from 'vuex';
    export default {
        name: 'Content',
        computed: {
            ...mapState('list', ['footerInputValue']),
            ...mapState('contentText', ['listContentText']),
            contentText() {
                return this.listContentText.find( item => this.$route.name === item.name) || [];
            }
        },
        mixins: [filter],
    }
</script>
<style lang="scss" scoped>
    @import '../styles/common.scss';
    .content-page {
        @include constantaMaxMinWidth;
        margin: 0px auto;
        padding: 100px 0;
        background-color: $white;
        display: flex;

        .left-part {
            .input-text-footer {
                @include fontKnewave;
                font-size: 72px;

                span {
                    padding: 26px;
                    background-color: $custom-yellow;
                }
            }

            .content-text {
                @include fontRoboto;
                font-size: 20px;
                line-height: 2;
                color: $custom-dark-blue;
            }

            figure {

                img {
                    width: 100%;
                }
                .under-img {
                    padding-top: 10px;
                    color: $custom-light-green;
                }
            }
        }

        .right-part {
            height: 100vh;
            .sticky-container {
                top: 0;
                position: sticky;
                background-color: $custom-dark-blue;
                padding: 40px;

                .title {
                    @include fontKnewave;
                    font-size: 28px;
                    color: $white;
                }

                .content {
                    @include fontRoboto;
                    padding-left: 10px;
                    border-left: 4px solid $white;
                    font-size: 15px;
                    line-height: 1.333;
                    color: $white;
                }

                .end-content {
                    @include fontRoboto;
                    text-align: end;
                    color: $custom-yellow;
                    font-size: 12px;
                }
            }
        }

        @media (min-width: 320px) and  (max-width: 991px) {
            flex-direction: column;
            .right-part {
                height: 50vh;
            }
        }

        @media (min-width: 320px) and  (max-width: 769px) {
            padding-top: 180px;
        }
    }
</style>