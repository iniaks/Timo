webpackJsonp([2,0],{0:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var r=n(23),a=u(r),s=n(91),o=u(s),i=n(92),c=n(15),f=u(c),l=n(45),d=n(87),_=u(d);n(82),n(83),a["default"].use(o["default"]),a["default"].config.silent=!0;var h=new o["default"]({routes:l.routes,mode:"history"});(0,i.sync)(f["default"],h),new a["default"]({el:"#app",router:h,render:function(e){return e(_["default"])}}),window.router=h},13:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(50),a=u(r),s="ls.",o=window.localStorage;t["default"]={get:function(e){var t=s+e,n=o.getItem(t);try{return JSON.parse(n)}catch(u){return n}},set:function(e,t){var n,u=s+e;try{n=(0,a["default"])(t)}catch(r){n=t}o.setItem(u,n)},remove:function(e){var t=s+e;o.removeItem(t)}}},14:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_EXCHANGE="GET_EXCHANGE"},15:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),a=u(r),s=n(23),o=u(s),i=n(24),c=u(i),f=n(46),l=u(f),d=n(47),_=u(d);o["default"].use(c["default"]),t["default"]=new c["default"].Store({modules:{Exchanges:(0,a["default"])({},l["default"],_["default"])}})},43:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(25),a=u(r),s=a["default"].create({baseURL:"http://49.51.10.135/",withCredentials:!1,headers:{"Access-Control-Allow-Headers":"*"}});t["default"]={getInfoByBank:function(e){return s.get("exchange",{params:{bank:e}})}}},44:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BANK_NAME_MAP={ICBC:"工商银行",BOC:"中国银行",ABC:"农业银行",CCB:"建设银行",BCM:"交通银行",CMB:"招商银行"},t.CURRENCY_NAME_MAP={USD:["美元","美元(USD)","美元(USD/CNY)"],JPY:["日元","日元(JPY)","日元(JPY/CNY)"],EUR:["欧元","欧元(EUR)","欧元(EUR/CNY)"],GBP:["英镑","英镑(GBP)","英镑(GBP/CNY)","英磅(GBP)"],AED:["阿联酋迪拉姆","阿联酋 迪拉姆(AED)"],AUD:["澳大利亚元","澳大利亚元(AUD)","澳大利亚元(AUD/CNY)"],MOP:["澳门元","澳门元(MOP)","澳门元(MOP/CNY)"],PKR:["巴基斯坦卢比(PKR)"],BRL:["巴西里亚尔","巴西雷亚尔(BRL)"],DKK:["丹麦克朗","丹麦克朗(DKK)","丹麦克郎(DKK/CNY)"],PHP:["菲律宾比索","菲律宾比索(PHP)","菲律宾比索(PHP/CNY)"],HKD:["港元","港元(HKD)","港币(HKD)","港币(HKD/CNY)","港币"],KZT:["哈萨克斯坦 坚戈(KZT)"],KRW:["韩国元","韩国圆","韩元(KRW)","韩国圆(KRW)","韩元(KRW/CNY)"],CAD:["加拿大元","加拿大元(CAD)","加拿大元(CAD/CNY)"],MYR:["林吉特","林吉特(MYR)"],RUB:["卢布","卢布(RUB)"],ZAR:["南非兰特","南非兰特(ZAR)"],NOK:["挪威克朗","挪威克朗(NOK)","挪威克郎(NOK/CNY)"],SEK:["瑞典克朗","瑞典克朗(SEK)","瑞典克郎(SEK/CNY)"],CHF:["瑞士法郎","瑞士法郎(CHF)","瑞士法郎(CHF/CNY)"],SAR:["沙特里亚尔","沙特里亚尔(SAR)"],TJS:["索莫尼","索莫尼(TJS)"],THB:["泰铢","泰国铢","泰国铢(THB)","泰铢(THB/CNY)","泰铢(THB)"],SGD:["新加坡元","新加坡元(SGD)","新加坡元(SGD/CNY)"],TWD:["新台币","新台币(TWD)","新台币(TWD/CNY)"],NZD:["新西兰元","新西兰元(NZD)","新西兰元(NZD/CNY)"],IDR:["印尼卢比","印尼盾(IDR)"],INR:["印度卢比"],VDN:["越南盾(VDN)"]},t.CURRENCY_PROPS_MAP={name:["币种","货币名称","交易币"],unit:["交易单位","交易单位","交易币单位"],base_currency:"基本币",middle_price:"中间价",buying_rate:["现汇买入价","买入汇率"],selling_rate:["现汇卖出价","卖出汇率"],cash_buying_rate:["现钞买入价","现钞买入汇率"],cash_selling_rate:"现钞卖出价",conversion_rate:"中行折算价",time:["报价时间","发布时间","发布日期","时间"]}},45:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var r=n(88),a=u(r);t.routes=[{name:"home",path:"/",component:a["default"]}]},46:function(e,t,n){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(43),s=r(a),o=n(14),i=u(o),c={getExchange:function(e){var t=e.commit;s["default"].getInfoByBank().then(function(e){200===e.data.status&&t(i.GET_EXCHANGE,{exchanges:e.data})})}};t["default"]={actions:c}},47:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(53),a=u(r),s=n(14),o=n(13),i=u(o),c={exchanges:{}},f={exchanges:function(e){return e.exchanges}},l=(0,a["default"])({},s.GET_EXCHANGE,function(e,t){e.exchanges=t.exchanges.result,i["default"].set("prev",e.exchanges)});t["default"]={state:c,getters:f,mutations:l}},48:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),a=u(r);t["default"]={store:a["default"]}},49:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),a=u(r),s=n(24),o=n(44),i=n(13),c=u(i);t["default"]={data:function(){return{bank_names:o.BANK_NAME_MAP,prev:null}},mounted:function(){this.refresh(),setInterval(this.refresh,3e4)},computed:(0,a["default"])({},(0,s.mapState)({list:function(e){return e.Exchanges.exchanges}})),methods:(0,a["default"])({},(0,s.mapActions)({getNewestExchange:"getExchange"}),{refresh:function(){this.prev=c["default"].get("prev"),this.getNewestExchange()}})}},82:function(e,t){},83:function(e,t){},84:function(e,t){},85:function(e,t){},87:function(e,t,n){var u,r;n(84),u=n(48);var a=n(89);r=u=u||{},"object"!=typeof u["default"]&&"function"!=typeof u["default"]||(r=u=u["default"]),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=u},88:function(e,t,n){var u,r;n(85),u=n(49);var a=n(90);r=u=u||{},"object"!=typeof u["default"]&&"function"!=typeof u["default"]||(r=u=u["default"]),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-744a02f1",e.exports=u},89:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"container-fluid",attrs:{id:"app"}},[_h("transition",{attrs:{name:"fade",mode:"out-in"}},[_h("router-view")])])},staticRenderFns:[]}},90:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"row",attrs:{style:"overflow:hidden"}},[_l(list,function(e,t){return _h("div",{staticClass:"col-md-4 bank"},[_h("h5",["\n\t\t\t"+_s(bank_names[t])+"\n\t\t"])," ",_h("div",{staticClass:"exchange-container"},[_h("div",{staticClass:"exchange-item"},[_h("h3",{attrs:{style:"display: inline-block"}},["\n\t\t\t\t\t"+_s(e.buying_rate)+"\n\t\t\t\t\t"," "]),"\n\t\t\t\t/\n\t\t\t\t",_h("h3",{attrs:{style:"display: inline-block"}},["\n\t\t\t\t\t"+_s(e.selling_rate)+"\n\t\t\t\t\t"])])," ",_h("p",{staticClass:"exchange-time"},[_s(e.time)])," ",_m(0,!0)])," ",_m(1,!0)])})])},staticRenderFns:[function(){with(this)return _h("br")},function(){with(this)return _h("hr")}]}}});
//# sourceMappingURL=app.fb55540780dcd27cc5dd.js.map