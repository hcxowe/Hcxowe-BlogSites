<template>
    <div class="timeline-container">
        <ul class="date-year">
            <li v-for="item in dateTime">
                <a href="javascript:void(0);" v-bind:class="{ current: curyear == item.year, 'year': true, 'date-active': curyear == item.year }" v-on:click="showMonths(item.year)">
                    {{ item.year }}年
                </a>
                <ul class="list-months">
                    <li v-for="monthItem in item.months">
                        <a href="javascript:void(0);" class="month" v-bind:class="{ 'date-active': curmonth == monthItem.month }" v-on:click="selectMonth(monthItem.month)">
                            {{ monthItem.month }}月
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<<style lang="less">
    .timeline-container {
        ul {
            list-style: none;
            padding-left: 0;

            li {
                margin-bottom: 2px;
                margin-top: 2px;
            }
        }
    }

    .date-normal {
        padding: 2px;
        color: #696e78;
        text-decoration: none;
    }

    .date-active {
        color: white !important;
        text-decoration: none;
        background-color: #696e78;
    }

    .date-year {
        .year {
            .date-normal;
            padding-right: 5px;
            border-right: 4px solid #696e78;
        }
        .year:hover {
           .date-active;
        }
    }

    .list-months {
        .month {
            .date-normal;
            margin-left: 53px;
            padding-left: 5px;
            border-left: 4px solid #696e78;
        }
        .month:hover {
            .date-active;
        }
    }

    .current + .list-months {
        display: block;
    }

    .list-months {
        display: none;
    }
</style>

<script>
    import * as api from '../../api'

    export default {
        data: function() {
            return {
                dateTime: [],
                curyear: 0,
                curmonth: 0
            }
        },

        created: function() {
            var self = this;

            new Promise(function(resolve, reject) {
                api.getTimeline(resolve);
            }).then(function(data) {
                self.dateTime = data;
            }).catch(function(err) {
                console.log(err);
            });
        },

        methods: {
            showMonths (year) {
                this.curyear = year;
                this.curmonth = 0;

                this.$emit('onselect', [this.curyear, this.curmonth])
            },
            selectMonth (month) {
                this.curmonth = month;

                this.$emit('onselect', [this.curyear, this.curmonth])
            }
        }
    }
</script>