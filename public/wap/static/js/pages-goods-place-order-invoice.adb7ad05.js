(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-place-order-invoice"],{6557:function(n,t,e){"use strict";e.r(t);var i=e("ee7f"),a=e("84c9");for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);e("caa2");var c=e("2877"),l=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"6d9cc3ea",null);t["default"]=l.exports},"7c2c":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("ac6a"),e("7f7f");var i={data:function(){return{radioItems:[{name:"个人或事业单位",value:"2"},{name:"企业",value:"3"}],type:"3",name:"",code:"",isShow:!1,chequeLisit:[]}},onLoad:function(){var n,t=getCurrentPages(),e=t[t.length-2];void 0!=e&&(n=e.invoice,n&&n.hasOwnProperty("type")&&"1"!==n.type&&(this.name=n.name,this.code=n.code,this.type=n.type))},methods:{radioChange:function(n){var t=this;this.radioItems.forEach(function(e){e.value===n.target.value&&(t.type=e.value)})},notNeedInvoice:function(){var n={type:"1",name:"不开发票",code:""};this.setPageData(n)},saveInvoice:function(){if(!this.name)return this.$common.errorToShow("请输入发票抬头"),!1;if("3"===this.type&&!this.code)return this.$common.errorToShow("请输入发票税号信息"),!1;var n={type:this.type,name:this.name};n["code"]="3"===this.type?this.code:"",this.setPageData(n)},setPageData:function(n){var t=getCurrentPages(),e=t[t.length-2];void 0!=e&&(e.invoice=n,uni.navigateBack({delta:1}))},getCheque:function(n){var t=this,e=n.detail.value;if(""!=e){var i={name:e};this.$api.getTaxInfo(i,function(n){n.status?0!=n.data.length&&(t.isShow=!0,t.chequeLisit=n.data):t.$common.errorToShow(n.msg)})}else this.isShow=!1},chooseCheque:function(n){this.name=n.name,this.code=n.code,this.isShow=!1}}};t.default=i},"84c9":function(n,t,e){"use strict";e.r(t);var i=e("7c2c"),a=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);t["default"]=a.a},c807:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* .margin-cell-group{\n\tmargin-bottom: 20upx;\n} */.invoice-type .uni-list-cell[data-v-6d9cc3ea]{display:inline-block;font-size:%?26?%;color:#333;position:relative;margin-left:%?50?%}.invoice-type .uni-list-cell>uni-view[data-v-6d9cc3ea]{display:inline-block}.invoice-type-icon[data-v-6d9cc3ea]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.invoice-type-c[data-v-6d9cc3ea]{margin-left:%?50?%;line-height:2}.cell-item-ft .cell-bd-input[data-v-6d9cc3ea]{text-align:right;width:%?500?%}.button-bottom .btn[data-v-6d9cc3ea]{width:100%}.cheque[data-v-6d9cc3ea]{\n\t\t/* position: relative; */overflow:visible\n\t\t/* margin-left: 0; */\n\t\t/* width: 376px; */}.cheque-content[data-v-6d9cc3ea]{position:absolute;left:%?-10?%;top:%?90?%;z-index:2;width:100%;\n\t\t/* height: 200rpx; */background-color:#fff;-webkit-box-shadow:0 0 .666667vw .4vw rgba(0,0,0,.13);box-shadow:0 0 .666667vw .4vw rgba(0,0,0,.13);border-radius:%?10?%;padding:%?20?%}.tips-item[data-v-6d9cc3ea]{margin-bottom:%?20?%}.tips-name[data-v-6d9cc3ea]{font-size:%?32?%;line-height:%?35?%;color:#333;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;margin-bottom:%?10?%}.sub-div[data-v-6d9cc3ea]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:%?20?%;font-size:%?24?%;line-height:%?20?%;color:#999}.num[data-v-6d9cc3ea]{display:inline-block}",""])},caa2:function(n,t,e){"use strict";var i=e("d5ec"),a=e.n(i);a.a},d5ec:function(n,t,e){var i=e("c807");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("026577de",i,!0,{sourceMap:!1,shadowMode:!1})},ee7f:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-top"},[e("v-uni-view",{staticClass:"cell-group margin-cell-group"},[e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[n._v("发票类型")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-view",{staticClass:"uni-form-item uni-column invoice-type"},[e("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(t){t=n.$handleEvent(t),n.radioChange(t)}}},n._l(n.radioItems,function(t,i){return e("v-uni-label",{key:i,staticClass:"uni-list-cell uni-list-cell-pd"},[e("v-uni-view",{staticClass:"invoice-type-icon"},[e("v-uni-radio",{attrs:{id:t.name,value:t.value,checked:t.value==n.type}})],1),e("v-uni-view",{staticClass:"invoice-type-c"},[e("v-uni-label",{staticClass:"label-2-text",attrs:{for:t.name}},[e("v-uni-text",[n._v(n._s(t.name))])],1)],1)],1)}),1)],1)],1)],1),e("v-uni-view",{staticClass:"cell-item cheque"},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[n._v("发票抬头")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-input",{staticClass:"cell-bd-input",attrs:{placeholder:"抬头名称"},on:{input:function(t){t=n.$handleEvent(t),n.getCheque(t)}},model:{value:n.name,callback:function(t){n.name=t},expression:"name"}})],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticClass:"cheque-content"},n._l(n.chequeLisit,function(t,i){return e("v-uni-view",{key:i,staticClass:"tips-item",on:{click:function(e){e=n.$handleEvent(e),n.chooseCheque(t)}}},[e("v-uni-view",{staticClass:"tips-name"},[n._v(n._s(t.name))]),e("v-uni-view",{staticClass:"sub-div"},[e("v-uni-view",{staticClass:"tax-no"},[n._v(n._s(t.code))]),e("v-uni-view",{staticClass:"tips-num"},[e("v-uni-view",{staticClass:"num"},[n._v(n._s(t.frequency))]),n._v("人使用过")],1)],1)],1)}),1)],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"3"===n.type,expression:"type === '3'"}],staticClass:"cell-item"},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[n._v("税号")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-input",{staticClass:"cell-bd-input",attrs:{placeholder:"纳税人识别号"},model:{value:n.code,callback:function(t){n.code=t},expression:"code"}})],1)],1)],1),e("v-uni-view",{staticClass:"cell-group margin-cell-group"},[e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[n._v("发票内容")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-view",{staticClass:"cell-ft-view"},[n._v("明细")])],1)],1)],1),e("v-uni-view",{staticClass:"cell-group margin-cell-group"},[e("v-uni-view",{staticClass:"cell-item right-img",on:{click:function(t){t=n.$handleEvent(t),n.notNeedInvoice(t)}}},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[n._v("本次不开具发票")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"button-bottom"},[e("v-uni-button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover2"},on:{click:function(t){t=n.$handleEvent(t),n.saveInvoice(t)}}},[n._v("保存")])],1)],1)},a=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a})}}]);