<template>
    <div class="single-jotting">
        <div class="userface-container">
            <a :href="jotting.home" :title="jotting.name">
                <img :src="jotting.faceImg">
            </a>
        </div>

        <div class="jotting-container">
            <p><a :href="jotting.home">{{ jotting.name }}</a></p>
            <p>{{ jotting.time }}</p>
            <p>{{ jotting.text }}</p>
        </div>

        <div class="jottimg-container">
            <ul>
                <li v-for="item in jotting.imgs">
                    <img :src="item">
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less">
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
    export default {
        name: 'Jotting',
        props: ['jotting'],
        data: function() {
            return {
                
            }
        }
    }
</script>