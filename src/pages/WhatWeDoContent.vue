<template>
    <article class="what-we-do-item container col-lg-2 col-md-2 col-sm-6 col-xs-12">
        <picture>
            <img :src="require(`@/assets/${renderItem.url}`)" class="img-w-d">
        </picture>

        <p class="item-title">{{renderItem.title}}</p>
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
    export default {
        name: 'WhatWeDoContent',
        props: {
            renderItem: {
                type: Object,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/common.scss';
    .what-we-do-item {

        .button-wrapper {
            display: flex;
            justify-content: center;
            button {
                margin-right: 10px;
                color: #FFFFFF;
                border-color: #FFFFFF;
                font-size: 18px;

                &:hover {
                    color: #000000;
                    border-color: transparent;
                    background-color: #feed23;
                }
            }
        }

    }

</style>