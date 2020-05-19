<template>
    <section class="main-container">
        <div class="train-container">
            <div class="train-container-content">
                <p class="train-title">{{ 'Lorem ipsum dolor sit amet!' | upperCase }}</p>
                <p class="train-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, laudantium,
                    nobis. Aperiam aspernatur, assumenda consequatur dolorum, eligendi eos ex
                    itaque nemo nostrum officia porro quia quo rem repudiandae temporibus?
                    Reprehenderit!
                </p>
                <div class="button-wrapper">
                    <button class="btn btn-outline-secondary"
                            type="button"
                    >
                        Download
                    </button>
                    <button class="btn btn-outline-secondary"
                            type="button"
                    >
                        Meer informatie
                    </button>
                </div>
            </div>
            <div class="train-transparent-shadow"></div>
        </div>
        <div class="what-we-do-container">
            <p class="what-we-do-title">{{ 'Some Title' | upperCase }}</p>

            <div class="container what-we-do-container-content">
                <what-we-do-content
                        v-for="item in listWhatWeDo"
                        :key="item.id"
                        :render-item="item"
                />
            </div>
        </div>
    </section>
</template>
<script>
    import WhatWeDoContent from './WhatWeDoContent.vue';
    import {mapState} from 'vuex';
    import {filter} from './mixins/filter.js';

    export default {
        name: 'Main',
        components: {
            WhatWeDoContent,
        },
        computed: {
            ...mapState('list', ['listWhatWeDo']),
        },
        mixins: [filter],
    }
</script>
<style lang="scss" scoped>
    @import '../styles/common.scss';

    .main-container {
        @include constantaMaxMinWidth;
        margin: 0px auto;

        .train-container {
            @include fullCenter;
            width: 100%;
            height: 100vh;
            background: url('../assets/slide.jpg') no-repeat;
            -webkit-background-size: cover;
            background-size: cover;
            position: relative;

            .train-container-content {
                width: 45%;
                position: relative;
                z-index: 2;
                max-height: 459px;
                p {
                    text-align: center;
                }
                .train-title {
                    @include fontKnewave;
                    color: $custom-yellow;
                    font-size: 64px;
                }
                .train-content {
                    @include fontRoboto;
                    color: $white;
                    font-size: 26px;
                }
                .button-wrapper {
                    display: flex;
                    justify-content: center;
                    button {
                        margin-right: 10px;
                        color: $white;
                        border-color: $white;
                        font-size: 18px;

                        &:hover {
                            color: $black;
                            border-color: transparent;
                            background-color: $custom-yellow;
                        }
                    }
                }
            }

            .train-transparent-shadow {
                width: 100%;
                height: 100%;
                background-color: $black;
                opacity: 0.3;
                position: absolute;
            }
        }


        .what-we-do-container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            background-color: $custom-dark-blue;
            -webkit-box-shadow: inset 0px 24px 39px 0px rgba(0,0,0,0.22);
            -moz-box-shadow: inset 0px 24px 39px 0px rgba(0,0,0,0.22);
            box-shadow: inset 0px 24px 39px 0px rgba(0,0,0,0.22);

            .what-we-do-title {
                @include fontKnewave;
                font-size: 64px;
                color: $custom-light-green;
                text-align: center;
                padding: 45px 0 10px 0;
            }

            .what-we-do-container-content {
                width: 75%;
                text-align: center;
            }
        }

        @media (min-width: 768px) and  (max-width: 1280px) {
            .train-container {
                .train-container-content {

                    .train-title {
                        font-size: 35px;
                    }
                    .train-content {
                        font-size: 20px;
                    }
                }
            }

            .what-we-do-container {
                .what-we-do-title {
                    font-size: 35px;
                }
            }
        }

        @media (min-width: 320px) and  (max-width: 767px) {
            .train-container {
                .train-container-content {
                    margin-top: 180px;

                    .train-title {
                        font-size: 18px;
                    }
                    .train-content {
                        font-size: 12px;
                    }

                    .button-wrapper button {
                        font-size: 10px;
                    }
                }
            }

            .what-we-do-container {
                .what-we-do-title {
                    font-size: 18px;
                    padding-top: 20px;
                    padding-bottom: 0;
                }
            }
        }
    }
</style>