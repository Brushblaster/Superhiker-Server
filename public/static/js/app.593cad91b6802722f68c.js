webpackJsonp([1],{156:function(t,e,i){"use strict";var s=i(213),n=i(831),o=i(818),a=i.n(o),r=i(814),l=i.n(r),c=i(819),u=i.n(c),p=i(820),v=i.n(p),h=i(817),d=i.n(h),g=i(815),f=i.n(g),m=i(816),A=i.n(m),x=i(813),b=i.n(x);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Root",component:a.a},{path:"/home",name:"Home",component:l.a,meta:{requiresAuth:!0}},{path:"/auto",name:"Auto",component:b.a,meta:{requiresAuth:!0}},{path:"/manual",name:"Manual",redirect:"manual/settings",component:A.a,meta:{requiresAuth:!0},children:[{path:"settings",name:"Settings",components:{a:u.a},meta:{requiresAuth:!0}},{path:"setup",name:"Setup",components:{a:v.a},meta:{requiresAuth:!0}},{path:"movement",name:"Movement",components:{a:d.a},meta:{requiresAuth:!0}},{path:"light",name:"Light",components:{a:f.a},meta:{requiresAuth:!0}}]}],mode:"history",scrollBehavior:function(t,e,i){return i||{x:0,y:0}}})},236:function(t,e,i){"use strict";var s=i(423),n=i.n(s),o=i(427),a=i.n(o),r=i(428),l=i.n(r),c=i(229),u=i.n(c),p=i(680),v=i.n(p),h=i(156),d=i(697),g=i.n(d),f=i(410),m=function(){function t(){a()(this,t),this.authenticated=this.isAuthenticated(),this.authNotifier=new v.a,this.admin=this.admin,this.lock=new u.a(f.a.clientId,f.a.domain,{autoclose:!0,auth:{responseType:"token id_token",params:{scope:"openid profile read:order write:order"},redirect:!1},theme:{logo:"../../static/img/v.png",primaryColor:"#1B2030"},languageDictionary:{title:"Ticoa"},allowSignUp:!1}),this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.lock.on("authenticated",this.setSession.bind(this)),this.lock.on("authorization_error",function(t){return console.log(t)}),this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getProfile=this.getProfile.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getRole=this.getRole.bind(this),this.isAdmin=this.isAdmin.bind(this)}return l()(t,[{key:"login",value:function(){this.lock.show()}},{key:"handleAuthentication",value:function(){var t=this;this.auth0.parseHash(function(e,i){console.log(i),i&&i.accessToken&&i.idToken?t.setSession(i):e&&(h.a.replace("/"),console.log(e))})}},{key:"setSession",value:function(t){if(t&&t.accessToken&&t.idToken){var e=n()(1e3*t.expiresIn+(new Date).getTime());localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("expires_at",e),this.authNotifier.emit("authChange",{authenticated:!0,admin:this.isAdmin()})}}},{key:"getAccessToken",value:function(){var t=localStorage.getItem("access_token");if(!t)throw new Error("No access token found");return t}},{key:"getProfile",value:function(t){var e=this.getAccessToken(),i=this;this.lock.getUserInfo(e,function(e,s){s&&(i.userProfile=s),t(e,s)})}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),this.userProfile=null,this.authNotifier.emit("authChange",!1),h.a.replace("/")}},{key:"isAuthenticated",value:function(){var t=JSON.parse(localStorage.getItem("expires_at"));return console.log((new Date).getTime()<t)}},{key:"getRole",value:function(){var t=localStorage.getItem("id_token");if(t)return g()(t)["https://example.com/role"]||null}},{key:"isAdmin",value:function(){return"admin"===this.getRole()}}]),t}();e.a=m},332:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(213),n=i(834),o=i.n(n),a=i(683),r=(i.n(a),i(682)),l=(i.n(r),i(409)),c=i(811),u=i.n(c),p=i(156),v=i(832),h=i.n(v);s.a.use(o.a,{theme:{primary:"#004D40",secondary:"#1DE9B6",accent:"#FF7043",error:"#F44336",warning:"#ffeb3b",info:"#2196F3",success:"#00C853"}}),s.a.config.productionTip=!1,s.a.use(h.a,"#/"),l.a.commit("isAuthenticated",{auth:!0}),new s.a({el:"#app",router:p.a,store:l.a,template:"<App/>",components:{App:u.a},beforeMount:function(){var t=JSON.parse(localStorage.getItem("expires_at"));(new Date).getTime()<t?l.a.commit("isAuthenticated",{auth:!0}):l.a.commit("isAuthenticated",{auth:!1})}})},409:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var s=i(213),n=i(214),o=i(411),a=i(412);s.a.use(n.b);var r=new n.b.Store({modules:{auth:o.a,motionSettings:a.a},state:{isConnected:!1,authenticated:!1,loading:!1,error:null},getters:{},mutations:{setLoading:function(t,e){t.loading=e}},actions:{}})},410:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var s={clientId:"QeDH3mMyfJ6suShhR8NaQALeVF8OTP2t",domain:"ticoa.auth0.com",callbackUrl:"http:/localhost:8081",apiUrl:"api.ticoa.auth0.com"}},411:function(t,e,i){"use strict";var s=i(426),n=i.n(s),o=i(156);e.a={state:{isAuthenticated:!1,loginAlert:!1},getters:{isAuthenticated:function(t){return t.isAuthenticated},loginAlert:function(t){return t.loginAlert}},mutations:{isAuthenticated:function(t,e){!0===e.auth?(t.isAuthenticated=!0,console.log("Autehnticatied...!"),o.a.push("/home")):(t.isAuthenticated=!1,console.log("Authentication is invalid !"))},getLoginAlert:function(t,e){!0===e.setOn?t.loginAlert=!0:t.loginAlert=!1}},actions:{isAuthenticated:function(t,e){var i=t.commit;t.state;return!0===e.auth?new n.a(function(t,e){i("isAuthenticated",{auth:!0})}):new n.a(function(t,e){i("isAuthenticated",{auth:!1})})},getLoginAlert:function(t,e){var i=t.commit;!0===e.setOn?i("getLoginAlert",{setOn:!0}):i("getLoginAlert",{setOn:!1})}}}},412:function(t,e,i){"use strict";e.a={state:{rigiSpeed:10,rigiAccel:10,pilatusSpeed:10,pilatusAccel:10,rigiTimeout:5,pilatusTimeout:5,pilatusSteps:9500,rigiSteps:1e4},getters:{rigiSpeed:function(t){return t.rigiSpeed},rigiAccel:function(t){return t.rigiAccel},pilatusSpeed:function(t){return t.pilatusSpeed},pilatusAccel:function(t){return t.pilatusAccel},rigiTimeout:function(t){return t.rigiTimeout},pilatusTimeout:function(t){return t.pilatusTimeout},pilatusSteps:function(t){return t.pilatusSteps},rigiSteps:function(t){return t.rigiSteps}},mutations:{changeSettings:function(t){this.state.rigiSpeed=t.rigiSpeed,this.state.rigiAccel=t.rigiAccel,this.state.pilatusSpeed=t.pilatusSpeed,this.state.pilatusAccel=t.pilatusAccel,this.state.rigiTimeout=t.rigiTimeout,this.state.pilatusTimeout=t.pilatusTimeout,this.state.pilatusSteps=t.pilatusSteps,this.state.rigiSteps=t.rigiSteps}},actions:{changeSettingsAc:function(t,e){var i=t.commit;console.log(e),i("changeSettings",e)}}}},413:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(812),n=i.n(s);e.default={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},components:{layout:n.a}}},414:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(237),n=i.n(s),o=i(214),a=i(236),r=new a.a,l=r.login,c=r.logout,u=r.authenticated,p=r.authNotifier;e.default={data:function(){var t=this;return p.on("authChange",function(e){t.authenticated=e.authenticated,!0===e.authenticated?t.$store.dispatch("isAuthenticated",{auth:!0}):t.$store.dispatch("isAuthenticated",{auth:!1})}),{Sidebar:!1,options:!1,Sidebarlinks:[{icon:"home",title:"Home",path:"/home",disabled:this.isAuthenticated},{icon:"replay",title:"Auto",path:"/auto",disabled:this.isAuthenticated},{icon:"web",title:"Manual",path:"/manual",disabled:this.isAuthenticated}],auth:r,authenticated:u}},methods:{login:l,logout:c,test:function(){p.emit("authChange",{authenticated:!0}),console.log(u)},test2:function(){console.log(this.authenticated)}},computed:n()({},i.i(o.a)(["isAuthenticated"]))}},415:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{diableSmoke:!1}},methods:{fullAutoStart:function(){this.$socket.emit("driveAutoStart"),console.log("firing auto")},underfloorLight:function(){this.$socket.emit("trigUnderfloorLight")},topLight:function(){this.$socket.emit("trigTopLight")},themeLight:function(){this.$socket.emit("trigThemeLight")},smoke:function(){this.$socket.emit("trigSmoke"),this.diableSmoke=!0},fullAutoStopOnZero:function(){this.$socket.emit("driveAutoStop")},strobeLight:function(){this.$socket.emit("trigStrobeLight")},intermediateStop:function(){this.$socket.emit("E-stop")},reset:function(){this.$socket.emit("resetStop")}},sockets:{trigUnderfloorLight_res:function(){},trigTopLight_res:function(){},trigThemeLight_res:function(){},trigSmoke_res:function(){this.diableSmoke=!1},trigSmokeBlock:function(){this.diableSmoke=!0}}}},416:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Home",data:function(){return{msg:"Hi"}},methods:{},computed:{}}},417:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{diableSmoke:!1}},methods:{underfloorLight:function(){this.$socket.emit("trigUnderfloorLight")},topLight:function(){this.$socket.emit("trigTopLight")},themeLight:function(){this.$socket.emit("trigThemeLight")},strobeLight:function(){this.$socket.emit("trigStrobeLight")},smoke:function(){this.$socket.emit("trigSmoke"),this.diableSmoke=!0}},sockets:{trigUnderfloorLight_res:function(){},trigTopLight_res:function(){},trigThemeLight_res:function(){},trigStrobeLight_res:function(){},trigSmoke_res:function(){this.diableSmoke=!1},trigSmokeBlock:function(){this.diableSmoke=!0}}}},418:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"manual",data:function(){return{e1:!0,ActiveTabbar:!1,TabbarItems:[{title:"Settings",icon:"settings_ethernet",path:"/manual/settings"},{title:"Movement",icon:"directions_transit",path:"/manual/movement"},{title:"Light",icon:"dashboard",path:"/manual/light"}]}},computed:{}}},419:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{rigiSteps:100,rigiAccel:1e3,rigiSpeed:80,pilatusSteps:100,pilatusAccel:1e3,pilatusSpeed:80}},methods:{setStepsRigiUp:function(){this.$socket.emit("driveStepsRigiUp",{steps:this.rigiSteps,accel:this.rigiAccel,speed:this.rigiSpeed}),console.log("sent forward: "+this.steps)},setStepsRigiDown:function(){this.$socket.emit("driveStepsRigiDown",{steps:this.rigiSteps,accel:this.rigiAccel,speed:this.rigiSpeed}),console.log("sent backward: "+this.steps)},setStepsPilatusUp:function(){this.$socket.emit("driveStepsPilatusUp",{steps:this.pilatusSteps,accel:this.pilatusAccel,speed:this.pilatusSpeed}),console.log("sent forward: "+this.steps)},setStepsPilatusDown:function(){this.$socket.emit("driveStepsPilatusDown",{steps:this.pilatusSteps,accel:this.pilatusAccel,speed:this.pilatusSpeed}),console.log("sent backward: "+this.steps)},stop:function(){this.$socket.emit("E-stop"),console.log("E-Stop")},resetStop:function(){this.$socket.emit("resetStop"),console.log("Reset")},moveToStep:function(){this.$socket.emit("moveToStep",{toStep:this.toStep})}},sockets:{connect:function(){console.log("connected to backend")}}}},420:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(237),n=i.n(s),o=i(214),a=i(236),r=new a.a,l=r.login,c=r.logout,u=r.authenticated,p=r.authNotifier;e.default={name:"Root",data:function(){var t=this;return p.on("authChange",function(e){t.authenticated=e.authenticated,console.log(e.authenticated),!0===e.authenticated?t.$store.dispatch("isAuthenticated",{auth:!0}):t.$store.dispatch("isAuthenticated",{auth:!1})}),{auth:r,authenticated:u,alert:!0}},methods:{login:l,logout:c},computed:n()({},i.i(o.a)(["loginAlert"]))}},421:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{rigiSpeed:7,rigiAccel:10,pilatusSpeed:10,pilatusAccel:10,rigiTimeout:1e4,pilatusTimeout:5e3,pilatusSteps:9500,rigiSteps:7100}},methods:{clearForm:function(){this.rigiSpeed=null,this.rigiAccel=null,this.pilatusSpeed=null,this.pilatusAccel=null,this.rigiTimeout=null,this.pilatusTimeout=null,this.pilatusSteps=null,this.rigiSteps=null},setDefault:function(){this.rigiSpeed=7,this.rigiAccel=10,this.pilatusSpeed=10,this.pilatusAccel=10,this.rigiTimeout=1e4,this.pilatusTimeout=5e3,this.pilatusSteps=9500,this.rigiSteps=7100},setSettings:function(){console.log("sent :",this.rigiSpeed),this.$socket.emit("setAutoSettings",{config:{rigiSpeed:this.rigiSpeed,rigiAccel:this.rigiAccel,pilatusSpeed:this.pilatusSpeed,pilatusAccel:this.pilatusAccel,rigiTimeout:this.rigiTimeout,pilatusTimeout:this.pilatusTimeout,pilatusSteps:this.pilatusSteps,rigiSteps:this.rigiSteps}})},loadLastSettings:function(){this.$socket.emit("getLastAutoSettings")}},sockets:{getLastAutoSettings_res:function(t){console.log("received response: ",t.config),this.rigiSpeed=t.config.rigiSpeed,this.rigiAccel=t.config.rigiAccel,this.pilatusSpeed=t.config.pilatusSpeed,this.pilatusAccel=t.config.pilatusAccel,this.rigiTimeout=t.config.rigiTimeout,this.pilatusTimeout=t.config.pilatusTimeout,this.pilatusSteps=t.config.pilatusSteps,this.rigiSteps=t.config.rigiSteps,this.$store.dispatch("changeSettingsAc",t.config)}}}},682:function(t,e){},683:function(t,e){},684:function(t,e){},685:function(t,e){},686:function(t,e){},687:function(t,e){},808:function(t,e){t.exports="data:image/png;base64,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"},811:function(t,e,i){var s=i(52)(i(413),i(825),null,null,null);t.exports=s.exports},812:function(t,e,i){function s(t){i(684)}var n=i(52)(i(414),i(823),s,"data-v-1531a568",null);t.exports=n.exports},813:function(t,e,i){var s=i(52)(i(415),i(821),null,null,null);t.exports=s.exports},814:function(t,e,i){function s(t){i(687)}var n=i(52)(i(416),i(830),s,"data-v-dd9bd13c",null);t.exports=n.exports},815:function(t,e,i){var s=i(52)(i(417),i(824),null,null,null);t.exports=s.exports},816:function(t,e,i){function s(t){i(685)}var n=i(52)(i(418),i(827),s,"data-v-794bdfee",null);t.exports=n.exports},817:function(t,e,i){var s=i(52)(i(419),i(828),null,null,null);t.exports=s.exports},818:function(t,e,i){function s(t){i(686)}var n=i(52)(i(420),i(829),s,"data-v-b78a2c36",null);t.exports=n.exports},819:function(t,e,i){var s=i(52)(i(421),i(822),null,null,null);t.exports=s.exports},820:function(t,e,i){var s=i(52)(null,i(826),null,null,null);t.exports=s.exports},821:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"","grid-list-xl":""}},[i("v-layout",{attrs:{row:"","justify-center":""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",{staticClass:"cyan darken-4 elevation-12 mb-3"},[i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("h3",{staticClass:"headline mb-0"},[t._v("Automode")])])]),t._v(" "),i("v-layout",{attrs:{row:"","justify-end":""}},[i("v-flex",{attrs:{xs6:"","offset-xs1":""}},[i("v-btn",{staticClass:"mb-3",attrs:{large:"",light:"",color:"yellow"},on:{click:t.reset}},[t._v("\n              Reset\n            ")]),t._v(" "),i("v-btn",{staticClass:"mb-3",attrs:{large:"",color:"success"},on:{click:t.fullAutoStart}},[t._v("\n              Start\n            ")]),t._v(" "),i("v-btn",{staticClass:"mb-3",attrs:{large:"",color:"error"},on:{click:t.intermediateStop}},[t._v("\n              Stop\n            ")]),t._v(" "),i("v-btn",{staticClass:"mb-3",attrs:{large:"",color:"info"},on:{click:t.fullAutoStopOnZero}},[t._v("\n              on 0\n            ")])],1)],1)],1)],1)],1),t._v(" "),i("v-layout",{attrs:{row:"","justify-center":""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",{staticClass:"cyan darken-4 elevation-12"},[i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{"offset-xs2":"",xs6:""}},[i("v-layout",{attrs:{column:"",wrap:"","justify-center":""}},[i("v-subheader",[t._v("Underfloor Light")]),t._v(" "),i("v-btn",{attrs:{color:"deep-purple darken-4",large:"",fab:""},on:{click:t.underfloorLight}},[i("v-icon",[t._v("lightbulb_outline")])],1),t._v(" "),i("v-subheader",[t._v("Top Light")]),t._v(" "),i("v-btn",{attrs:{large:"",fab:"",color:"deep-purple darken-4"},on:{click:t.topLight}},[i("v-icon",[t._v("lightbulb_outline")])],1)],1)],1),t._v(" "),i("v-flex",{staticClass:"mb-3",attrs:{xs6:""}},[i("v-layout",{attrs:{column:"",wrap:"","justify-center":""}},[i("v-subheader",[t._v("Theme Light")]),t._v(" "),i("v-btn",{attrs:{color:"deep-purple darken-4",large:"",fab:""},on:{click:t.themeLight}},[i("v-icon",[t._v("lightbulb_outline")])],1),t._v(" "),i("v-subheader",[t._v("smoke")]),t._v(" "),i("v-btn",{attrs:{color:"deep-purple darken-4",large:"",disabled:t.diableSmoke,fab:""},on:{click:t.smoke}},[i("v-icon",[t._v("cloud_queue")])],1)],1)],1),t._v(" "),i("v-flex",{staticClass:"mb-3",attrs:{xs6:""}},[i("v-layout",{attrs:{column:"",wrap:"","justify-center":""}},[i("v-subheader",[t._v("Strobe Light")]),t._v(" "),i("v-btn",{attrs:{color:"deep-purple darken-4",large:"",fab:""},on:{click:t.strobeLight}},[i("v-icon",[t._v("lightbulb_outline")])],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},822:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"","grid-list-xl":""}},[i("h1",{staticClass:"display-2"},[t._v("Auto Settings")]),t._v(" "),i("v-layout",{attrs:{row:"","justify-center":""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",{staticClass:"brown darken-1 elevation-18"},[i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("h3",{staticClass:"headline mb-0"},[t._v("Rigi")])])]),t._v(" "),i("v-subheader",[t._v("Motion Settings")]),t._v(" "),i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{xs5:""}},[i("div",[t._v("\n              Speed [rpm]\n            ")]),t._v(" "),i("v-text-field",{attrs:{type:"number"},model:{value:t.rigiSpeed,callback:function(e){t.rigiSpeed=e},expression:"rigiSpeed"}})],1),t._v(" "),i("v-flex",{attrs:{xs5:""}},[i("div",[t._v("\n              Acceleration [rad/s²]\n            ")]),t._v(" "),i("v-text-field",{attrs:{type:"number"},model:{value:t.rigiAccel,callback:function(e){t.rigiAccel=e},expression:"rigiAccel"}})],1)],1),t._v(" "),i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{xs5:""}},[i("div",[t._v("\n              Steps\n            ")]),t._v(" "),i("v-text-field",{attrs:{type:"number"},model:{value:t.rigiSteps,callback:function(e){t.rigiSteps=e},expression:"rigiSteps"}})],1),t._v(" "),i("v-flex",{attrs:{xs5:""}},[i("div",[t._v("\n              Timeout [ms]\n            ")]),t._v(" "),i("v-text-field",{attrs:{type:"number"},model:{value:t.rigiTimeout,callback:function(e){t.rigiTimeout=e},expression:"rigiTimeout"}})],1)],1)],1)],1)],1),t._v(" "),i("v-layout",{attrs:{row:"","justify-center":""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",{staticClass:"brown darken-1 elevation-18"},[i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("h3",{staticClass:"headline mb-0"},[t._v("Pilatus")])])]),t._v(" "),i("v-subheader",[t._v("Motion Settings")]),t._v(" "),i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{xs5:""}},[i("div",[t._v("\n              Speed [rpm]\n            ")]),t._v(" "),i("v-text-field",{attrs:{type:"number"},model:{value:t.pilatusSpeed,callback:function(e){t.pilatusSpeed=e},expression:"pilatusSpeed"}})],1),t._v(" "),i("v-flex",{attrs:{xs5:""}},[i("div",[t._v("\n              Acceleration [rad/s²]\n            ")]),t._v(" "),i("v-text-field",{attrs:{type:"number"},model:{value:t.pilatusAccel,callback:function(e){t.pilatusAccel=e},expression:"pilatusAccel"}})],1)],1),t._v(" "),i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{xs5:""}},[i("div",[t._v("\n              Steps\n            ")]),t._v(" "),i("v-text-field",{attrs:{type:"number"},model:{value:t.pilatusSteps,callback:function(e){t.pilatusSteps=e},expression:"pilatusSteps"}})],1),t._v(" "),i("v-flex",{attrs:{xs5:""}},[i("div",[t._v("\n              Timeout [ms]\n            ")]),t._v(" "),i("v-text-field",{attrs:{type:"number"},model:{value:t.pilatusTimeout,callback:function(e){t.pilatusTimeout=e},expression:"pilatusTimeout"}})],1)],1)],1)],1)],1),t._v(" "),i("v-layout",{attrs:{row:"","justify-center":""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",{staticClass:"brown darken-1 elevation-18"},[i("v-card-title",{attrs:{"primary-title":""}}),t._v(" "),i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{xs10:"","offset-xs4":""}},[i("v-subheader",[t._v("Confirm")]),t._v(" "),i("v-btn",{attrs:{color:"teal"},on:{click:t.clearForm}},[t._v("\n              clear\n            ")]),t._v(" "),i("v-btn",{attrs:{color:"teal"},on:{click:t.setDefault}},[t._v("\n              default\n            ")]),t._v(" "),i("v-btn",{attrs:{color:"teal"},on:{click:t.setSettings}},[t._v("\n              set\n            ")]),t._v(" "),i("v-btn",{attrs:{color:"teal"},on:{click:t.loadLastSettings}},[t._v("\n              Load\n            ")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},823:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{attrs:{color:"primary"}}),t._v(" "),i("v-navigation-drawer",{attrs:{fixed:"",app:"",light:""},model:{value:t.Sidebar,callback:function(e){t.Sidebar=e},expression:"Sidebar"}},[i("v-list",t._l(t.Sidebarlinks,function(e){return i("v-list-tile",{key:e.title,attrs:{value:"true",router:"",to:e.path,disabled:e.disabled,dark:""}},[i("v-list-tile-action",[i("v-icon",{attrs:{light:""},domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),i("v-toolbar",{staticClass:"primary",attrs:{fixed:"",app:""}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.Sidebar=!t.Sidebar}}}),t._v(" "),i("v-toolbar-title",[i("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/home",tag:"span"}},[t._v("Gipfelstürmer")])],1),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:!this.isAuthenticated,expression:"!this.isAuthenticated"}],attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.login(e)}}},[i("v-icon",{domProps:{innerHTML:t._s(this.isAuthenticated?"lock":"lock_open")}})],1),t._v(" "),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:this.isAuthenticated,expression:"this.isAuthenticated"}],attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.logout(e)}}},[i("v-icon",{domProps:{innerHTML:t._s(this.isAuthenticated?"lock":"lock_open")}})],1),t._v(" "),i("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.options=!t.options}}},[i("v-icon",[t._v("more_vert")])],1),t._v(" "),i("v-dialog",{attrs:{presistent:"","max-width":"350px"},model:{value:t.options,callback:function(e){t.options=e},expression:"options"}},[i("v-card",[i("v-card-media",{attrs:{src:"../../../static/img/joda.jpg",height:"250px"}}),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){e.stopPropagation(),t.options=!t.options}}},[t._v("Close")])],1)],1)],1)],1),t._v(" "),i("v-content",[i("router-view",[i("v-container",{attrs:{fluid:""}})],1)],1)],1)},staticRenderFns:[]}},824:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"","grid-list-xl":""}},[i("v-layout",{attrs:{row:"","justify-center":""}},[i("v-flex",{attrs:{xs10:""}},[i("v-card",{staticClass:"brown darken-1 elevation-18"},[i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{"offset-xs1":"",xs6:""}},[i("v-layout",{attrs:{column:"",wrap:"","justify-center":""}},[i("v-subheader",[t._v("Underfloor Light")]),t._v(" "),i("v-btn",{attrs:{color:"teal darken-2",large:"",fab:""},on:{click:t.underfloorLight}},[i("v-icon",[t._v("lightbulb_outline")])],1),t._v(" "),i("v-subheader",[t._v("Top Light")]),t._v(" "),i("v-btn",{attrs:{large:"",fab:"",color:"teal darken-2"},on:{click:t.topLight}},[i("v-icon",[t._v("lightbulb_outline")])],1)],1)],1),t._v(" "),i("v-flex",{staticClass:"mb-3",attrs:{xs6:""}},[i("v-layout",{attrs:{column:"",wrap:"","justify-center":""}},[i("v-subheader",[t._v("Theme Light")]),t._v(" "),i("v-btn",{attrs:{color:"teal darken-2",large:"",fab:""},on:{click:t.themeLight}},[i("v-icon",[t._v("lightbulb_outline")])],1),t._v(" "),i("v-subheader",[t._v("smoke")]),t._v(" "),i("v-btn",{attrs:{color:"teal darken-2",large:"",disabled:t.diableSmoke,fab:""},on:{click:t.smoke}},[i("v-icon",[t._v("cloud_queue")])],1)],1)],1),t._v(" "),i("v-flex",{staticClass:"mb-3",attrs:{xs6:""}},[i("v-layout",{attrs:{column:"",wrap:"","justify-center":""}},[i("v-subheader",[t._v("Strobe Light")]),t._v(" "),i("v-btn",{attrs:{color:"teal darken-2",large:"",fab:""},on:{click:t.strobeLight}},[i("v-icon",[t._v("lightbulb_outline")])],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},825:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{staticClass:"blue-grey darken-2",attrs:{dark:""}},[i("layout"),t._v(" "),i("v-footer",{attrs:{fixed:"",app:"",color:"blue-grey lighten-1"}},[i("span",{staticClass:"ml-4"},[t._v("© 2017 Denis Käch")]),t._v(" "),i("v-spacer"),t._v(" "),i("a",{staticClass:"mr-4 white--text",attrs:{href:"https://next.vuetifyjs.com"}},[i("span",[t._v("created with awsome Vuetify")])])],1)],1)},staticRenderFns:[]}},826:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},827:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",{attrs:{fluid:"","gird-list-xs":""}}),t._v(" "),i("router-view",{staticClass:"Manual",attrs:{name:"a"}}),t._v(" "),i("div",{staticClass:"headline text-xs-center pa-5"}),t._v(" "),i("v-bottom-nav",{attrs:{fixed:"",value:!0,color:"primary"}},t._l(t.TabbarItems,function(e){return i("v-btn",{key:e.title,attrs:{flat:"",color:"white",value:"recent",router:"",to:e.path}},[i("span",[t._v(t._s(e.title))]),t._v(" "),i("v-icon",[t._v(t._s(e.icon))])],1)}))],1)},staticRenderFns:[]}},828:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"","grid-list-xl":"","text-xs-center":"","align-center":""}},[i("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[i("v-flex",{staticClass:"elevation-15",attrs:{xs12:""}},[i("v-card",{staticClass:"blue"},[i("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("\n          Rigi\n        ")]),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs4:""}},[i("v-btn",{attrs:{color:"deep-purple darken-4"},on:{click:t.setStepsRigiUp}},[t._v("\n            Up\n          ")]),t._v(" "),i("v-btn",{attrs:{color:"deep-purple darken-4"},on:{click:t.setStepsRigiDown}},[t._v("\n            Down\n          ")])],1),t._v(" "),i("v-flex",{attrs:{xs4:""}},[i("v-btn",{attrs:{color:"error"},on:{click:t.stop}},[t._v("\n            Stop\n          ")]),t._v(" "),i("v-btn",{attrs:{light:"",color:"lime"},on:{click:t.resetStop}},[t._v("\n            Reset\n          ")])],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs4:""}},[i("v-text-field",{attrs:{label:"Accel/Decel [rad/s^2]",type:"number"},model:{value:t.rigiAccel,callback:function(e){t.rigiAccel=e},expression:"rigiAccel"}})],1),t._v(" "),i("v-flex",{attrs:{xs4:""}},[i("v-text-field",{attrs:{label:"Top Speed [rpm]",type:"number"},model:{value:t.rigiSpeed,callback:function(e){t.rigiSpeed=e},expression:"rigiSpeed"}})],1),t._v(" "),i("v-flex",{attrs:{xs4:""}},[i("v-text-field",{attrs:{xs4:"",label:"Number of Steps",type:"number"},model:{value:t.rigiSteps,callback:function(e){t.rigiSteps=e},expression:"rigiSteps"}})],1)],1)],1),t._v(" "),i("v-card",{staticClass:"blue"},[i("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("\n          Pilatus\n        ")]),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs4:""}},[i("v-btn",{attrs:{color:"deep-purple darken-4"},on:{click:t.setStepsPilatusUp}},[t._v("\n            Up\n          ")]),t._v(" "),i("v-btn",{attrs:{color:"deep-purple darken-4"},on:{click:t.setStepsPilatusDown}},[t._v("\n            Down\n          ")])],1),t._v(" "),i("v-flex",{attrs:{xs4:""}},[i("v-btn",{attrs:{color:"error"},on:{click:t.stop}},[t._v("\n            Stop\n          ")]),t._v(" "),i("v-btn",{attrs:{light:"",color:"lime"},on:{click:t.resetStop}},[t._v("\n            Reset\n          ")])],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs4:""}},[i("v-text-field",{attrs:{label:"Accel/Decel [rad/s^2]",type:"number"},model:{value:t.pilatusAccel,callback:function(e){t.pilatusAccel=e},expression:"pilatusAccel"}})],1),t._v(" "),i("v-flex",{attrs:{xs4:""}},[i("v-text-field",{attrs:{label:"Top Speed [rpm]",type:"number"},model:{value:t.pilatusSpeed,callback:function(e){t.pilatusSpeed=e},expression:"pilatusSpeed"}})],1),t._v(" "),i("v-flex",{attrs:{xs4:""}},[i("v-text-field",{attrs:{xs4:"",label:"Number of Steps",type:"number"},model:{value:t.pilatusSteps,callback:function(e){t.pilatusSteps=e},expression:"pilatusSteps"}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},829:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"root"},[i("v-layout",{attrs:{row:"","justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm9:"",md7:"",lg5:"",xl3:""}},[i("v-card",{attrs:{light:""}},[i("v-card-media",{attrs:{src:"../../../static/img/vuetifyy.png",height:"197px",width:"197px"}}),t._v(" "),i("h3",{staticClass:"display-1 mr-2 text-xs-center"},[t._v("Welcome to Gipfelstürmer")]),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"headline text-xs-center"},[i("h3",[t._v("You are not logged in")]),t._v(" "),i("h3",[t._v("Please login, now !")])]),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"blue"},on:{click:t.login}},[t._v("Login")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{attrs:{flat:"",color:"blue",href:"https://www.google.ch"}},[t._v("\n              Leave\n            ")])],1)],1),t._v(" "),i("small",[t._v("Fasnacht 2018")])],1)],1),t._v(" "),i("v-alert",{attrs:{color:"error",icon:"priority_high",value:this.loginAlert,transition:"scale-transition"}},[t._v("\n      You need to Logi in !\n      ")])],1)},staticRenderFns:[]}},830:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello text-xs-center"},[s("img",{attrs:{src:i(808)}}),t._v(" "),s("h1",[t._v("Welcome to")]),t._v(" "),s("h1",[t._v("Gipfelstürmer")])])}]}},836:function(t,e,i){i(333),t.exports=i(332)}},[836]);
//# sourceMappingURL=app.593cad91b6802722f68c.js.map