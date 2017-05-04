<template>
    <div class="home-container">
        <div class="nav-year">
            <ul>
                <li>
                    <a href="javascript:void(0);" v-bind:class="{ current: index == 2017 }" v-on:click="showMonths(2017)">2017</a>
                    <ul class="list-months">
                        <li><a href="javascript:void(0);">1</a></li>
                        <li><a href="javascript:void(0);">2</a></li>
                        <li><a href="javascript:void(0);">3</a></li>
                        <li><a href="javascript:void(0);">4</a></li>
                        <li><a href="javascript:void(0);">5</a></li>
                        <li><a href="javascript:void(0);">6</a></li>
                        <li><a href="javascript:void(0);">7</a></li>
                        <li><a href="javascript:void(0);">8</a></li>
                        <li><a href="javascript:void(0);">9</a></li>
                        <li><a href="javascript:void(0);">10</a></li>
                        <li><a href="javascript:void(0);">11</a></li>
                        <li><a href="javascript:void(0);">12</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" v-bind:class="{ current: index == 2016 }" v-on:click="showMonths(2016)">2016</a>
                    <ul class="list-months">
                        <li><a href="javascript:void(0);">1</a></li>
                        <li><a href="javascript:void(0);">2</a></li>
                        <li><a href="javascript:void(0);">3</a></li>
                        <li><a href="javascript:void(0);">4</a></li>
                        <li><a href="javascript:void(0);">5</a></li>
                        <li><a href="javascript:void(0);">6</a></li>
                        <li><a href="javascript:void(0);">7</a></li>
                        <li><a href="javascript:void(0);">8</a></li>
                        <li><a href="javascript:void(0);">9</a></li>
                        <li><a href="javascript:void(0);">10</a></li>
                        <li><a href="javascript:void(0);">11</a></li>
                        <li><a href="javascript:void(0);">12</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" v-bind:class="{ current: index == 2015 }" v-on:click="showMonths(2015)">2015</a>
                    <ul class="list-months">
                        <li><a href="javascript:void(0);">1</a></li>
                        <li><a href="javascript:void(0);">2</a></li>
                        <li><a href="javascript:void(0);">3</a></li>
                        <li><a href="javascript:void(0);">4</a></li>
                        <li><a href="javascript:void(0);">5</a></li>
                        <li><a href="javascript:void(0);">6</a></li>
                        <li><a href="javascript:void(0);">7</a></li>
                        <li><a href="javascript:void(0);">8</a></li>
                        <li><a href="javascript:void(0);">9</a></li>
                        <li><a href="javascript:void(0);">10</a></li>
                        <li><a href="javascript:void(0);">11</a></li>
                        <li><a href="javascript:void(0);">12</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less">
    .home-container {
        .nav-year {
            float: left;
            width: 300px;
            padding: 10px;
            background-color: white;
        }
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    .current + .list-months {
        display: block;
    }

    .list-months {
        display: none;
    }
</style>

<script>
    export default {
        name: 'BlogHome',
        data: function() {
            return {
                index: 2017
            }
        },
        methods: {
            showMonths: function(year) {
                this.index = year;
            }
        }
    }
</script>