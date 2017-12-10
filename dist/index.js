// { "framework": "Vue"} 

!function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=o.n(n);o.d(e,"default",function(){return i.a})},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=o(8),r=n(i),s=o(12),a=n(s),c=o(10),l=n(c),u=weex.requireModule("modal"),d=weex.requireModule("stream"),p=weex.requireModule("storage");t.exports={components:{WxcButton:r.default,WxcPopup:a.default,WxcDialog:l.default},data:function(){return{isShow:!1,username:"zc",password:"1",status:"未登录",token:"无",dialogShow:!1,isChecked:!1}},methods:{buttonClicked:function(){this.isShow=!0},overlayClicked:function(){this.dialogShow=!1},login:function(){d.fetch({method:"POST",type:"json",url:"http://192.168.31.251:3000/api/login",body:JSON.stringify({username:this.username,password:this.password})},function(t){u.toast({message:JSON.stringify(t.data.message),duration:2})})},signup:function(){console.log("ee"),d.fetch({method:"POST",type:"json",url:"http://127.0.0.1:3000/api/signup",body:JSON.stringify({username:this.username,password:this.password})},function(t){if(!t.data)return u.toast({message:JSON.stringify(t,null,4),duration:2});u.toast({message:JSON.stringify(t.data.message),duration:2}),0===t.data.code&&t.data.token&&(p.setItem("user_name",this.username,function(t){}),p.setItem("user_token",t.data.token,function(t){p.getItem("user_token",function(t){this.token=t.data})}))}.bind(this))},wxcDialogCancelBtnClicked:function(){this.dialogShow=!1},wxcDialogConfirmBtnClicked:function(){this.dialogShow=!1,u.toast({message:"确定回调",duration:1})},wxcDialogNoPromptClicked:function(t){this.isChecked=t.isChecked}},created:function(){u.toast({message:"hello",duration:2})}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",backgroundColor:"#FFFFFF"}},[o("scroller",{staticClass:["scroller"],staticStyle:{flex:"1"}},[o("text",[t._v("用户名")]),o("input",{attrs:{type:"text",placeholder:"USERNAME",value:t.username},on:{input:function(e){t.username=e.target.attr.value}}}),o("text",[t._v("密码")]),o("input",{attrs:{type:"password",placeholder:"PW",value:t.password},on:{input:function(e){t.password=e.target.attr.value}}}),o("wxc-button",{attrs:{text:"注册"},on:{wxcButtonClicked:t.signup}}),o("text",[t._v("- - -")]),o("text",[t._v("用户名")]),o("input",{attrs:{type:"text",placeholder:"USERNAME",value:t.username},on:{input:function(e){t.username=e.target.attr.value}}}),o("text",[t._v("密码")]),o("input",{attrs:{type:"password",placeholder:"PW",value:t.password},on:{input:function(e){t.password=e.target.attr.value}}}),o("wxc-button",{attrs:{text:"登陆"},on:{wxcButtonClicked:t.login}}),o("text",[t._v(t._s(t.status))]),o("text",[t._v(t._s(t.token))])],1),o("wxc-dialog",{attrs:{title:"标题",content:"这里是内容",show:t.dialogShow,single:!1,isChecked:t.isChecked,showNoPrompt:!0},on:{wxcDialogCancelBtnClicked:t.wxcDialogCancelBtnClicked,wxcDialogConfirmBtnClicked:t.wxcDialogConfirmBtnClicked,wxcDialogNoPromptClicked:t.wxcDialogNoPromptClicked}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,o){var n,i,r=[];r.push(o(19)),n=o(13);var s=o(23);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="D:\\weex-hello\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-25544232",i.style=i.style||{},r.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),t.exports=n},function(t,e,o){var n,i,r=[];r.push(o(17)),n=o(14);var s=o(21);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="D:\\weex-hello\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-685ff4c8",i.style=i.style||{},r.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),t.exports=n},function(t,e,o){var n,i,r=[];r.push(o(18)),n=o(15);var s=o(22);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="D:\\weex-hello\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-d2f87fa8",i.style=i.style||{},r.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),t.exports=n},function(t,e,o){var n,i,r=[];r.push(o(20)),n=o(16);var s=o(24);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="D:\\weex-hello\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-c7d735f0",i.style=i.style||{},r.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),t.exports=n},function(t,e,o){var n,i,r=[];n=o(1);var s=o(2);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="D:\\weex-hello\\src\\index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i.style=i.style||{},r.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),t.exports=n,t.exports.el="true",new Vue(t.exports)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(3),i=o.n(n);o.d(e,"default",function(){return i.a})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n={taobao:{backgroundColor:"#FF5000"},fliggy:{backgroundColor:"#FFC900"},normal:{backgroundColor:"#FFFFFF",borderColor:"#A5A5A5",borderWidth:"1px"},highlight:{backgroundColor:"#FFFFFF",borderColor:"#EE9900",borderWidth:"1px"}};e.STYLE_MAP=n;const i={taobao:{color:"#FFFFFF"},fliggy:{color:"#3D3D3D"},normal:{color:"#3D3D3D"},highlight:{color:"#EE9900"}};e.TEXT_STYLE_MAP=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(4),i=o.n(n);o.d(e,"default",function(){return i.a})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.CHECKED="https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png";e.UN_CHECKED="https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png"},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(6),i=o.n(n);o.d(e,"default",function(){return i.a})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i=o(9);e.default={props:{text:{type:String,default:"确认"},type:{type:String,default:"taobao"},disabled:{type:Boolean,default:!1},btnStyle:Object,textStyle:Object},computed:{mrBtnStyle:function(){var t=this.type,e=this.disabled,o=this.btnStyle,r=n({},i.STYLE_MAP[t],o);return e?n({},r,{backgroundColor:"rgba(0, 0, 0, 0.1)",borderWidth:0}):r},mrTextStyle:function(){var t=this.type,e=this.disabled,o=this.textStyle,r=n({},i.TEXT_STYLE_MAP[t],o);return e?n({},r,{color:"#FFFFFF"}):r}},methods:{onClicked:function(t){var e=this.type,o=this.disabled;this.$emit("wxcButtonClicked",{e:t,type:e,disabled:o})}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n),r=o(11);e.default={components:{WxcOverlay:i.default},props:{show:{type:Boolean,default:!1},single:{type:Boolean,default:!1},title:{type:String,default:""},content:{type:String,default:""},top:{type:Number,default:400},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"},mainBtnColor:{type:String,default:"#EE9900"},secondBtnColor:{type:String,default:"#666666"},showNoPrompt:{type:Boolean,default:!1},noPromptText:{type:String,default:"不再提示"},isChecked:{type:Boolean,default:!1}},data:function(){return{noPromptIcon:r.UN_CHECKED,pageHeight:1334}},created:function(){var t=weex.config.env,e=t.deviceHeight,o=t.deviceWidth;this.pageHeight=e/o*750},methods:{secondaryClicked:function(){this.$emit("wxcDialogCancelBtnClicked",{type:"cancel"})},primaryClicked:function(t){this.$emit("wxcDialogConfirmBtnClicked",{type:"confirm"})},noPromptClicked:function(t){var e=!this.isChecked;this.noPromptIcon=e?r.CHECKED:r.UN_CHECKED,this.$emit("wxcDialogNoPromptClicked",{isChecked:e})}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=weex.requireModule("animation");e.default={props:{show:{type:Boolean,default:!0},hasAnimation:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},timingFunction:{type:Array,default:function(){return["ease-in","ease-out"]}},opacity:{type:[Number,String],default:.6},canAutoClose:{type:Boolean,default:!0}},computed:{overlayStyle:function(){return{opacity:this.hasAnimation?0:1,backgroundColor:"rgba(0, 0, 0,"+this.opacity+")"}},shouldShow:function(){var t=this,e=this.show;return this.hasAnimation&&setTimeout(function(){t.appearOverlay(e)},50),e}},methods:{overlayClicked:function(t){this.canAutoClose?this.appearOverlay(!1):this.$emit("wxcOverlayBodyClicked",{})},appearOverlay:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.duration,i=this.hasAnimation,r=this.timingFunction,s=this.canAutoClose,a=!t&&s;a&&this.$emit("wxcOverlayBodyClicking",{});var c=this.$refs["wxc-overlay"];i&&c?n.transition(c,{styles:{opacity:t?1:0},duration:o,timingFunction:r[t?0:1],delay:0},function(){a&&e.$emit("wxcOverlayBodyClicked",{})}):a&&this.$emit("wxcOverlayBodyClicked",{})}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=o(0),s=function(t){return t&&t.__esModule?t:{default:t}}(r),a=weex.requireModule("animation"),c=weex.config.env.platform,l="object"===("undefined"==typeof window?"undefined":i(window))&&"web"===c.toLowerCase();e.default={components:{WxcOverlay:s.default},props:{show:{type:Boolean,default:!1},pos:{type:String,default:"bottom"},popupColor:{type:String,default:"#FFFFFF"},overlayCfg:{type:Object,default:function(){return{hasAnimation:!0,timingFunction:["ease-in","ease-out"],duration:300,opacity:.6}}},height:{type:[Number,String],default:840},standOut:{type:[Number,String],default:0},width:{type:[Number,String],default:750},animation:{type:Object,default:function(){return{timingFunction:"ease-in"}}}},data:function(){return{haveOverlay:!0,isOverShow:!0}},computed:{isNeedShow:function(){var t=this;return setTimeout(function(){t.appearPopup(t.show)},50),this.show},_height:function(){return this.appearPopup(this.show,150),this.height},transformValue:function(){return this.getTransform(this.pos,this.width,this.height,!0)},padStyle:function(){var t=this.pos,e=this.width,o=this.height,i=this.popupColor,r={width:e+"px",backgroundColor:i};return"top"===t&&(r=n({},r,{top:-o+"px",height:o+"px"})),"bottom"===t&&(r=n({},r,{bottom:-o+"px",height:o+"px"})),"left"===t&&(r=n({},r,{left:-e+"px"})),"right"===t&&(r=n({},r,{right:-e+"px"})),r}},methods:{handleTouchEnd:function(t){"Web"===weex.config.env.platform&&t.preventDefault&&t.preventDefault()},hide:function(){this.appearPopup(!1),this.$refs.overlay.appearOverlay(!1)},wxcOverlayBodyClicking:function(){this.isShow&&this.appearPopup(!1)},appearPopup:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;this.isShow=t;var i=this.$refs["wxc-popup"];i&&a.transition(i,n({styles:{transform:this.getTransform(this.pos,this.width,this.height,!t)},duration:o,delay:0},this.animation),function(){t||e.$emit("wxcPopupOverlayClicked",{pos:e.pos})})},getTransform:function(t,e,o,n){var i="top"===t||"bottom"===t?o:e,r=void 0;switch(l&&(i-=this.standOut),n&&(i=0),t){case"top":r="translateY("+i+"px)";break;case"bottom":r="translateY(-"+i+"px)";break;case"left":r="translateX("+i+"px)";break;case"right":r="translateX(-"+i+"px)"}return r}}}},function(t,e){t.exports={container:{position:"fixed",width:750,zIndex:99999},"dialog-box":{position:"fixed",left:96,width:558,backgroundColor:"#FFFFFF"},"dialog-content":{paddingTop:36,paddingBottom:36,paddingLeft:36,paddingRight:36},"content-title":{color:"#333333",fontSize:36,textAlign:"center",marginBottom:24},"content-subtext":{color:"#666666",fontSize:26,lineHeight:36,textAlign:"center"},"dialog-footer":{flexDirection:"row",alignItems:"center",borderTopColor:"#F3F3F3",borderTopWidth:1,borderTop:"1px solid #F3F3F3"},"footer-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1,height:90},cancel:{borderRightColor:"#F3F3F3",borderRightWidth:1,borderRight:"1px solid #F3F3F3"},"btn-text":{fontSize:36,color:"#666666"},"no-prompt":{width:486,alignItems:"center",justifyContent:"center",flexDirection:"row",marginTop:24},"no-prompt-icon":{width:24,height:24,marginRight:12},"no-prompt-text":{fontSize:24,color:"#A5A5A5"}}},function(t,e){t.exports={"wxc-overlay":{width:750,position:"fixed",left:0,top:0,bottom:0,right:0}}},function(t,e){t.exports={"wxc-btn":{width:702,height:88,alignItems:"center",justifyContent:"center",borderRadius:12},"btn-text":{textOverflow:"ellipsis",lines:1,fontSize:36,color:"#FFFFFF"}}},function(t,e){t.exports={"wxc-popup":{position:"fixed",width:750},top:{left:0,right:0},bottom:{left:0,right:0},left:{bottom:0,top:0},right:{bottom:0,top:0}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["container"]},[t.show?o("wxc-overlay",{attrs:{show:!0,hasAnimation:!1}}):t._e(),t.show?o("div",{staticClass:["dialog-box"],style:{top:t.top+"px"}},[o("div",{staticClass:["dialog-content"]},[t._t("title",[o("text",{staticClass:["content-title"]},[t._v(t._s(t.title))])]),t._t("content",[o("text",{staticClass:["content-subtext"]},[t._v(t._s(t.content))])]),t.showNoPrompt?o("div",{staticClass:["no-prompt"],on:{click:t.noPromptClicked}},[o("image",{staticClass:["no-prompt-icon"],attrs:{src:t.noPromptIcon}}),o("text",{staticClass:["no-prompt-text"]},[t._v(t._s(t.noPromptText))])]):t._e()],2),o("div",{staticClass:["dialog-footer"]},[t.single?t._e():o("div",{staticClass:["footer-btn","cancel"],on:{click:t.secondaryClicked}},[o("text",{staticClass:["btn-text"],style:{color:t.secondBtnColor}},[t._v(t._s(t.cancelText))])]),o("div",{staticClass:["footer-btn","confirm"],on:{click:t.primaryClicked}},[o("text",{staticClass:["btn-text"],style:{color:t.mainBtnColor}},[t._v(t._s(t.confirmText))])])])]):t._e()],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.show?o("div",{ref:"wxc-overlay",staticClass:["wxc-overlay"],style:t.overlayStyle,attrs:{hack:t.shouldShow},on:{click:t.overlayClicked}}):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wxc-btn"],style:t.mrBtnStyle,attrs:{accessible:!0,ariaLabel:t.text},on:{click:t.onClicked}},[o("text",{staticClass:["btn-text"],style:t.mrTextStyle},[t._v(t._s(t.text))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{on:{touchend:t.handleTouchEnd}},[t.show?o("wxc-overlay",t._b({ref:"overlay",attrs:{show:t.haveOverlay&&t.isOverShow},on:{wxcOverlayBodyClicking:t.wxcOverlayBodyClicking}},"wxc-overlay",t.overlayCfg,!1)):t._e()],1),t.show?o("div",{ref:"wxc-popup",class:["wxc-popup",t.pos],style:t.padStyle,attrs:{height:t._height,hack:t.isNeedShow},on:{click:function(){}}},[t._t("default")],2):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0}]);