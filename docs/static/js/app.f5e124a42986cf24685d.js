webpackJsonp([2,0],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(24),s=a(r),u=n(90),o=a(u),i=n(91),c=n(15),l=a(c),f=n(46),d=n(86),_=a(d);n(82),s["default"].use(o["default"]),s["default"].config.silent=!0;var h=new o["default"]({routes:f.routes,mode:"history"});(0,i.sync)(l["default"],h),new s["default"]({el:"#app",router:h,render:function(e){return e(_["default"])}}),window.router=h},13:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(51),s=a(r),u="ls.",o=window.localStorage;t["default"]={get:function(e){var t=u+e,n=o.getItem(t);try{return JSON.parse(n)}catch(a){return n}},set:function(e,t){var n,a=u+e;try{n=(0,s["default"])(t)}catch(r){n=t}o.setItem(a,n)},remove:function(e){var t=u+e;o.removeItem(t)}}},14:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_EXCHANGE="GET_EXCHANGE"},15:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),s=a(r),u=n(24),o=a(u),i=n(25),c=a(i),l=n(47),f=a(l),d=n(48),_=a(d);o["default"].use(c["default"]),t["default"]=new c["default"].Store({modules:{Exchanges:(0,s["default"])({},f["default"],_["default"])}})},44:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(26),s=a(r),u=s["default"].create({baseURL:"http://49.51.10.135/",withCredentials:!1,headers:{"Access-Control-Allow-Headers":"*"}});t["default"]={getInfoByBank:function(e){return u.get("exchange",{params:{bank:e}})}}},45:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BANK_NAME_MAP={BOC:"中国银行",ABC:"农业银行",ICBC:"工商银行",CCB:"建设银行",BCM:"交通银行",CMB:"招商银行"},t.CURRENCY_NAME_MAP={USD:["美元","美元(USD)","美元(USD/CNY)"],JPY:["日元","日元(JPY)","日元(JPY/CNY)"],EUR:["欧元","欧元(EUR)","欧元(EUR/CNY)"],GBP:["英镑","英镑(GBP)","英镑(GBP/CNY)","英磅(GBP)"],AED:["阿联酋迪拉姆","阿联酋 迪拉姆(AED)"],AUD:["澳大利亚元","澳大利亚元(AUD)","澳大利亚元(AUD/CNY)"],MOP:["澳门元","澳门元(MOP)","澳门元(MOP/CNY)"],PKR:["巴基斯坦卢比(PKR)"],BRL:["巴西里亚尔","巴西雷亚尔(BRL)"],DKK:["丹麦克朗","丹麦克朗(DKK)","丹麦克郎(DKK/CNY)"],PHP:["菲律宾比索","菲律宾比索(PHP)","菲律宾比索(PHP/CNY)"],HKD:["港元","港元(HKD)","港币(HKD)","港币(HKD/CNY)","港币"],KZT:["哈萨克斯坦 坚戈(KZT)"],KRW:["韩国元","韩国圆","韩元(KRW)","韩国圆(KRW)","韩元(KRW/CNY)"],CAD:["加拿大元","加拿大元(CAD)","加拿大元(CAD/CNY)"],MYR:["林吉特","林吉特(MYR)"],RUB:["卢布","卢布(RUB)"],ZAR:["南非兰特","南非兰特(ZAR)"],NOK:["挪威克朗","挪威克朗(NOK)","挪威克郎(NOK/CNY)"],SEK:["瑞典克朗","瑞典克朗(SEK)","瑞典克郎(SEK/CNY)"],CHF:["瑞士法郎","瑞士法郎(CHF)","瑞士法郎(CHF/CNY)"],SAR:["沙特里亚尔","沙特里亚尔(SAR)"],TJS:["索莫尼","索莫尼(TJS)"],THB:["泰铢","泰国铢","泰国铢(THB)","泰铢(THB/CNY)","泰铢(THB)"],SGD:["新加坡元","新加坡元(SGD)","新加坡元(SGD/CNY)"],TWD:["新台币","新台币(TWD)","新台币(TWD/CNY)"],NZD:["新西兰元","新西兰元(NZD)","新西兰元(NZD/CNY)"],IDR:["印尼卢比","印尼盾(IDR)"],INR:["印度卢比"],VDN:["越南盾(VDN)"]},t.CURRENCY_PROPS_MAP={name:["币种","货币名称","交易币"],unit:["交易单位","交易单位","交易币单位"],base_currency:"基本币",middle_price:"中间价",buying_rate:["现汇买入价","买入汇率"],selling_rate:["现汇卖出价","卖出汇率"],cash_buying_rate:["现钞买入价","现钞买入汇率"],cash_selling_rate:"现钞卖出价",conversion_rate:"中行折算价",time:["报价时间","发布时间","发布日期","时间"]}},46:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var r=n(87),s=a(r);t.routes=[{name:"home",path:"/",component:s["default"]}]},47:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(44),u=r(s),o=n(14),i=a(o),c={getExchange:function(e,t){var n=e.commit;u["default"].getInfoByBank(t).then(function(e){n(i.GET_EXCHANGE,{bank:t,exchanges:e.data})})}};t["default"]={actions:c}},48:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(53),s=a(r),u=n(16),o=a(u),i=n(14),c=n(13),l=a(c),f={exchanges:{}},d={exchanges:function(e){return e.exchanges}},_=(0,s["default"])({},i.GET_EXCHANGE,function(e,t){var n=t.bank.toUpperCase();e.exchanges=(0,o["default"])({},e.exchanges,(0,s["default"])({},n,{name:n,exchanges:t.exchanges.items})),l["default"].set("prev",e.exchanges)});t["default"]={state:f,getters:d,mutations:_}},49:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),s=a(r);t["default"]={store:s["default"]}},50:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),s=a(r),u=n(25),o=n(45),i=n(13),c=a(i);t["default"]={data:function(){return{bank_names:o.BANK_NAME_MAP,prev:null}},mounted:function(){this.refresh(),setInterval(this.refresh,3e4)},computed:(0,s["default"])({},(0,u.mapState)({list:function(e){return e.Exchanges.exchanges}})),methods:(0,s["default"])({},(0,u.mapActions)({getNewestExchange:"getExchange"}),{refresh:function(){this.prev=c["default"].get("prev");for(var e in this.bank_names)this.getNewestExchange(e)}})}},82:function(e,t){},83:function(e,t){},84:function(e,t){},86:function(e,t,n){var a,r;n(83),a=n(49);var s=n(88);r=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(r=a=a["default"]),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=a},87:function(e,t,n){var a,r;n(84),a=n(50);var s=n(89);r=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(r=a=a["default"]),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-744a02f1",e.exports=a},88:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"container-fluid",attrs:{id:"app"}},[_h("transition",{attrs:{name:"fade",mode:"out-in"}},[_h("router-view")])])},staticRenderFns:[]}},89:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{style:"overflow:hidden"}},[_l(list,function(e,t){return _h("div",{staticClass:"bank"},[_h("h5",["\n\t\t\t"+_s(bank_names[e.name])+"\n\t\t"])," ",_l(e.exchanges,function(n,a){return _h("div",{directives:[{name:"show",rawName:"v-show",value:"USD"==n.name,expression:'exchange.name == "USD"'}],staticClass:"exchange-container"},[_h("div",{staticClass:"exchange-item"},[_m(0,!0)," ",_h("h3",["\n\t\t\t\t\t"+_s(n.buying_rate)+"\n\t\t\t\t\t",null!=prev?_h("span",[n.buying_rate-prev[t].exchanges[a].buying_rate<0?_h("span",{attrs:{style:"color: #39ceb8;font-size: 12px"}},["↓"]):_e()," ",n.buying_rate-prev[t].exchanges[a].buying_rate>0?_h("span",{attrs:{style:"color: #ec6941;font-size: 12px"}},["↑"]):_e()," ",n.buying_rate-prev[t].exchanges[a].buying_rate==0?_h("span",{attrs:{style:"opacity: 0.5;font-size: 12px"}},["-"]):_e()]):_e()," ",null==prev?_h("span",{attrs:{style:"opacity: 0.5;font-size: 12px"}},["-"]):_e()])])," ",_h("div",{staticClass:"exchange-item"},[_m(1,!0)," ",_h("h3",["\n\t\t\t\t\t"+_s(n.selling_rate)+"\n\t\t\t\t\t",null!=prev?_h("span",[n.selling_rate-prev[t].exchanges[a].selling_rate<0?_h("span",{attrs:{style:"color: #39ceb8;font-size: 12px"}},["↓"]):_e()," ",n.selling_rate-prev[t].exchanges[a].selling_rate==0?_h("span",{attrs:{style:"opacity: 0.5;font-size: 12px"}},["-"]):_e()," ",n.selling_rate-prev[t].exchanges[a].selling_rate>0?_h("span",{attrs:{style:"color: #ec6941;font-size: 12px"}},["↑"]):_e()]):_e()," ",null==prev?_h("span",{attrs:{style:"opacity: 0.5;font-size: 12px"}},["-"]):_e()])])," ",_h("p",{staticClass:"exchange-time"},[_s(e.exchanges[0].time)])," ",_m(2,!0)])})," ",_m(3,!0)])})])},staticRenderFns:[function(){with(this)return _h("p",{attrs:{style:"color: #39ceb8;"}},["现汇买入"])},function(){with(this)return _h("p",{attrs:{style:"color: #ec6941;"}},["现汇卖出"])},function(){with(this)return _h("br")},function(){with(this)return _h("hr")}]}}});
//# sourceMappingURL=app.f5e124a42986cf24685d.js.map