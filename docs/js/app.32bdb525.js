(function(t){function a(a){for(var i,r,c=a[0],n=a[1],l=a[2],d=0,v=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);u&&u(a);while(v.length)v.shift()();return e.push.apply(e,l||[]),s()}function s(){for(var t,a=0;a<e.length;a++){for(var s=e[a],i=!0,r=1;r<s.length;r++){var n=s[r];0!==o[n]&&(i=!1)}i&&(e.splice(a--,1),t=c(c.s=s[0]))}return t}var i={},o={app:0},e=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"be5e81d1"}[t]+".js"}function c(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var a=[],s=o[t];if(0!==s)if(s)a.push(s[2]);else{var i=new Promise((function(a,i){s=o[t]=[a,i]}));a.push(s[2]=i);var e,n=document.createElement("script");n.charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.src=r(t);var l=new Error;e=function(a){n.onerror=n.onload=null,clearTimeout(d);var s=o[t];if(0!==s){if(s){var i=a&&("load"===a.type?"missing":a.type),e=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+e+")",l.name="ChunkLoadError",l.type=i,l.request=e,s[1](l)}o[t]=void 0}};var d=setTimeout((function(){e({type:"timeout",target:n})}),12e4);n.onerror=n.onload=e,document.head.appendChild(n)}return Promise.all(a)},c.m=t,c.c=i,c.d=function(t,a,s){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)c.d(s,i,function(a){return t[a]}.bind(null,i));return s},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/",c.oe=function(t){throw console.error(t),t};var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var d=0;d<n.length;d++)a(n[d]);var u=l;e.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var i=s("85ec"),o=s.n(i);o.a},1474:function(t,a,s){"use strict";var i=s("571a"),o=s.n(i);o.a},3486:function(t,a,s){},"4f75":function(t,a,s){},"54c5":function(t,a,s){"use strict";var i=s("bc9e"),o=s.n(i);o.a},"56d7":function(t,a,s){"use strict";s.r(a);var i=s("2b0e"),o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("Nav"),s("Search"),s("Display")],1)},e=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"nav logo"},[t._v("Travello")]),s("div",{staticClass:"nav services-section"},[s("div",{staticClass:"accomodations"},[s("span",[s("font-awesome-icon",{staticClass:"icon",style:{color:"#E3E3E3"},attrs:{icon:"home",size:"lg"}})],1),s("div",{staticClass:"services-section-text"},[t._v("Accomodations")])]),s("div",{staticClass:"car-rentals"},[s("span",[s("font-awesome-icon",{staticClass:"icon",style:{color:"#E3E3E3"},attrs:{icon:"car",size:"lg"}})],1),s("div",{staticClass:"services-section-text"},[t._v("Car Rentals")])]),s("div",{staticClass:"airport-taxis "},[s("span",[s("font-awesome-icon",{staticClass:"icon",style:{color:"#E3E3E3"},attrs:{icon:"taxi",size:"lg"}})],1),s("div",{staticClass:"services-section-text"},[t._v("Airport Taxis")])])]),s("div",{staticClass:"nav login-section"},[t._m(0),t._m(1),s("button",{staticClass:"help"},[s("font-awesome-icon",{attrs:{icon:"comment",size:"lg"}})],1)])])},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"register",attrs:{type:"button"}},[s("p",[t._v("Register")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"sign-in"},[s("p",[t._v("Sign In")])])}],n=s("ecee"),l=s("c074");n["c"].add(l["f"]),n["c"].add(l["c"]),n["c"].add(l["h"]),n["c"].add(l["e"]);var d={name:"Nav",props:{msg:String}},u=d,v=(s("7e7c"),s("2877")),m=Object(v["a"])(u,r,c,!1,null,"53d32124",null),p=m.exports,C=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"searchbar"},[s("span",{staticClass:"icon-container"},[s("font-awesome-icon",{staticClass:"icon",style:{color:"#825DBB"},attrs:{icon:"search",size:"m"}})],1),s("input",{staticClass:"search-field",attrs:{placeholder:"Bali, Canggu, Kabupaten Badung"}})]),s("div",{staticClass:"search-options"},[s("div",{staticClass:"options date-range"},[s("span",[s("font-awesome-icon",{staticClass:"icon",style:{color:"#825DBB"},attrs:{icon:"calendar",size:"m"}})],1),s("DatePicker"),s("span",{staticClass:"select-arrow"},[t._v(" ▼")])],1),s("div",{staticClass:"options search-rooms"},[s("span",[s("font-awesome-icon",{staticClass:"icon",style:{color:"#825DBB"},attrs:{icon:"bed",size:"m"}})],1),t._v("Rooms - 1 "),s("span",{staticClass:"select-arrow"},[t._v("▼")])]),s("div",{staticClass:"options search-adults"},[s("span",[s("font-awesome-icon",{staticClass:"icon",style:{color:"#825DBB"},attrs:{icon:"user",size:"m"}})],1),t._v("Adults - 1"),s("span",{staticClass:"select-arrow"},[t._v("▼")])]),s("div",{staticClass:"options search-children"},[s("span",[s("font-awesome-icon",{staticClass:"icon",style:{color:"#825DBB"},attrs:{icon:"child",size:"m"}})],1),t._v("Children - 0 "),s("span",{staticClass:"select-arrow"},[t._v("▼")])])])])},g=[],f=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("date-picker",{staticClass:"options date-range",attrs:{lang:"en",width:"900",range:"",type:"date",format:"MM-DD-YYYY","input-class":"calendar-input","calendar-class":"calendar-input"},model:{value:t.range,callback:function(a){t.range=a},expression:"range"}})],1)},h=[],_=s("ec45"),b=(s("411c"),{components:{DatePicker:_["a"]},data(){return{date:"",range:""}}}),y=b,x=(s("54c5"),Object(v["a"])(y,f,h,!1,null,"5f0972af",null)),w=x.exports;n["c"].add(l["d"]),n["c"].add(l["i"]),n["c"].add(l["a"]),n["c"].add(l["b"]),n["c"].add(l["g"]);var P,E,M={components:{DatePicker:w}},k=M,B=(s("1474"),Object(v["a"])(k,C,g,!1,null,"5b087e42",null)),O=B.exports,S=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("GoogleMap"),s("Grid")],1)},j=[],A=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-container"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:"https://source.unsplash.com/200x140/?bali,bedroom"}})]),s("div",{staticClass:"card-data"},[s("div",{staticClass:"data-container"},[s("div",{staticClass:"room-description"},[s("p",[t._v("Romantic Tropical Getaway")])]),s("div",{staticClass:"room-badges"},[s("div",{staticClass:"room-rating"},[t._v("4.97")]),s("div",{staticClass:"room-type premium"},[t._v("PREMIUM")])])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:"https://source.unsplash.com/200x140/?bali,hotel"}})]),s("div",{staticClass:"card-data"},[s("div",{staticClass:"data-container"},[s("div",{staticClass:"room-description"},[s("p",[t._v("Luxary Gold Coast Hinterland Villa")])]),s("div",{staticClass:"room-badges"},[s("div",{staticClass:"room-rating"},[t._v("4.97")]),s("div",{staticClass:"room-type premium"},[t._v("PREMIUM")])])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:"https://source.unsplash.com/200x140/?bali,condo "}})]),s("div",{staticClass:"card-data"},[s("div",{staticClass:"data-container"},[s("div",{staticClass:"room-description"},[s("p",[t._v("Costal Luxary Condominium")])]),s("div",{staticClass:"room-badges"},[s("div",{staticClass:"room-rating"},[t._v("4.97")]),s("div",{staticClass:"room-type plus"},[t._v("PLUS")])])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:"https://source.unsplash.com/200x140/?bali,townhouse"}})]),s("div",{staticClass:"card-data"},[s("div",{staticClass:"data-container"},[s("div",{staticClass:"room-description"},[s("p",[t._v("Magical Treehouse")])]),s("div",{staticClass:"room-badges"},[s("div",{staticClass:"room-rating"},[t._v("4.97")]),s("div",{staticClass:"room-type plus"},[t._v("PLUS")])])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:"https://source.unsplash.com/200x140/?bali,mansion"}})]),s("div",{staticClass:"card-data"},[s("div",{staticClass:"data-container"},[s("div",{staticClass:"room-description"},[s("p",[t._v("Cozy Bungalo For Two")])]),s("div",{staticClass:"room-badges"},[s("div",{staticClass:"room-rating"},[t._v("4.97")]),s("div",{staticClass:"room-type plus"},[t._v("PLUS")])])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:"https://source.unsplash.com/200x140/?bedroom, trees"}})]),s("div",{staticClass:"card-data"},[s("div",{staticClass:"data-container"},[s("div",{staticClass:"room-description"},[s("p",[t._v("Luxary Gold Coast Hinterland Villa")])]),s("div",{staticClass:"room-badges"},[s("div",{staticClass:"room-rating"},[t._v("4.97")]),s("div",{staticClass:"room-type premium"},[t._v("PREMIUM")])])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:"https://source.unsplash.com/200x140/?bedroom, ocean"}})]),s("div",{staticClass:"card-data"},[s("div",{staticClass:"data-container"},[s("div",{staticClass:"room-description"},[s("p",[t._v("Luxary Gold Coast Hinterland Villa")])]),s("div",{staticClass:"room-badges"},[s("div",{staticClass:"room-rating"},[t._v("4.97")]),s("div",{staticClass:"room-type basic"})])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:"https://source.unsplash.com/200x140/?livingroom, tropical"}})]),s("div",{staticClass:"card-data"},[s("div",{staticClass:"data-container"},[s("div",{staticClass:"room-description"},[s("p",[t._v("Luxary Gold Coast Hinterland Villa")])]),s("div",{staticClass:"room-badges"},[s("div",{staticClass:"room-rating"},[t._v("4.97")]),s("div",{staticClass:"room-type basic"})])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:"https://source.unsplash.com/200x140/?bali,livingroom, light"}})]),s("div",{staticClass:"card-data"},[s("div",{staticClass:"data-container"},[s("div",{staticClass:"room-description"},[s("p",[t._v("Luxary Gold Coast Hinterland Villa")])]),s("div",{staticClass:"room-badges"},[s("div",{staticClass:"room-rating"},[t._v("4.97")]),s("div",{staticClass:"room-type premium"},[t._v("PREMIUM")])])])])])])}],G={},L=G,D=(s("eade"),Object(v["a"])(L,A,z,!1,null,"23481094",null)),$=D.exports,T=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{attrs:{id:"map"}},[s("gmap-map",{staticClass:"map",staticStyle:{width:"290px",height:"238px","margin-left":"40px","margin-top":"16px","border-radius":"25px"},attrs:{center:t.center,zoom:12}},t._l(t.markers,(function(a,i){return s("gmap-marker",{key:i,attrs:{position:a.position},on:{click:function(s){t.center=a.position}}})})),1)],1),t._m(0)])},H=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"nearby"},[s("div",{staticClass:"nearby-text"},[s("p",[t._v("More Than Just Hotels")])]),s("div",{staticClass:"nearby-rooms"},[s("div",{staticClass:"room"},[s("div",{staticClass:"room-thumbnail"},[s("img",{attrs:{src:"https://source.unsplash.com/50x60/?bedroom, ocean"}})]),s("div",{staticClass:"room-info"},[s("p",[t._v("Sugar Loft Apartments")]),s("p",{staticClass:"location"},[t._v("Bali, Canggu")]),s("div",{staticClass:"room-rating"},[t._v("4.98")])])]),s("div",{staticClass:"room"},[s("div",{staticClass:"room-thumbnail"},[s("img",{attrs:{src:"https://source.unsplash.com/50x60/?living, tropical"}})]),s("div",{staticClass:"room-info"},[s("p",[t._v("Grande Canggu Apartments")]),s("p",{staticClass:"location"},[t._v("Bali, Canggu")]),s("div",{staticClass:"room-rating"},[t._v("4.98")])])]),s("div",{staticClass:"room"},[s("div",{staticClass:"room-thumbnail"},[s("img",{attrs:{src:"https://source.unsplash.com/50x60/?bedroom, tropical"}})]),s("div",{staticClass:"room-info"},[s("p",[t._v("Main Street Apartments")]),s("p",{staticClass:"location"},[t._v("Bali, Canggu")]),s("div",{staticClass:"room-rating"},[t._v("4.98")])])]),s("div",{staticClass:"room"},[s("div",{staticClass:"room-thumbnail"},[s("img",{attrs:{src:"https://source.unsplash.com/50x60/?sleep, ocean"}})]),s("div",{staticClass:"room-info"},[s("p",[t._v("Final Fantasy Apartments")]),s("p",{staticClass:"location"},[t._v("Bali, Canggu")]),s("div",{staticClass:"room-rating"},[t._v("4.98")])])]),s("div",{staticClass:"room"},[s("div",{staticClass:"room-thumbnail"},[s("img",{attrs:{src:"https://source.unsplash.com/50x60/?lunch, ocean"}})]),s("div",{staticClass:"room-info"},[s("p",[t._v("Four Score Apartments")]),s("p",{staticClass:"location"},[t._v("Bali, Canggu")]),s("div",{staticClass:"room-rating"},[t._v("4.98")])])]),s("div",{staticClass:"room"},[s("div",{staticClass:"room-thumbnail"},[s("img",{attrs:{src:"https://source.unsplash.com/50x60/?kitchen, ocean"}})]),s("div",{staticClass:"room-info"},[s("p",[t._v("Vue Loft Apartments")]),s("p",{staticClass:"location"},[t._v("Bali, Canggu")]),s("div",{staticClass:"room-rating"},[t._v("4.98")])])]),s("div",{staticClass:"room"},[s("div",{staticClass:"room-thumbnail"},[s("img",{attrs:{src:"https://source.unsplash.com/50x60/?bedroom, forest"}})]),s("div",{staticClass:"room-info"},[s("p",[t._v("Java Script Apartments")]),s("p",{staticClass:"location"},[t._v("Bali, Canggu")]),s("div",{staticClass:"room-rating"},[t._v("4.98")])])])])])}],R={name:"GoogleMap",data(){return{center:{lat:5.508,lng:-73.587},markers:[],places:[],currentPlace:null}},mounted(){this.geolocate()},methods:{setPlace(t){this.currentPlace=t},addMarker(){if(this.currentPlace){const t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){navigator.geolocation.getCurrentPosition(t=>{this.center={lat:t.coords.latitude,lng:t.coords.longitude}})}}},U=R,V=(s("c16a"),Object(v["a"])(U,T,H,!1,null,"5ed750c1",null)),I=V.exports,J={components:{Grid:$,GoogleMap:I}},F=J,Y=(s("7783"),Object(v["a"])(F,S,j,!1,null,"01b927a0",null)),N=Y.exports,K={name:"home",components:{Nav:p,Search:O,Display:N}},q=K,W=(s("034f"),Object(v["a"])(q,o,e,!1,null,null,null)),X=W.exports,Z=s("8c4f"),Q={},tt=Object(v["a"])(Q,P,E,!1,null,null,null),at=tt.exports;i["a"].use(Z["a"]);const st=[{path:"/",name:"home",component:at},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],it=new Z["a"]({routes:st});var ot=it,et=s("2f62");i["a"].use(et["a"]);var rt=new et["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ct=s("755e"),nt=s("ad3d");n["c"].add(l["f"]),i["a"].component("font-awesome-icon",nt["a"]),i["a"].use(ct,{load:{key:"AIzaSyA6VxaG4ZuVSu_HEzU9O6WHvPJ5kbXhHKA",libraries:"places"}}),i["a"].config.productionTip=!1,new i["a"]({router:ot,store:rt,render:function(t){return t(X)}}).$mount("#app")},"571a":function(t,a,s){},7783:function(t,a,s){"use strict";var i=s("a01d"),o=s.n(i);o.a},"7e7c":function(t,a,s){"use strict";var i=s("a84c"),o=s.n(i);o.a},"85ec":function(t,a,s){},a01d:function(t,a,s){},a84c:function(t,a,s){},bc9e:function(t,a,s){},c16a:function(t,a,s){"use strict";var i=s("3486"),o=s.n(i);o.a},eade:function(t,a,s){"use strict";var i=s("4f75"),o=s.n(i);o.a}});
//# sourceMappingURL=app.32bdb525.js.map