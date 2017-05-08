<template>
    <div class="popwnd-mark">
        <div class="popwnd-jotting">
            <div class="panel-title" v-drag>
                <label>记录点滴, 留住回忆</label>
                <a class="panel-close" href="javascript:void(0);" @click.stop.prevent="closePopWnd"><i class="fa fa-times" aria-hidden="true"></i></a>
            </div>

            <div class="panel-notice">
                <label class="pull-right" v-show="fontCount > 0">已经写下{{ fontCount }}字</label>
            </div>

            <div class="panel-content">
                <textarea rows="5" ref="editJotting" @input="getFontCount" v-model="content"></textarea>
            </div>

            <div class="panel-tool">
                <i class="fa fa-picture-o" aria-hidden="true"></i>
                <button class="btn btn-warning pull-right" @click="publishJotting">发布</button>
            </div>
        </div>
    </div>
    
</template>

<style lang="less">
    .popwnd-mark {
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
                fontCount: 0,
                content: ""
            }
        },
        computed: {
            
        },
        directives: {
            drag: function(el, binding) {
                var isDrag = false,
                    startPoint = {
                        x: 0,
                        y: 0
                    };

                function offset(node) {
                    var totalLeft = null, 
                        totalTop = null,
                        parent = node.offsetParent

                    totalLeft += node.offsetLeft
                    totalTop += node.offsetTop

                    while(parent) {
                        totalLeft += parent.offsetLeft
                        totalTop += parent.offsetTop
                        parent = parent.offsetParent
                    }

                    return {
                        left: totalLeft,
                        top: totalTop
                    }
                }

                el.addEventListener('mousedown', function(evt) {
                    isDrag = true;
                    
                    var offsetXY = offset(evt.target)

                    startPoint.x = evt.pageX - offsetXY.left; 
                    startPoint.y = evt.pageY - offsetXY.top;
                })

                document.addEventListener('mousemove', function(evt) {
                    if (!isDrag) {
                        return;
                    }

                    // 限制拖动范围
                    var left = 0, top = 0;

                    if (evt.pageX - startPoint.x - el.parentNode.offsetWidth / 2 < 0) {
                        left = el.parentNode.offsetWidth / 2;
                    }
                    else if (evt.pageX + el.parentNode.offsetWidth - (startPoint.x + el.parentNode.offsetWidth/2) > document.body.clientWidth) {
                        left = document.body.clientWidth - el.parentNode.offsetWidth / 2;
                    }
                    else {
                        left = evt.pageX - startPoint.x
                    }
                    // else if() {
                    //     left = document.body.clientWidth - el.parentNode.offsetWidth;
                    // }

                    // if (evt.pageY - startPoint.Y < 0) {
                    //     top = 0;
                    // }
                    // else if(evt.pageX - startPoint.y + el.parentNode.offsetHeight > document.body.clientHeight) {
                    //     top = document.body.clientHieght - el.parentNode.offsetHeight;
                    // }

                    //el.parentNode.style.left = left + 'px';
                    //el.parentNode.style.top = top + 'px';
                    //console.log(`${left}, ${top}`);

                    el.parentNode.style.left = left + 'px'
                    el.parentNode.style.top = evt.pageY - startPoint.y + 'px'
                })
                
                document.addEventListener('mouseup', function() {
                    isDrag = false;
                })
            } 
        },
        methods: {
            closePopWnd: function() {
                this.$store.commit('setWriteJotting', { isShow: false })
                this.content = ""
                this.fontCount = 0
            },
            getTextareaRows: function() {
                console.log(this.$refs.editJotting.value.split(/\r?\n/).length);
            },
            getFontCount: function(evt) {
                this.fontCount = this.content.length;
            },
            publishJotting: function() {
                this.closePopWnd();
            }
        }
    }
</script>