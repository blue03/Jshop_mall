webpackJsonp([22],{Oqfn:function(t,s){},Ug85:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aftersalesdetail"},[e("div",{staticClass:"orderdetailheader"},[e("div",{},[e("h3",[t._v(t._s(t.typeName))]),t._v(" "),e("p",[t._v(t._s(t.statusName)+"  "+t._s(t.refundName)+" "+t._s(t.reshipName))])])]),t._v(" "),e("yd-cell-group",[e("yd-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("售后单号")]),t._v(" "),e("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.aftersales_id))])]),t._v(" "),e("yd-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("售后类型")]),t._v(" "),e("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.typeName))])]),t._v(" "),e("yd-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("退款金额")]),t._v(" "),e("span",{staticClass:"demo-list-price",attrs:{slot:"right"},slot:"right"},[t._v("￥"+t._s(t.refund))])])],1),t._v(" "),2===t.type?e("yd-cell-group",{attrs:{title:"退货商品"}},[e("yd-list",{attrs:{theme:"4"}},t._l(t.items,function(s,i){return e("yd-list-item",{key:i},[e("img",{attrs:{slot:"img",src:s.image_url},slot:"img"}),t._v(" "),e("h3",{staticClass:"goodsname",attrs:{slot:"title"},slot:"title"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"goods",attrs:{slot:"title"},slot:"title"},[t._v(t._s(s.addon))]),t._v(" "),e("yd-list-other",{attrs:{slot:"other"},slot:"other"},[e("div",[t._v("x"+t._s(s.nums))])])],1)}))],1):t._e(),t._v(" "),t.images?e("yd-cell-group",{attrs:{title:"图片凭证"}},[e("div",{staticClass:"afterserviceimg"},t._l(t.images,function(t,s){return e("img",{key:s,staticClass:"thumbnail-list",attrs:{src:t.url,alt:""}})}))]):t._e(),t._v(" "),t.reason?e("yd-cell-group",{attrs:{title:"问题描述"}},[e("yd-cell-item",[e("yd-textarea",{attrs:{slot:"right",readonly:"","show-counter":!1},slot:"right",model:{value:t.reason,callback:function(s){t.reason=s},expression:"reason"}})],1)],1):t._e(),t._v(" "),2===t.status&&1===t.reshipStatus?e("div",[e("h4",[t._v("退货邮寄地址信息")]),t._v(" "),e("p",[t._v(t._s(t.reship.reship_name))]),t._v(" "),e("p",[t._v(t._s(t.reship.reship_mobile))]),t._v(" "),e("p",[t._v(t._s(t.reship.reship_area)+" "+t._s(t.reship.reship_address))]),t._v("\n        选择快递公司:\n        "),e("select",{on:{change:t.selected}},t._l(t.express,function(s,i){return e("option",{key:i,domProps:{value:s.code}},[t._v(t._s(s.name))])})),t._v("\n        请输入快递单号:"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.logisticsCode,expression:"logisticsCode"}],attrs:{type:"text"},domProps:{value:t.logisticsCode},on:{input:function(s){s.target.composing||(t.logisticsCode=s.target.value)}}}),t._v(" "),e("yd-button",{attrs:{size:"large",type:"danger"},nativeOn:{click:function(s){return t.send(s)}}},[t._v("提交")])],1):t._e(),t._v(" "),2===t.status&&t.reshipStatus>1?e("div",[e("span",[t._v("快递公司:"+t._s(t.logistics))]),t._v(" "),e("span",[t._v("快递单号:"+t._s(t.logisticsCode))])]):t._e()],1)},staticRenderFns:[]};var a=e("VU/8")({data:function(){return{aftersales_id:this.$route.query.aftersales_id||0,items:[],type:"",typeName:"",status:"",statusName:"",reason:"",mark:"",images:[],refund:"",refundName:"",reship_id:"",reshipStatus:"",reshipName:"",reship:[],express:[{name:"顺丰",code:"sf"},{name:"申通",code:"sto"},{name:"圆通",code:"yt"},{name:"中通",code:"zto"},{name:"百世",code:"ht"},{name:"韵达",code:"yd"}],logistics:"",logisticsCode:""}},created:function(){this.afterSalesDetail()},methods:{afterSalesDetail:function(){var t=this;this.$api.afterSalesInfo({aftersales_id:this.aftersales_id},function(s){if(s.status){var e=s.data.info;t.reason=e.reason,t.refund=e.refund,t.images=e.images,t.mark=e.mark,1===e.type?(t.type=1,t.typeName="仅退款"):(t.type=2,t.typeName="退货退款",t.items=e.items,s.data.reship&&(t.reship=s.data.reship)),1===e.status?(t.status=1,t.statusName="审核中"):2===e.status?(t.status=2,t.statusName="审核通过",e.bill_refund&&(1===e.bill_refund.status?t.refundName="退款中":2===e.bill_refund.status&&(t.refundName="退款成功")),e.bill_reship&&(t.reship_id=e.bill_reship.reship_id,1===e.bill_reship.status?(t.reshipStatus=1,t.reshipName="待发退货"):2===e.bill_reship.status?(t.reshipStatus=2,t.reshipName="待收退货",t.logistics=e.bill_reship.logi_code,t.logisticsCode=e.bill_reship.logi_no):(t.reshipStatus=3,t.reshipName="已收退货",t.logistics=e.bill_reship.logi_code,t.logisticsCode=e.bill_reship.logi_no))):t.statusName="申请驳回"}})},selected:function(t){this.logistics=t.target.value},send:function(){var t=this;this.$api.sendShip({reship_id:this.reship_id,logi_code:this.logistics,logi_no:this.logisticsCode},function(s){s.status&&t.afterSalesDetail()})}}},i,!1,function(t){e("Oqfn")},"data-v-5035e92c",null);s.default=a.exports}});
//# sourceMappingURL=22.63c52f8582ce24300bfa.js.map