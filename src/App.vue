<template>
    <div>
        <header>
            <nav class="container">
                <ul class="navigation-list col-lg-9 col-md-9 col-sm-9 col-xs-9">
                    <li>
                        <router-link :to="{ name: 'content'}">Content</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'otherLinks'}">Other links</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'main'}">About Us</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contacts'}">Contact</router-link>
                    </li>
                </ul>
                <figure class="container-logo col-lg-3 col-md-3 col-sm-9 col-xs-9">
                    <!--<img :src="require(`@/assets/${item.imgBook}`)" class="img-book">-->
                    <router-link :to="{ name: 'main'}">
                        <img src="./assets/logo.png" alt="Logo" class="logo"/>
                    </router-link>
                </figure>
            </nav>
        </header>
        <main>
            <router-view />
        </main>
        <footer>
            <div class="container footer-container  col-lg-9 col-md-9 col-sm-9 col-xs-9">
                <div class="form-group col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <p class="name-blocks-footer">TEXT IN THE INPUT MUST SHOW BE IN THE CONTENT PAGE</p>
                    <div class="input-group">
                        <input type="text"
                               class="form-control"
                               placeholder="Some text"
                               icon="search" >
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary"
                                    type="button"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                <div class="community-container col-lg-2 col-md-2 col-sm-3 col-xs-3">
                    <p class="name-blocks-footer">COMMUNITY</p>
                    <ul>
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Some long long link 3</a>
                        </li>
                        <li>
                            <a href="#">Somelonglonglink 4</a>
                        </li>
                    </ul>
                </div>

                <div class="contact-container col-lg-2 col-md-2 col-sm-3 col-xs-3">
                    <h4 class="name-blocks-footer">CONTACT</h4>
                    <p class="sub-category-contacts">Address:</p>
                    <p class="sub-category-contacts-info">Country, City, Street 123</p>
                    <p class="sub-category-contacts">Telephone:</p>
                    <p class="sub-category-contacts-info">(123) 456 78 90</p>
                    <p class="sub-category-contacts">Email:</p>
                    <p class="sub-category-contacts-info">somemail@mail.com</p>
                </div>
            </div>
            <address>
                <p class="copyright">Some long text about copyright.</p>
                <article>
                    <ul class="social-links">
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#"></a>
                        </li>
                    </ul>
                </article>
            </address>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'App',
    }
</script>
<style lang="scss" scoped>
    $custom-light-green: #4fd4b9;
    $custom-blue-green: #1b6763;
    $custom-dark-blue: #434b6f;

    @font-face {
        font-family: 'Roboto-Regular';
        src: url(./fonts/Roboto-Regular.ttf);
    }

    @font-face {
        font-family: 'Knewave';
        src: url(./fonts/knewave.ttf);
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

    header {
        position: absolute;
        z-index: 1;
        width: 100%;
        background-color: $custom-light-green;

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
        }
    }

    footer  {
        background-color: #4fe3c1;

        .footer-container {
            display: flex;
            flex-direction: row;
            @include constantaMaxMinWidth;

            & > div {
                margin-right: 30px;
                .name-blocks-footer {
                    @include fontKnewave;
                    color: $custom-dark-blue;
                    font-size: 20px;
                    padding: 30px 0;
                }
            }

            .input-group {
                input {
                    border: 1px solid $custom-dark-blue;
                    border-radius: 3px 0 0 3px;
                    background-color: #4fe3c1;
                    font-size: 24px;
                    padding: 20px;
                }
                button {
                    background-color: #fdf063;
                    border-color: transparent;
                }
            }

            .community-container {
                ul {
                    list-style-image: url("./assets/tringle-list.png");
                    
                    li {
                        padding: 8px 0;
                        a {
                            color: $custom-blue-green;
                            padding: 8px 0;
                        }
                    }
                }
            }

            .contact-container {
                p {
                    margin-bottom: 7px;
                }
                .sub-category-contacts {
                    @include fontRoboto;
                    color: $custom-dark-blue;
                    font-weight: bold;
                }
                .sub-category-contacts-info {
                    @include fontRoboto;
                    color: $custom-blue-green;
                }
            }
        }

        address {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            background-color: $custom-light-green;
            .copyright {
                @include fontRoboto;
                color: $custom-dark-blue;
                font-size: 14px;
            }
            .social-links {
                font-size: 0;
                list-style: none;

                li {
                    display: inline-block;
                    margin-right: 10px;

                    a {
                        display: block;
                        width: 42px;
                        height: 42px;
                        background: url("./assets/sprite-social.png") no-repeat;
                        -webkit-background-size: 90% 100%;
                        background-size: 119px;
                    }

                    &:nth-of-type(1) {
                        a {
                            background-position: 10px 8px;
                        }
                    }
                    &:nth-of-type(2) {
                        a {
                            background-position: -37px 8px;
                        }
                    }
                    &:nth-of-type(3) {
                        a {
                            background-position: -84px 8px;
                        }
                    }
                }
            }
        }
    }
</style>
