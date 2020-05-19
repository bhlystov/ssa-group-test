<template>
    <footer>
        <div class="container footer-container">
            <div class="form-group col-lg-5 col-md-12">
                <p class="name-blocks-footer">{{ 'Text in the input must show be in the content page' | upperCase }}</p>
                <div class="input-group">
                    <input type="text"
                           class="form-control"
                           placeholder="Some text"
                           maxlength="20"
                           icon="search"
                           v-model="footerInputValue"
                    >
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary"
                                type="button"
                                @click="sendData()"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>

            <div class="community-container col-lg-3 col-md-6">
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

            <div class="contact-container col-lg-3 col-md-3">
                <h4 class="name-blocks-footer">CONTACT</h4>
                <p class="sub-category-contacts">Address:</p>
                <p class="sub-category-contacts-info">Country, City, Street 123</p>
                <p class="sub-category-contacts">Telephone:</p>
                <p class="sub-category-contacts-info">(123) 456 78 90</p>
                <p class="sub-category-contacts">Email:</p>
                <p class="sub-category-contacts-info">somemail@mail.com</p>
            </div>
        </div>
        <div class="bottom-footer">
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
        </div>
    </footer>
</template>
<script>
    import {mapMutations} from 'vuex';
    import {filter} from './mixins/filter.js';
    export default {
        name: 'FooterBody',
        data() {
            return {
                footerInputValue: '',
            }
        },
        mixins: [filter],
        methods: {
            ...mapMutations('list', ['setFooterInputValue']),
            sendData() {
                this.setFooterInputValue(this.footerInputValue);
                this.footerInputValue='';
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import '../styles/common.scss';
    footer  {
        overflow: hidden;
        background-color: #4fe3c1;

        .footer-container {
            overflow: hidden;
            @include constantaMaxMinWidth;

            & > div {
                float: left;
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
                    background-color: $custom-yellow;
                    border-color: transparent;
                }
            }

            .community-container {
                ul {
                    list-style-image: url("../assets/tringle-list.png");

                    li {
                        padding: 8px 0;
                        a {
                            color: $custom-dark-blue;
                            padding: 8px 0;
                        }
                    }

                    @media (min-width: 320px) and  (max-width: 767px){
                        padding-left: 16px;
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
                    color: $custom-dark-blue;
                }
            }
        }

        .bottom-footer {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            background-color: $custom-light-green;
            .copyright {
                @include fontRoboto;
                color: $custom-dark-blue;
                font-size: 14px;
                margin-top: 1rem;
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
                        background: url("../assets/sprite-social.png") no-repeat;
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

                @media (min-width: 320px) and  (max-width: 767px){
                    padding: 0;
                    li {
                        margin-right: 0;
                    }
                }
            }
        }

        @media (min-width: 768px) and  (max-width: 990px) {
            .form-group {
                .name-blocks-footer {
                    text-align: center;
                }
            }
            .community-container {
                margin-left: 85px;
            }
        }

        @media (min-width: 991px) and  (max-width: 1126px){
            .community-container, .contact-container  {
                max-width: 23%;
            }
        }
    }
</style>