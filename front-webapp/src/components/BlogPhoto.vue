<template>
    <div class="photo-container">
        <ul class="photo-nav">
            <li>
                <a href="javascript:void(0);" class="a-active">照片墙</a>
            </li>
            <li>
                <a href="javascript:void(0);">视频</a>
            </li>
        </ul>

        <div class="photo-wrap">
            <ul>
                <p>2017-05</p>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
            </ul>

            <ul>
                <p>2017-04</p>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
                <li><a href="javascript:void(0);"><img src="/static/logo.png" alt=""></a></li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scope>
    .photo-nav{
        padding: 10px 10px 10px 20px;
        list-style: none;
        background-color: white;
        border-bottom: 1px solid #d9d9d9;

        &::after {
            content: "";
            display: block;
            height: 0;
            clear: both;
        }

        li {
            float: left;
            margin-right: 10px;
        }

        a {
            color: black;
            text-decoration: none;

            &:hover {
                color: lightcoral;
                text-decoration: none;
            }

            &:focus {
                text-decoration: none;
            }
        }

        .a-active {
            color: lightcoral;
        } 
    }

    .photo-wrap {
        padding: 10px;
        background-color: white;

        ul {
            list-style: none;
            padding: 0;
            border-bottom: 1px solid #d9d9d9;

            &::after {
                content: "";
                display: block;
                height: 0;
                clear: both;
            }

            p {
                margin: 5px;
                color: #808080;
            }

            li {
                float: left;
                width: 230px;
                height: 230px;
                margin: 5px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>