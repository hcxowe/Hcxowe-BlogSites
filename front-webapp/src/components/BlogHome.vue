<template>
    <div class="home-container">
        <div class="nav-year">
            <TimerLine v-on:onselect="onSelectDate"></TimerLine>
        </div>

        <div class="jotting-area">
            <template v-for="jott in jottings">
                <Jotting v-bind:jotting="jott" :hidePopDown="hidePopDown" @display="hidePopDown=false"></Jotting>
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
    import * as types from '../store/modules/blogHome/types'

    export default {
        components: { TimerLine, Jotting },
        name: 'BlogHome',
        data: function() {
            return {
                hidePopDown: true
            }
        },
        computed: {
            jottings: function() {
                return this.$store.state.blogHome.jottings.slice(0).reverse();
            }
        },
        methods: {
            onSelectDate ([year, month]) {
                console.log(`${year}-${month}`)
            }
        },
        created: function() {
            this.$store.dispatch(types.BLOGHOME_GET_JOTTINGS, this.$store.state.userInfo.userName);
        },
        mounted: function() {
            document.addEventListener('click', (evt) => {
                console.log('document.click');
                this.hidePopDown = true;
            });
        }
    }
</script>