webpackJsonp([35],{"7LCE":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t("woOf"),a=t.n(i),d=t("Dd8w"),r=t.n(d),n=t("NYxO"),l=t("Cz8s"),o=t("+TmT"),c={data:function(){return{address:{},sexName:"先生",submiting:0,value:[]}},components:{PublicHeader:l.a,Uploader:o.a},computed:r()({},Object(n.c)(["editAddress"])),methods:r()({},Object(n.b)(["replaceAddress","setOrderExtra"]),{onLoad:function(){var e=this,s=this;this.util.request({url:"wmall/member/address/post",data:{sid:this.sid,id:this.id}}).then(function(s){var t=s.data.message;e.address=t.message,"location"==e.from&&e.editAddress.address&&e.editAddress.lat&&e.editAddress.lng&&(e.address=a()(e.address,e.editAddress)),e.sexName=e.address.sex?e.address.sex:e.sexName}),this.id&&0!=this.id||this.util.getLocation(function(){},function(e){s.address.address=e.address,s.address.location_x=e.location_x,s.address.location_y=e.location_y})},onSubmit:function(){var e=this;if(1==this.submiting)return!1;if(!this.address.address)return this.$toast("收货地址不能为空"),!1;if(!this.address.number)return this.$toast("门牌号不能为空"),!1;if(!this.address.realname)return this.$toast("联系人不能为空"),!1;if(!this.address.mobile)return this.$toast("手机号不能为空"),!1;this.submiting=1;var s={id:this.id,sid:this.sid,channel:this.channel,flag:1,sex:this.sexName,number:this.address.number,realname:this.address.realname,mobile:this.address.mobile,address:this.address.address,location_x:this.address.location_x,location_y:this.address.location_y};this.util.request({url:"wmall/member/address/post",data:s,method:"POST"}).then(function(t){e.submiting=0;var i=t.data.message;if(!e.channel||""==e.channel||"undefined"==e.channel)return i.errno?(e.$toast(i.message),!1):(e.replaceAddress({}),void e.util.$toast("保存地址成功",e.util.getUrl({path:"/pages/member/address"})));if("takeout"==e.channel)if(-1e3==i.errno)e.$dialog.confirm({title:"温馨提示",message:"亲,您的地址已超出商家的配送范围了!",confirmButtonText:"调整地址",cancelButtonText:"仍然保存"}).then(function(){}).catch(function(){s.force=1,e.util.request({method:"POST",url:"wmall/member/address/post",data:s}).then(function(s){e.replaceAddress({}),e.setOrderExtra({key:"address_id",val:0}),e.$router.push(e.util.getUrl({path:"/pages/order/create?sid="+e.sid}))})});else{if(i.errno)return e.$toast(i.message),!1;e.setOrderExtra({key:"address_id",val:i.message.message}),e.$router.push(e.util.getUrl({path:"/pages/order/create?sid="+e.sid}))}else e.channel})},onSelectSex:function(e){this.sexName=e},onDel:function(){var e=this;this.$dialog.confirm({title:"温馨提示",message:"删除后将不可恢复,确定删除吗?"}).then(function(){e.util.request({url:"wmall/member/address/del",data:{id:e.id}}).then(function(s){s.data.message.errno||e.$router.push(e.util.getUrl({path:"/pages/member/address"}))})})}}),created:function(){this.query=this.$route.query,this.query&&(this.id=this.query.id,this.sid=this.query.sid,this.channel=this.query.channel,this.from=this.query.from,this.sid>0&&(this.channel="takeout"))},mounted:function(){this.onLoad()}},m={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"address-post"}},[t("public-header",{attrs:{title:"编辑地址"}}),e._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"list"},[t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("小区/大厦/学校")]),e._v(" "),t("div",{staticClass:"item-input flex-lr"},[t("i",{staticClass:"icon icon-location"}),e._v(" "),t("div",{staticClass:"location"},[t("router-link",{staticClass:"flex-lr",attrs:{to:e.util.getUrl({path:"/pages/member/addressLocation",query:{id:e.id,sid:e.sid}})}},[e.address.address?t("div",[e._v(e._s(e.address.address))]):t("span",[e._v("点击添加地址(必填)")]),e._v(" "),t("i",{staticClass:"icon icon-right"})])],1)])]),e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("楼号-门牌号")]),e._v(" "),t("div",{staticClass:"item-input "},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.number,expression:"address.number"}],attrs:{name:"number",type:"text",placeholder:"例:16号楼427室"},domProps:{value:e.address.number},on:{input:function(s){s.target.composing||e.$set(e.address,"number",s.target.value)}}})])]),e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis "},[e._v("联系人")]),e._v(" "),t("div",{staticClass:"item-input"},[t("div",{staticClass:"username van-hairline--bottom"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.realname,expression:"address.realname"}],attrs:{type:"text",name:"realname",placeholder:"您的姓名"},domProps:{value:e.address.realname},on:{input:function(s){s.target.composing||e.$set(e.address,"realname",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"sex flex"},[t("div",{staticClass:"sex-item flex",on:{click:function(s){e.onSelectSex("先生")}}},[t("i",{staticClass:"icon",class:{"icon-check":"先生"==e.sexName}}),e._v("先生\n\t\t\t\t\t\t")]),e._v(" "),t("div",{staticClass:"sex-item flex",on:{click:function(s){e.onSelectSex("女士")}}},[t("i",{staticClass:"icon",class:{"icon-check":"女士"==e.sexName}}),e._v("女士\n\t\t\t\t\t\t")])])])]),e._v(" "),t("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[t("div",{staticClass:"item-title ellipsis"},[e._v("手机号")]),e._v(" "),t("div",{staticClass:"item-input "},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.mobile,expression:"address.mobile"}],attrs:{type:"text",name:"mobile",placeholder:"请填写收货手机号码"},domProps:{value:e.address.mobile},on:{input:function(s){s.target.composing||e.$set(e.address,"mobile",s.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"save-btn",on:{click:e.onSubmit}},[t("van-button",{attrs:{type:"danger",size:"normal",block:!0}},[e._v("保存")])],1),e._v(" "),e.address&&e.address.id>0?t("div",{staticClass:"save-btn",on:{click:e.onDel}},[t("van-button",{attrs:{type:"default",size:"normal",block:!0}},[e._v("删除")])],1):e._e()])],1)},staticRenderFns:[]};var u=t("VU/8")(c,m,!1,function(e){t("woSA")},null,null);s.default=u.exports},woSA:function(e,s){}});
//# sourceMappingURL=35.d787f0e665053d00d6f2.js.map