<template>
    <div style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;background-color: #FFFFFF;">
        <scroller class="scroller" style="flex: 1;">
            <text>用户名</text>
            <input type="text" placeholder="USERNAME" v-model="username">
            <text>密码</text>
            <input type="password" placeholder="PW" v-model="password">
            <wxc-button text="注册" @wxcButtonClicked="signup"></wxc-button>
            <text>- - -</text>
            <text>用户名</text>
            <input type="text" placeholder="USERNAME" v-model="username">
            <text>密码</text>
            <input type="password" placeholder="PW" v-model="password">
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
    import WxcButton from 'weex-ui/packages/wxc-button';
    import WxcPopup from 'weex-ui/packages/wxc-popup';
    import WxcDialog from 'weex-ui/packages/wxc-dialog';

    const modal = weex.requireModule('modal');
    const stream = weex.requireModule('stream');
    const storage = weex.requireModule('storage');
    module.exports = {
        components: {WxcButton, WxcPopup, WxcDialog},
        data: () => ({
            isShow: false,
            username: 'zc',
            password: '1',
            status: '未登录',
            token: '无',
            dialogShow: false,
            isChecked: false,
        }),
        methods: {
            buttonClicked() {
                this.isShow = true;
            },
            overlayClicked() {
                this.dialogShow = false;
            },
            login() {
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    url: 'http://192.168.31.251:3000/api/login',
                    body: JSON.stringify({username: this.username, password: this.password})
                }, function (res) {
                    modal.toast({'message': JSON.stringify(res.data.message), 'duration': 2});
                })
            },
            signup() {
                console.log('ee');
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    url: 'http://192.168.31.251:3000/api/signup',
                    body: JSON.stringify({username: this.username, password: this.password})
                }, function (res) {
                    if(!res.data)return modal.toast({'message':JSON.stringify(res,null,4),'duration': 2});
                    modal.toast({'message': JSON.stringify(res.data.message), 'duration': 2});
                    if (res.data.code === 0 && res.data.token) {
                        storage.setItem('user_name', this.username, function (e) {

                        });
                        storage.setItem('user_token', res.data.token,function (e) {
                            storage.getItem('user_token', function(e) {this.token=e.data})
                        });
                    }
                }.bind(this))
            },
            wxcDialogCancelBtnClicked() {
                //此处必须设置，组件为无状态组件，自己管理
                this.dialogShow = false;
            },
            wxcDialogConfirmBtnClicked() {
                //此处必须设置，组件为无状态组件，自己管理
                this.dialogShow = false;
                modal.toast({'message': '确定回调', 'duration': 1});
            },
            wxcDialogNoPromptClicked(e) {
                //此处必须设置，组件为无状态组件，自己管理
                this.isChecked = e.isChecked;
            }
        },
        created:function () {
            modal.toast({'message':'hello','duration': 2})
        }
    };
</script>