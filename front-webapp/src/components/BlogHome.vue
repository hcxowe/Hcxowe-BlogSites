<template>
    <div class="home-container">
        <div class="nav-year">
            <TimerLine v-on:onselect="onSelectDate"></TimerLine>
        </div>

        <div class="jotting-area">
            <template v-for="jott in jottings">
                <Jotting v-bind:jotting="jott"></Jotting>
            </template>
        </div>
    </div>
</template>

<style lang="less">
    .home-container {
        .nav-year {
            float: left;
            padding: 10px;
        }

        .jotting-area {
            margin-left: 200px;
        }
    }
</style>

<script>
    import TimerLine from './common/TimerLine.vue'
    import Jotting from './common/Jotting.vue'
    import * as api from '../api'

    export default {
        components: { TimerLine, Jotting },
        name: 'BlogHome',
        data: function() {
            return {
                jottings: []
            }
        },
        methods: {
            onSelectDate ([year, month]) {
                console.log(`${year}-${month}`)
            }
        },
        created: function() {
            var self = this;

            api.getJotting(function(data) {
                self.$data.jottings = data;
            })
        }
    }
</script>