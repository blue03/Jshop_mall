(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-take_delivery-index"],{"019c":function(t,i,a){"use strict";a.r(i);var e=a("ebf7"),s=a("e7cb");for(var n in s)"default"!==n&&function(t){a.d(i,t,function(){return s[t]})}(n);a("f072");var c=a("2877"),o=Object(c["a"])(s["default"],e["a"],e["b"],!1,null,"413b52ce",null);i["default"]=o.exports},"28ba":function(t,i,a){var e=a("8c5e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("2c2e34ee",e,!0,{sourceMap:!1,shadowMode:!1})},"2a77":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("6762"),a("2fdb"),a("ac6a");var e={data:function(){return{key:"",isgo:!1,isgotext:"确认核销",allData:[]}},onLoad:function(t){t.id&&(this.key=t.id),this.getLadingInfo()},computed:{checkedIds:function(){var t=[];return this.allData.forEach(function(i){!i.disabled&&i.checked&&1===i.status&&t.push(i.id)}),t}},methods:{checkboxChange:function(t){var i=t.detail.value;this.allData.forEach(function(t){i.includes(t.id)?t.checked=!0:t.checked=!1})},getLadingInfo:function(){var t=this;if(this.key){var i={key:this.key};this.$api.ladingInfo(i,function(i){i.status?t.allData=t.formatData(i.data):(t.allData=[],t.$common.modelShow("提示",i.msg,function(){}))})}},search:function(){if(""==this.key)return this.$common.errorToShow("请输入查询关键字"),!1;this.getLadingInfo()},isGoWrite:function(t){var i=!1;2==t.order_info.pay_status&&3==t.order_info.ship_status?(i=!0,this.lading_id=t.id,this.goodsList=t.goods,this.allData=t):this.$common.modelShow("无法核销","订单必须支付并已发货才可以核销",function(){}),this.isgo=i},formatData:function(t){var i=this;return t.forEach(function(t){2===t.status?(i.$set(t,"checked",!1),i.$set(t,"disabled",!0)):(i.$set(t,"checked",!0),i.$set(t,"disabled",!1))}),t},write:function(){var t=this;this.$common.modelShow("提示","您确认核销吗？",function(i){var a={lading_ids:t.checkedIds.join()};t.$api.ladingExec(a,function(i){i.status&&t.$common.successToShow(i.msg,t.afterChangeDataStatus())})})},afterChangeDataStatus:function(){var t=this;this.allData.forEach(function(i){t.checkedIds.indexOf(i.id)>-1&&(i.status=2,i.checked=!1,i.disabled=!0,t.getLadingInfo())})}}};i.default=e},"8c5e":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".ad[data-v-413b52ce]{width:100%;\n\t/* margin: 20upx 0; */overflow:hidden}.ad-img[data-v-413b52ce]{width:100%;float:left;margin-bottom:%?20?%}.ad-img[data-v-413b52ce]:last-child{margin-bottom:0}.search[data-v-413b52ce]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.search-c[data-v-413b52ce]{width:85%;margin-right:2%}.search-icon[data-v-413b52ce]{left:%?20?%}.search-input[data-v-413b52ce]{padding:%?10?% %?30?% %?10?% %?70?%}.search-input-p[data-v-413b52ce]{padding:0!important}.search .btn[data-v-413b52ce]{width:15%;border:none;background-color:#f1f1f1;font-size:%?26?%;color:#333;border-radius:%?6?%;line-height:%?72?%;padding-left:%?18?%;padding-right:%?18?%}.list-goods-name[data-v-413b52ce]{margin-bottom:%?8?%}.goods-salesvolume[data-v-413b52ce]{display:block;margin-bottom:%?6?%}.completed[data-v-413b52ce]{background-color:#d9d9d9;color:#4e4e4e}.img-list-bot[data-v-413b52ce]{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?30?% %?26?%}.img-list-title[data-v-413b52ce]{padding:%?26?% %?26?% 0;background-color:#fff;font-size:%?28?%;overflow:hidden}.ilt-left[data-v-413b52ce]{float:left}.ilt-right[data-v-413b52ce]{float:right}.img-list-checkbox[data-v-413b52ce]{\r\n\t/* display: inline-block; */position:relative;height:100%}.img-list-checkbox uni-checkbox[data-v-413b52ce]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.img-list-right[data-v-413b52ce]{\r\n\t/* display: inline-block; */margin-left:%?60?%}.img-list-item[data-v-413b52ce]{padding:0}.img-list-item-r[data-v-413b52ce]{width:%?360?%}",""])},e7cb:function(t,i,a){"use strict";a.r(i);var e=a("2a77"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);i["default"]=s.a},ebf7:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"content-top"},[a("v-uni-view",{staticClass:"ad"},[a("v-uni-image",{staticClass:"ad-img",attrs:{src:"/static/image/member-bg.png",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"search"},[a("v-uni-view",{staticClass:"search-c"},[a("v-uni-image",{staticClass:"icon search-icon",attrs:{src:"/static/image/zoom.png"}}),a("v-uni-input",{staticClass:"search-input",attrs:{"placeholder-class":"search-input-p",placeholder:"请输入完整提货单号、订单号、提货手机号"},model:{value:t.key,callback:function(i){t.key=i},expression:"key"}})],1),a("v-uni-button",{staticClass:"btn btn-g",attrs:{"hover-class":"btn-hover2"},on:{click:function(i){i=t.$handleEvent(i),t.search(i)}}},[t._v("查询")])],1),t.allData.length?a("v-uni-view",[a("v-uni-checkbox-group",{on:{change:function(i){i=t.$handleEvent(i),t.checkboxChange(i)}}},[a("v-uni-view",{staticClass:"img-list"},t._l(t.allData,function(i,e){return a("v-uni-view",{key:e,staticClass:"img-list-c"},[a("v-uni-view",{staticClass:"img-list-title"},[a("v-uni-view",{staticClass:"ilt-left"},[a("v-uni-text",{staticClass:"color-6"},[t._v("订单号:")]),a("v-uni-text",{staticClass:"color-9"},[t._v(t._s(i.order_id))])],1),a("v-uni-view",{staticClass:"ilt-right  color-9"},[t._v(t._s(i.status_name))])],1),a("v-uni-view",{staticClass:"img-list-bot"},[a("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd"},[i.disabled?t._e():a("v-uni-view",{staticClass:"img-list-checkbox"},[i.disabled?a("v-uni-checkbox",{staticClass:"checkboxNo",attrs:{color:"#FF7159",value:i.id,checked:i.checked,disabled:i.disabled}}):a("v-uni-checkbox",{attrs:{color:"#FF7159",value:i.id,checked:i.checked,disabled:i.disabled}})],1)],1),a("v-uni-view",{staticClass:"img-list-right"},t._l(i.goods,function(i,e){return a("v-uni-view",{key:e,staticClass:"img-list-content"},[a("v-uni-view",{staticClass:"img-list-item"},[a("v-uni-image",{staticClass:"img-list-item-l",attrs:{src:i.image_url,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"img-list-item-r"},[a("v-uni-view",{staticClass:"goods-name list-goods-name"},[t._v(t._s(i.name))]),a("v-uni-view",{staticClass:"goods-item-c"},[a("v-uni-view",{staticClass:"goods-buy"},[a("v-uni-view",{staticClass:"goods-salesvolume"},[t._v("规格："+t._s(i.addon))]),a("v-uni-view",{staticClass:"goods-salesvolume"},[t._v("数量："+t._s(i.nums))]),a("v-uni-view",{staticClass:"goods-salesvolume"},[t._v("SN码："+t._s(i.sn))]),a("v-uni-view",{staticClass:"goods-salesvolume"},[t._v("BN码："+t._s(i.bn))])],1)],1)],1)],1)],1)}),1)],1)],1)}),1)],1)],1):t._e()],1),t.allData.length?a("v-uni-view",{staticClass:"button-bottom"},[t.checkedIds.length?a("v-uni-button",{staticClass:"btn btn-b btn-square",on:{click:function(i){i=t.$handleEvent(i),t.write(i)}}},[t._v("确认核销")]):a("v-uni-button",{staticClass:"btn btn-b btn-square completed"},[t._v("请选择待核销订单")])],1):t._e()],1)},s=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})},f072:function(t,i,a){"use strict";var e=a("28ba"),s=a.n(e);s.a}}]);