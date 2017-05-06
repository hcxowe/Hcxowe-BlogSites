<template>
    <div class="mark">
        <div class="popwnd-jotting">
            <div class="panel-title">
                <label>记录点滴, 留住回忆</label>
                <a class="panel-close" href="javascript:void(0);" @click.stop.prevent="closePopWnd"><i class="fa fa-times" aria-hidden="true"></i></a>
            </div>

            <div class="panel-notice">
                <label class="pull-right" v-show="fontCount > 0">已经写下{{ fontCount }}字</label>
            </div>

            <div class="panel-content">
                <textarea rows="5" ref="editJotting" @input="getFontCount"></textarea>
            </div>

            <div class="panel-tool">
                <i class="fa fa-picture-o" aria-hidden="true"></i>
                <button class="btn btn-warning pull-right" @click="publishJotting">发布</button>
            </div>
        </div>
    </div>
    
</template>

<style lang="less">
    .mark {
        position: absolute;
        left: 0; right: 0; top: 0; bottom: 0;
        color: black;
        background-color: rgba(0, 0, 0, .7)
    }

    .popwnd-jotting {
        position: absolute;
        width: 500px;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FFF;
        border: 1px solid #CCC;
        border-top: 1px solid #f0ad4e;

        .panel-title {
            padding-left: 10px;
            padding-right: 10px;
            height: 30px;
            border-bottom: 1px solid #ccc;

            label {
                margin-left: 5px;
                line-height: 30px;
                font-size: 14px;
            }
            .panel-close {
                float: right;
                margin-right: 5px;
                line-height: 30px;
            }
        }

        .panel-notice {
            height: 30px;

            label {
                line-height: 30px;
                margin-right: 10px;
                margin-bottom: 0;
            }
        }

        .panel-content {
            margin-left: 10px;
            margin-right: 10px;

            textarea {
                display: inline-block;
                width: 100%;
                line-height: 20px;
                resize: none;
                border: 1px solid #ccc;
                outline: none;

                &:focus {
                    border: 1px solid #f0ad4e;
                }
            }
        }

        .panel-tool {
            padding: 10px;

            &:after {
                display: block;
                content: " ";
                height: 0;
                clear: both;
            }

            .fa-picture-o {
                font-size: 2em;
                color: #84c002;
                cursor: pointer;

                &:hover {
                    color: #72a305;
                }
            }

            button {
                width: 80px;
            }
        }
        
    }
</style>

<script>
    export default {
        name: 'WriteJotting',
        data: function() {
            return {
                fontCount: 0
            }
        },
        computed: {
            
        },
        methods: {
            closePopWnd: function() {
                this.$store.commit('setWriteJotting', { isShow: false })
            },
            getTextareaRows: function() {
                console.log(this.$refs.editJotting.value.split(/\r?\n/).length);
            },
            getFontCount: function(evt) {
                this.fontCount = evt.target.value.length;
            },
            publishJotting: function() {
                this.$store.commit('setWriteJotting', { isShow: false })
                this.$refs.editJotting.value = ""
                this.fontCount = 0
            }
        }
    }
</script>