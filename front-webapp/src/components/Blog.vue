<template>
    <div class="blog-container">
        <header>
            <h1>hcxowe</h1>

            <div class="area-login pull-right">
                <a href="javascript:void(0);" @click.stop.prevent="showJottingWnd = true">记录一下</a>
                <span class="vr-line"></span>
                <a href="javascript:void(0);">注册</a>
                <span class="vr-line"></span>
                <a href="javascript:void(0);">登陆</a>
            </div>
        </header>

        <section>
            <div class="user-detail">
                <div class="user-left">
                    <p class="photo-wrap">
                        <a href="javascript:void(0);">
                            <img v-bind:src="userDetail.faceImg">
                        </a>
                    </p>
                    <p class="user-name">{{ userInfo.userName }}</p>
                    <p class="user-desc">{{ userInfo.description }}</p>
                </div>
                
                <div class="user-right">
                    <p>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>    {{ userDetail.address }}
                    </p>
                    <p>
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>    毕业于<a target="_blank" :href="userDetail.school.url"> {{ userDetail.school.name }}</a>
                    </p>
                    <p>
                        <i class="fa fa-envelope" aria-hidden="true"></i>    {{ userDetail.email }}
                    </p>
                    <p>
                        <i class="fa fa-birthday-cake" aria-hidden="true"></i>    {{ userDetail.brithday }}
                    </p>
                    <p>
                        <i class="fa fa-id-card-o" aria-hidden="true"></i>    {{ userDetail.intro }}
                    </p>
                    <p>
                        <i class="fa fa-bars" aria-hidden="true"></i>    <a href="#">more</a>
                    </p>
                </div>
            </div>

            <div class="nav-bar">
                <ul>
                    <li><router-link :to="{ name: 'blogHome', params: { username: userInfo.userName.toLowerCase() }}">首页</router-link></li>
                    <li><router-link :to="{ name: 'blogPhoto', params: { username: userInfo.userName.toLowerCase() }}">相册</router-link></li>
                    <li><router-link :to="{ name: 'blogArticle', params: { username: userInfo.userName.toLowerCase() }}">文章</router-link></li>
                    <li><router-link :to="{ name: 'blogRead', params: { username: userInfo.userName.toLowerCase() }}">阅读</router-link></li>
                </ul>
            </div>

            <div class="content-container">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>   
        </section>

        <WirteJottingWnd v-if="showJottingWnd" @close="showJottingWnd = false"></WirteJottingWnd>
    </div>
</template>

<style lang="less">
    .vr-line {
        border: 1px solid #d9d9d9;
    }

    .blog-container {
        width: 100%; 
        height: 100%;
        background: url(../assets/bg.jpg) no-repeat;
        background-size: cover;
        overflow: auto;

        header {
            position: fixed;
            top: 0; left: 0; right: 0; 
            width: 100%;
            height: 42px;
            background-color: rgba(255,255,255,.94);
            box-shadow: 0 0 1px 0px rgba(0,0,0,0.3), 0 0 6px 2px rgba(0,0,0,0.15);

            h1 {
                display: inline-block;
                line-height: 42px;
                vertical-align: middle;
                margin: 0 15px;
                font-size: 20px;
            }

            .area-login {
                display: inline-block;
                line-height: 42px;
                margin: 0 15px;

                a {
                    margin: 0 15px;
                    color: black;    

                    &:hover {
                        text-decoration: none;
                        color: lightcoral;
                    }
                }
                
            }
        }

        & > section {
            margin-top: 42px;
            width: 100%;
            height: 320px;
            padding-top: 10px;
        }
    }

    .user-detail {
        width: 980px;
        height: 300px;
        margin: 0 auto;
        color: white;
        background: url(../assets/bg_user.jpg) no-repeat;

        .photo-wrap {
            width: 100px;
            height: 100px;
            margin: 0 auto;
            padding: 0;
            border-radius: 50%;
            box-shadow: 0 0 10px 0 #FFF;
            overflow: hidden;
        }

        & > .user-left {
            float: left;
            width: 50%;
            margin-top: 50px;

            & > .user-name {
                margin: 15px auto 10px;
                text-align: center;
                font-size: 24px;
                font-weight: bold;
            }

            & > .user-desc {
                text-align: center;
                font-size: 16px;
            }
        }

        & > .user-right {
            float: left;
            width: 50%;
            margin-top: 50px;
            padding-left: 20px;
            border-left: 1px solid #FFF;

            p {
                //white-space: pre;
                margin: 10px 0;
                font-size: 16px;
            }

            i {
                width: 24px;
                text-align: center;
            }

            a {
                color: lightcoral;
            }
        }
    }

    .nav-bar {
        width: 980px;
        height: 42px;
        margin: 0 auto;
        background-color: white;

        ul {
            height: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
            &:after {
                display: block;
                content: " ";
                visibility: hidden;
                height: 0;
                clear: both;
            }

            li {
                float: left;
                width: 25%;
                height: 100%;
                line-height: 42px;
                text-align: center;

                a {
                    color: black;
                    text-decoration: none;

                    &:hover {
                        color: lightcoral;
                    }
                }
            }
        }
    }

    .content-container {
        width: 980px;
        //height: 1000px;
        //background-color: #FFF;
        margin: 10px auto;
    }

    .router-link-active {
        color: lightcoral !important;
    }
</style>

<script>
    import Vue from 'vue'
    import WirteJottingWnd from './common/WriteJotting.vue'

    export default {
        name: 'blog',
        data () {
            return {
                showJottingWnd: false
            }
        },
        computed: {
            userInfo () {
                return this.$store.state.userInfo
            },
            userDetail () {
                return this.$store.state.userDetail;
            }
        },
        mounted: function() {
            if (this.$store.state.userInfo) {
                this.$store.dispatch('getUserInfo', { username: this.$route.params.username }).then(() => {
                    console.log('已获取数据触发')
                })

                this.$store.dispatch('getUserDetail', { username: this.$route.params.username }).catch((err) => {
                    console.log(err);
                })
            }
        },
        methods: {
            writeJotting: function() {
                this.showJottingWnd = !this.showJottingWnd;
            }
        },
        components: {
            WirteJottingWnd
        }
    }
</script>

