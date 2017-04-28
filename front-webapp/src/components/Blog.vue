<template>
    <div class="blog-container">
        <nav class="navbar navbar-inverse" role="navigation">
            <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">HCXOWE的博客</a>
            </div>
            <div>
                <ul class="nav navbar-nav">
                    <li><router-link to="/blog/home">首页</router-link></li>
                    <li><router-link to="/blog/blog">博客</router-link></li>
                    <li><router-link to="/blog/read">阅读</router-link></li>
                    <li><router-link to="/blog/life">人生</router-link></li>
                </ul>

                <ul class="nav navbar-nav pull-right">
                    <li><router-link to="/blog/center">个人中心</router-link></li>
                    <li><a href="#">退出</a></li>
                </ul>
            </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

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