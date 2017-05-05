<template>
    <div class="home-container">
        <div class="nav-year">
            <TimerLine v-on:onselect="onSelectDate"></TimerLine>
        </div>
    </div>
</template>

<style lang="less">
    .home-container {
        .nav-year {
            float: left;
            width: 300px;
            padding: 10px;
        }
    }
</style>

<script>
    import TimerLine from './common/TimerLine.vue'

    export default {
        components: { TimerLine },
        name: 'BlogHome',
        data: function() {
            return {
            }
        },
        methods: {
            onSelectDate ([year, month]) {
                console.log(`${year}-${month}`)
            }
        }
    }
</script>