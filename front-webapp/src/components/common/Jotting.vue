<template>
    <div class="single-jotting">
        <div class="userface-container">
            <a :href="jotting.home" :title="jotting.name">
                <img :src="jotting.faceImg">
            </a>
        </div>

        <div class="jotting-container">
            <p>
                <a :href="jotting.home">{{ jotting.name }}</a>

                <a class="pull-right" href="javascript:void(0);" @click.stop="onClickPopDown">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
            </p>
            <p>{{ jotting.time }}</p>
            <p>{{ jotting.text }}</p>
            <transition name="slide">
                <ul class="pop-down" v-show="showPopDown" @click.stop>
                    <li><a href="javascript:void(0);" @click.stop.prevent="delJottong">删除</a></li>
                </ul>
            </transition>
        </div>

        <div class="jottimg-container" v-if="jotting.imgs && jotting.imgs.length!=0">
            <ul>
                <li v-for="item in jotting.imgs">
                    <img :src="item">
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less">

    .slide-enter {
        opacity: 0;
        transform: translateY(-20px);
    }
    .slide-enter-active {
        transition: all .2s linear;
    }

    .slide-leave-active {
        opacity: 0;
        transform: translateY(-20px);
        transition: all .2s linear;
    }

    .single-jotting {
        padding: 20px;
        border-radius: 2px;
        background-color: white;
        margin-bottom: 15px;

        a {
            text-decoration: none;
            color: black;
        }

        a:hover {
            color: lightcoral;
        }

        .userface-container {
            float: left;

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }

        .jotting-container {
            position: relative;
            margin-left: 60px;

            p {
                margin-bottom: 5px;
            }

            p:nth-child(1) {
                font-weight: bold;
                font-size: 16px;
            }

            p:nth-child(2) {
                color: #808080;
            }

            p:nth-child(3) {
                white-space: pre-wrap;
            }

            .fa-angle-down {
                font-size: 20px;
            }

            .pop-down {
                position: absolute;
                top: 0px; right: 0;
                list-style: none;
                border: 1px solid #ccc;
                border-radius: 2px;
                box-shadow: 0 0 5px 0 rgba(0, 0, 0, .2);
                padding: 10px;
                background-color: white;
            }
        } 

        .jottimg-container {
            margin-left: 60px;
            
            ul {
                padding: 0;
                list-style: none;
                
                li {
                    float: left;
                    width: 25%;

                    img {
                        width: 160px;
                        border: 1px solid #ccc;
                    }
                }

                &:after {
                    display: block;
                    content: ' ';
                    clear: both;
                    height: 0;
                }
            }
        }
    }
</style>

<script>
    import { BLOGHOME_DELETE_JOTTINGS } from '../../store/modules/blogHome/types'

    export default {
        name: 'Jotting',
        props: ['jotting', 'hidePopDown'],
        data: function() {
            return {
                showPopDown: false
            }
        },
        watch: {
            hidePopDown: function(value) {
                if (value) {
                    this.showPopDown = false;
                }
            }
        },
        methods: {
            onClickPopDown: function() {
                this.showPopDown = true;
                this.$emit('display');
            },
            delJottong: function() {
                this.$store.dispatch(BLOGHOME_DELETE_JOTTINGS, this.jotting).then(()=>{
                    this.showPopDown = false;
                })
            }
        }
    }
</script>