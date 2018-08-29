<template>
    <div class="main-container">
        <div class="train-container">
            <div class="what-we-do-container"></div>
            <div class="train-container-content">
                <p class="train-title">Lorem ipsum dolor sit amet!</p>
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
    </div>
</template>
<script>
    export default {
        name: 'Main',
    }
</script>
<style lang="scss" scoped>
    $custom-light-green: #4fd4b9;
    $custom-blue-green: #1b6763;
    $custom-dark-blue: #434b6f;

    @font-face {
        font-family: 'Roboto-Regular';
        src: url(../fonts/Roboto-Regular.ttf);
    }

    @font-face {
        font-family: 'Knewave';
        src: url(../fonts/knewave.ttf);
    }

    @mixin fontKnewave {
        font-family: 'Knewave';
    }

    @mixin fontRoboto {
        font-family: 'Roboto-Regular';
    }

    @mixin constantaMaxMinWidth {
        max-width: 1366px;
        min-width: 320px;
    }
    @mixin fullCenter {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main-container {
        @include constantaMaxMinWidth;
        margin: 0px auto;
        /*TODO минимальная ширина картинки будет 1024px дальше нужно перестраивать*/
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
                    color: #feed23;
                    font-size: 64px;
                }
                .train-content {
                    @include fontRoboto;
                    color: #FFFFFF;
                    font-size: 26px;
                }
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

            .train-transparent-shadow {
                width: 100%;
                height: 100%;
                background-color: #000000;
                opacity: 0.3;
                position: absolute;
            }
        }
    }
</style>