webpackJsonp([56],{fbs2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{}},created:function(){this.query=this.$route.query},mounted:function(){var t=this;this.util.isWeixin()||this.util.request({url:"system/paycenter/pay",method:"POST",data:{pay_type:this.query.pay_type,order_type:this.query.order_type,id:this.query.order_id}}).then(function(e){if((e=e.data.message).errno)return util.$toast(e.message),!1;e=e.message,t.util.isWeixin()||(window.location.href=e.url)})}},n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"ali-pay"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"weixin-tip"},[e("div",{staticClass:"weixin-tip-content"},[this._v("\n\t\t\t\t请在菜单中选择在浏览器中打开,"),e("br"),this._v("\n\t\t\t\t以完成支付\n\t\t\t")])]),this._v(" "),e("div",{staticClass:"weixin-tip-img android"})])])}]};var r=i("VU/8")(s,n,!1,function(t){i("tIgI")},null,null);e.default=r.exports},tIgI:function(t,e){}});
//# sourceMappingURL=56.7c17f5a55e6fc19124ae.js.map