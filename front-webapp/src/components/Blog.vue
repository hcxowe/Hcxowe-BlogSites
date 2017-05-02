<template>
    <div class="blog-container">
        <header>
            <h1>hcxowe</h1>

            <div class="area-login pull-right">
                <a href="javascript:void(0);">注册</a>
                <span class="vr-line"></span>
                <a href="javascript:void(0);">登陆</a>
            </div>
        </header>


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
    }
    
    .router-link-active {
        color: white !important;
    }
</style>

<script>
    export default {
        name: 'blog',
        computed: {
            userInfo () {
                return this.$store.state.userInfo
            }
        },
        mounted: function() {
            if (this.$store.state.userInfo.userName === '') {
                this.$store.dispatch('getUserInfo', { username: this.$route.params.username }).then(() => {
                    console.log('已获取数据触发')
                })
            }
        }
    }
</script>

