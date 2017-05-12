<template>
    <transition name="popwnd" >
            <div class="popwnd-mark">
                <div class="popwnd-jotting">
                    <div class="panel-title" v-drag>
                        <label>记录点滴, 留住回忆</label>
                        <a class="panel-close" href="javascript:void(0);" @mousedown.stop @click.stop="closePopWnd"><i class="fa fa-times" aria-hidden="true"></i></a>
                    </div>

                    <div class="panel-notice">
                        <label class="pull-right" v-show="content.length > 0">已经写下{{ content.length }}字</label>
                    </div>

                    <div class="panel-content">
                        <textarea rows="5" ref="editJotting" v-model="content" v-focus></textarea>
                    </div>

                    <div class="panel-tool">
                        <i class="fa fa-picture-o" aria-hidden="true"></i>
                        <button class="btn btn-warning pull-right" @click="publishJotting">发布</button>
                    </div>
                </div>
            </div>
    </transition>
</template>

<style lang="less">
    .popwnd-enter {
        transform: scale(1.1);
        opacity: 0;
    }
    .popwnd-enter-active {
        transition: all .3s ease;
    }
    .popwnd-leave-active {
        transform: scale(1.1);
        opacity: 0;
        transition: all .3s ease;
    }

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
    import * as types from '../../store/modules/blogHome/types'

    export default {
        name: 'WriteJotting',
        data: function() {
            return {
                fontCount: 0,
                content: ""
            }
        },
        mounted: function() {
        },
        computed: {
            
        },
        directives: {
            drag: {
                inserted (el) {
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
                        el.style.cursor = 'move';

                        document.addEventListener('mousemove', onMouseMove);

                        var offsetXY = offset(evt.target)

                        startPoint.x = evt.pageX - offsetXY.left 
                        startPoint.y = evt.pageY - offsetXY.top
                    })

                    function onMouseMove(evt) {
                        if (!isDrag) {
                            return;
                        }

                        document.addEventListener('mouseup', onMouseUp);

                        // 限制拖动范围
                        var left = 0, top = 0;

                        if (evt.pageX - startPoint.x - el.parentNode.offsetWidth / 2 < 0) {
                            left = el.parentNode.offsetWidth / 2;
                        }
                        else if (evt.pageX + el.parentNode.offsetWidth - (startPoint.x + el.parentNode.offsetWidth / 2) > document.body.clientWidth) {
                            left = document.body.clientWidth - el.parentNode.offsetWidth / 2;
                        }
                        else {
                            left = evt.pageX - startPoint.x
                        }
                        
                        if (evt.pageY - startPoint.y - el.parentNode.offsetHeight / 2 < 0) {
                            top = el.parentNode.offsetHeight / 2;
                        }
                        else if(evt.pageY + el.parentNode.offsetHeight - startPoint.y - el.parentNode.offsetHeight / 2  > document.body.clientHeight) {
                            top = document.body.clientHieght - el.parentNode.offsetHeight / 2;
                        }
                        else {
                            top = evt.pageY - startPoint.y
                        }

                        el.parentNode.style.left = left + 'px'
                        el.parentNode.style.top = top + 'px'
                    };

                    function onMouseUp() {
                        isDrag = false;
                        el.style.cursor = 'default';

                        document.removeEventListener('mousemove', onMouseMove);
                        document.removeEventListener('mouseup', onMouseUp);
                    }
                }
            },

            focus: {
                inserted: function(el) {
                    el.focus();
                }
            }
        },
        methods: {
            dateFormat: function(date, fmt) {
                var o = {
                    "M+": date.getMonth() + 1, //月份 
                    "d+": date.getDate(), //日 
                    "h+": date.getHours(), //小时 
                    "m+": date.getMinutes(), //分 
                    "s+": date.getSeconds(), //秒 
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
                    "S": date.getMilliseconds() //毫秒 
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            },
            closePopWnd: function() {
                this.$emit('close')
                this.content = ""
                this.fontCount = 0
            },
            publishJotting: function() {
                if (this.content.length == 0) {
                    this.$refs.editJotting.focus();
                    return;
                }

                var self = this;
                this.$store.dispatch(types.BLOGHOME_ADD_JOTTINGS, {
                    home: '/hcxowe',
                    name: 'hcxowe',
                    faceImg: '/static/user-small.png',
                    time: self.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'),
                    text: self.content
                });

                this.closePopWnd();
            }
        }
    }
</script>