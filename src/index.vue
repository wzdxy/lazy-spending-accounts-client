<template>
    <div style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;background-color: #FFFFFF;">
        <scroller class="scroller" style="flex: 1;">
            <!--<wxc-button text="Open Popup"-->
                        <!--@wxcButtonClicked="buttonClicked"></wxc-button>-->
            <!--<wxc-popup popup-color="rgb(92, 184, 92)"-->
                       <!--:show="isShow"-->
                       <!--@wxcPopupOverlayClicked="overlayClicked"-->
                       <!--pos="left">-->
                <!--<div class="demo-content">-->
                    <!--<text>123456789abcdefghijklmn</text>-->
                <!--</div>-->
            <!--</wxc-popup>-->
            <text>用户名</text><input type="text" placeholder="ID" v-model="id">
            <text>密码</text><input type="password" placeholder="PW" v-model="pw">
            <wxc-button text="注册" @wxcButtonClicked="signup"></wxc-button>
            <text>- - -</text>
            <text>用户名</text><input type="text" placeholder="ID" v-model="id">
            <text>密码</text><input type="password" placeholder="PW" v-model="pw">
            <wxc-button text="登陆" @wxcButtonClicked="login"></wxc-button>
            <text>{{status}}</text>
            <text>{{token}}</text>


        </scroller>
        <wxc-dialog title="标题"
                    content="这里是内容"
                    :show="dialogShow"
                    :single="false"
                    :is-checked="isChecked"
                    :show-no-prompt="true"
                    @wxcDialogCancelBtnClicked="wxcDialogCancelBtnClicked"
                    @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked"
                    @wxcDialogNoPromptClicked="wxcDialogNoPromptClicked">
        </wxc-dialog>
    </div>
</template>

<script>
//    import { WxcButton, WxcPopup } from 'weex-ui';
    import WxcButton from 'weex-ui/packages/wxc-button';
    import WxcPopup from 'weex-ui/packages/wxc-popup';
    import WxcDialog from 'weex-ui/packages/wxc-dialog';
    const modal = weex.requireModule('modal');
    const stream= weex.requireModule('stream');
    module.exports = {
        components: { WxcButton, WxcPopup, WxcDialog },
        data: () => ({
            isShow: false,
            id:'zc',
            pw:'',
            status:'未登录',
            token:'无',
            dialogShow:false,
            isChecked: false
        }),
        methods: {
            buttonClicked () {
                this.isShow = true;
            },
            overlayClicked () {
                console.log('overlayClicked');
                this.dialogShow = false;
            },
            login(){
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    url: 'http://127.0.0.1:3000/api/login'
                },function (res) {
                    console.log(res);
                    modal.toast({ 'message': JSON.stringify(res.data.message), 'duration': 2 });
                })
            },
            signup(){
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    url: 'http://127.0.0.1:3000/api/signup',
                    body:JSON.stringify({id:this.id,pw:this.pw})
                },function (res) {
                    console.log(res);
                    modal.toast({ 'message': JSON.stringify(res.data.message), 'duration': 2 });
                })
            },
            wxcDialogCancelBtnClicked () {
                //此处必须设置，组件为无状态组件，自己管理
                this.dialogShow = false;
            },
            wxcDialogConfirmBtnClicked () {
                //此处必须设置，组件为无状态组件，自己管理
                this.dialogShow = false;
                modal.toast({ 'message': '确定回调', 'duration': 1 });
            },
            wxcDialogNoPromptClicked (e) {
                //此处必须设置，组件为无状态组件，自己管理
                this.isChecked = e.isChecked;
            }
        }
    };
</script>