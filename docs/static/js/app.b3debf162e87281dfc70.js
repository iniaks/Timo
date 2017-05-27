webpackJsonp([2,0],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var s=n(23),r=a(s),i=n(93),u=a(i),c=n(95),o=n(15),l=a(o),d=n(46),f=n(89),_=a(f);n(83),n(84),n(85),r["default"].use(u["default"]),r["default"].config.silent=!0;var C=new u["default"]({routes:d.routes,mode:"history"});(0,c.sync)(l["default"],C),new r["default"]({el:"#app",router:C,render:function(e){return e(_["default"])}}),window.router=C},13:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(51),r=a(s),i="ls.",u=window.localStorage;t["default"]={get:function(e){var t=i+e,n=u.getItem(t);try{return JSON.parse(n)}catch(a){return n}},set:function(e,t){var n,a=i+e;try{n=(0,r["default"])(t)}catch(s){n=t}u.setItem(a,n)},remove:function(e){var t=i+e;u.removeItem(t)}}},14:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_EXCHANGE="GET_EXCHANGE"},15:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(16),r=a(s),i=n(23),u=a(i),c=n(24),o=a(c),l=n(47),d=a(l),f=n(48),_=a(f);u["default"].use(o["default"]),t["default"]=new o["default"].Store({modules:{Exchanges:(0,r["default"])({},d["default"],_["default"])}})},43:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(25),r=a(s),i=n(44),u=r["default"].create({baseURL:i.BASE_URL,withCredentials:!1,headers:{"Access-Control-Allow-Headers":"*"}});t["default"]={getInfoByBank:function(e){return u.get("exchange",{params:{currency:"USD",banks:e}})}}},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BASE_URL="http://api.iniaks.com/"},45:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BANKS=["ICBC","ABC","BOC","CCB","BCM","CMB","HXB","CITIC","CEB","SPDB","CIB","PAB","BOS","CGB"],t.BANK_NAME_MAP={ICBC:"工商银行",BOC:"中国银行",ABC:"农业银行",CCB:"建设银行",BCM:"交通银行",CMB:"招商银行",HXB:"华夏银行",CITIC:"中信银行",CEB:"光大银行",SPDB:"浦发银行",CIB:"兴业银行",PAB:"平安银行",BOS:"上海银行",CGB:"广发银行"},t.CURRENCY_NAME_MAP={USD:["美元","美元(USD)","美元(USD/CNY)"],JPY:["日元","日元(JPY)","日元(JPY/CNY)"],EUR:["欧元","欧元(EUR)","欧元(EUR/CNY)"],GBP:["英镑","英镑(GBP)","英镑(GBP/CNY)","英磅(GBP)"],AED:["阿联酋迪拉姆","阿联酋 迪拉姆(AED)"],AUD:["澳大利亚元","澳大利亚元(AUD)","澳大利亚元(AUD/CNY)"],MOP:["澳门元","澳门元(MOP)","澳门元(MOP/CNY)"],PKR:["巴基斯坦卢比(PKR)"],BRL:["巴西里亚尔","巴西雷亚尔(BRL)"],DKK:["丹麦克朗","丹麦克朗(DKK)","丹麦克郎(DKK/CNY)"],PHP:["菲律宾比索","菲律宾比索(PHP)","菲律宾比索(PHP/CNY)"],HKD:["港元","港元(HKD)","港币(HKD)","港币(HKD/CNY)","港币"],KZT:["哈萨克斯坦 坚戈(KZT)"],KRW:["韩国元","韩国圆","韩元(KRW)","韩国圆(KRW)","韩元(KRW/CNY)"],CAD:["加拿大元","加拿大元(CAD)","加拿大元(CAD/CNY)"],MYR:["林吉特","林吉特(MYR)"],RUB:["卢布","卢布(RUB)"],ZAR:["南非兰特","南非兰特(ZAR)"],NOK:["挪威克朗","挪威克朗(NOK)","挪威克郎(NOK/CNY)"],SEK:["瑞典克朗","瑞典克朗(SEK)","瑞典克郎(SEK/CNY)"],CHF:["瑞士法郎","瑞士法郎(CHF)","瑞士法郎(CHF/CNY)"],SAR:["沙特里亚尔","沙特里亚尔(SAR)"],TJS:["索莫尼","索莫尼(TJS)"],THB:["泰铢","泰国铢","泰国铢(THB)","泰铢(THB/CNY)","泰铢(THB)"],SGD:["新加坡元","新加坡元(SGD)","新加坡元(SGD/CNY)"],TWD:["新台币","新台币(TWD)","新台币(TWD/CNY)"],NZD:["新西兰元","新西兰元(NZD)","新西兰元(NZD/CNY)"],IDR:["印尼卢比","印尼盾(IDR)"],INR:["印度卢比"],VDN:["越南盾(VDN)"]},t.CURRENCY_PROPS_MAP={name:["币种","货币名称","交易币"],unit:["交易单位","交易单位","交易币单位"],base_currency:"基本币",middle_price:"中间价",buying_rate:["现汇买入价","买入汇率"],selling_rate:["现汇卖出价","卖出汇率"],cash_buying_rate:["现钞买入价","现钞买入汇率"],cash_selling_rate:"现钞卖出价",conversion_rate:"中行折算价",time:["报价时间","发布时间","发布日期","时间"]}},46:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var s=n(90),r=a(s);t.routes=[{name:"home",path:"/",component:r["default"]}]},47:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),i=s(r),u=n(14),c=a(u),o={getExchange:function(e,t){var n=e.commit;i["default"].getInfoByBank(t).then(function(e){200===e.data.status&&n(c.GET_EXCHANGE,{exchanges:e.data})})}};t["default"]={actions:o}},48:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(54),r=a(s),i=n(14),u=n(13),c=a(u),o={exchanges:{},selected_banks:c["default"].get("banks")||["ICBC","ABC","BOC","CCB"]},l=(0,r["default"])({},i.GET_EXCHANGE,function(e,t){e.exchanges=t.exchanges.result,c["default"].set("prev",e.exchanges)});t["default"]={state:o,mutations:l}},49:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(15),r=a(s);t["default"]={store:r["default"]}},50:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(16),r=a(s),i=n(24),u=n(45),c=n(94),o=n(13),l=a(o);t["default"]={components:{modal:c.modal},data:function(){return{selected_banks:l["default"].get("banks")||["ICBC","ABC","BOC","CCB"],banks:u.BANKS,bank_names:u.BANK_NAME_MAP}},mounted:function(){this.refresh(),setInterval(this.refresh,3e4)},computed:(0,r["default"])({},(0,i.mapState)({list:function(e){return e.Exchanges.exchanges}})),methods:(0,r["default"])({},(0,i.mapActions)({getNewestExchange:"getExchange"}),{refresh:function(){this.getNewestExchange(this.selected_banks.join(","))}}),watch:{selected_banks:function(){this.refresh(),l["default"].set("banks",this.selected_banks)}}}},83:function(e,t){},84:function(e,t){},85:function(e,t){},86:function(e,t){},87:function(e,t){},89:function(e,t,n){var a,s;n(86),a=n(49);var r=n(91);s=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(s=a=a["default"]),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,e.exports=a},90:function(e,t,n){var a,s;n(87),a=n(50);var r=n(92);s=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(s=a=a["default"]),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,s._scopeId="data-v-744a02f1",e.exports=a},91:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_m(0)," ",_m(1)," ",_h("div",{staticClass:"container",attrs:{id:"app"}},[_h("transition",{attrs:{name:"fade",mode:"out-in"}},[_h("router-view")])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"navbar navbar-inverse"},[_h("div",{staticClass:"container-fluid"},[_h("div",{staticClass:"navbar-brand"},["美元外汇牌价监控"])])])},function(){with(this)return _h("br")}]}},92:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("div",{staticClass:"form-group",attrs:{style:"overflow: hidden; margin-top: 0"}},[_h("div",{staticClass:"checkbox"},[_l(banks,function(e,t){return _h("label",{staticClass:"bank-item",attrs:{"for":e}},[_h("input",{directives:[{name:"model",rawName:"v-model",value:selected_banks,expression:"selected_banks"}],attrs:{type:"checkbox",id:e,name:"bank",disabled:t<=0},domProps:{value:e,checked:Array.isArray(selected_banks)?_i(selected_banks,e)>-1:_q(selected_banks,!0)},on:{change:function(t){var n=selected_banks,a=t.target,s=!!a.checked;if(Array.isArray(n)){var r=e,i=_i(n,r);s?i<0&&(selected_banks=n.concat(r)):i>-1&&(selected_banks=n.slice(0,i).concat(n.slice(i+1)))}else selected_banks=s}}})," ",_m(0,!0),"\n\t\t\t\t"+_s(bank_names[e])+"\n\t\t\t"])})])])," ",_h("div",{staticClass:"row",attrs:{style:"overflow:hidden"}},[_l(list,function(e,t){return _h("div",{staticClass:"col-md-4"},[_h("div",{staticClass:"panel panel-default"},[_h("div",{staticClass:"panel-heading"},["\n\t\t\t\t\t"+_s(bank_names[t])+"\n\t\t\t\t\t",e.best_buying?_h("span",{staticClass:"label label-warning",attrs:{style:"float: right"}},["最佳结汇"]):_e()," ",e.best_selling?_h("span",{staticClass:"label label-success",attrs:{style:"float: right"}},["最佳购汇"]):_e()])," ",_h("div",{staticClass:"panel-body"},[_h("div",{staticClass:"exchange-container"},[_h("div",{staticClass:"exchange-item"},[_h("h3",{staticClass:"price-text",style:{color:e.buying_trend>0?"#39ceb8":0==e.buying_trend?"#333":"#ec6941"}},["\n\t\t\t\t\t\t\t\t"+_s(e.buying_rate)+"\n\t\t\t\t\t\t\t"]),"\n\t\t\t\t\t\t\t/\n\t\t\t\t\t\t\t",_h("h3",{staticClass:"price-text",style:{color:e.selling_trend>0?"#39ceb8":0==e.selling_trend?"#333":"#ec6941"}},["\n\t\t\t\t\t\t\t\t"+_s(e.selling_rate)+"\n\t\t\t\t\t\t\t"])])," ",_h("p",{staticClass:"exchange-time"},[_s(e.time)])])])])])})])])},staticRenderFns:[function(){with(this)return _h("span",{staticClass:"checkbox-material"},[_h("span",{staticClass:"check"})])}]}}});
//# sourceMappingURL=app.b3debf162e87281dfc70.js.map