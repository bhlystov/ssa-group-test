<template>
    <article class="what-we-do-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <picture>
            <img :src="require(`@/assets/${renderItem.url}`)" class="img-w-d">
        </picture>

        <p class="item-title">{{ renderItem.title | upperCase }}</p>
        <hr class="under-title-line"/>
        <p class="item-description">
            {{renderItem.description}}
        </p>

        <div class="button-wrapper">
            <button class="btn btn-outline-secondary"
                    type="button"
            >
                Meer informatie
            </button>
        </div>

    </article>
</template>

<script>
    import {filter} from './mixins/filter.js';
    export default {
        name: 'WhatWeDoContent',
        props: {
            renderItem: {
                type: Object,
            }
        },
        mixins: [filter],
    }
</script>

<style lang="scss" scoped>
    @import '../styles/common.scss';
    .what-we-do-item {
        height: 520px;
        float: left;
        position: relative;

        picture {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 104px;
            .img-w-d {
                width: 55%;
            }
        }

        .item-title {
            @include fontKnewave;
            font-size: 24px;
            padding: 30px 0;
            color: $custom-light-green;
        }

        .under-title-line {
            height: 3px;
            background-color: $custom-light-green;
            border: none;
        }

        .item-description {
            @include fontRoboto;
            font-size: 16px;
            color: $white;
        }

        .button-wrapper {
            left: 0;
            right: 0;
            bottom: 50px;
            position: absolute;
            button {
                color: $white;
                border-color: $white;
                font-size: 14px;

                &:hover {
                    color: $black;
                    border-color: transparent;
                    background-color: #feed23;
                }
            }
        }

        @media (min-width: 320px) and  (max-width: 767px){
            height: 368px;
            picture {
                .img-w-d {
                    width: 35%;
                }
            }
            .item-title {
                padding: 0;
                font-size: 16px;
            }
            .item-description {
                font-size: 12px;
            }

            .button-wrapper {
                button {
                    font-size: 12px;
                }
            }
        }

        @media (min-width: 768px) and  (max-width: 900px) {
            height: 500px;
        }

        @media (min-width: 900px) and  (max-width: 1280px){
            max-width: 50%;
            margin-top: 30px;
            height: 477px;

            picture {
                .img-w-d {
                    width: 38%;
                }
            }
        }

    }

</style>