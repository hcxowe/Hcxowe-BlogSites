<template>
    <div class="blog-container">
        <nav class="navbar navbar-inverse" role="navigation">
            <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" :href="'/'+ userInfo.userName.toLowerCase()">{{ userInfo.userName }}的博客</a>
            </div>
            <div>
                <ul class="nav navbar-nav">
                    <li><router-link :to="{ name: 'blogHome', params: { username: userInfo.userName.toLowerCase() }}">首页</router-link></li>
                    <li><router-link :to="{ name: 'blogArticle', params: { username: userInfo.userName.toLowerCase() }}">文章</router-link></li>
                    <li><router-link :to="{ name: 'blogRead', params: { username: userInfo.userName.toLowerCase() }}">阅读</router-link></li>
                    <li><router-link :to="{ name: 'blogLife', params: { username: userInfo.userName.toLowerCase() }}">人生</router-link></li>
                </ul>

                <ul class="nav navbar-nav pull-right">
                    <!--<li><router-link to="/blog/center">个人中心</router-link></li>-->
                    <!--<li><a href="/">退出</a></li>-->
                </ul>
            </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

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

<style lang="less">
    .navbar-header {
        font-size: 20px;
    }
    .navbar {
        margin-bottom: 0 !important;
        font-size: 16px;
        border-radius: 0 !important;
    }
    .router-link-active {
        color: white !important;
    }
</style>