(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-980b8b46"],{7532:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("SidebarAdmin"),s("div",{staticClass:"relative md:ml-64 bg-gray-100"},[s("AdminNavbar"),s("div",{staticClass:"px-4 md:px-10 mx-auto w-full -m-24"},[s("router-view"),s("footer-admin")],1)],1)],1)},a=[],i=s("d4ec"),o=s("262e"),r=s("2caf"),n=s("9ab4"),c=s("60a3"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4 text-white relative md:bg-white  md:shadow-lg"},[s("div",{staticClass:"w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4"},[s("div",{staticClass:"hidden md:flex text-black"},[s("button",{on:{click:function(e){return t.$router.go(-1)}}},[s("i",{staticClass:"fas fa-chevron-circle-left text-3xl"})])]),s("ul",{staticClass:"flex-col md:flex-row list-none items-center hidden md:flex"},[s("user-dropdown")],1)])])},f=[],m=s("cf74"),u={components:{UserDropdown:m["a"]}},x=u,p=s("2877"),w=Object(p["a"])(x,d,f,!1,null,null,null),h=w.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 bg"},[s("div",{staticClass:"md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"},[s("button",{staticClass:"text-white cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",attrs:{type:"button"},on:{click:function(e){return t.toggleCollapseShow("bg m-2 py-3 px-6")}}},[s("i",{staticClass:"fas fa-bars"})]),t._m(0),s("i",{staticClass:"em em-cow md:invisible "}),s("div",{staticClass:"md:flex md:flex-col  md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded",class:t.collapseShow},[s("div",{staticClass:"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300 "},[s("div",{staticClass:"flex flex-wrap "},[s("div",{staticClass:"w-6/12"},[s("router-link",{staticClass:"md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"},[t._v(" ตลาดควายไทย ")])],1),s("div",{staticClass:"w-6/12 flex justify-end"},[s("button",{staticClass:"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",attrs:{type:"button"},on:{click:function(e){return t.toggleCollapseShow("hidden")}}},[s("i",{staticClass:"fas fa-times"})])])])]),s("hr",{staticClass:"my-4 md:min-w-full"}),s("h6",{staticClass:"md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline"},[t._v(" แดชบอร์ด ")]),s("ul",{staticClass:"md:flex-col md:min-w-full flex flex-col list-none"},[s("li",{staticClass:"items-center"},[s("router-link",{attrs:{to:"/admin/"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,a=e.navigate,i=e.isActive;return[s("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[i?"text-yellow-400 hover:text-yellow-600":"text-white hover:text-gray-400"],attrs:{href:l},on:{click:a}},[s("i",{staticClass:"fas fa-user mr-2 text-sm",class:[i?"opacity-75":"text-white"]}),t._v(" แดชบอร์ด ")])]}}])})],1)]),s("hr",{staticClass:"my-4 md:min-w-full"}),s("h6",{staticClass:"md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline"},[t._v(" รายงาน ")]),s("ul",{staticClass:"md:flex-col md:min-w-full flex flex-col list-none"},[s("li",{staticClass:"items-center"},[s("router-link",{attrs:{to:"/admin/reportuser"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,a=e.navigate,i=e.isActive;return[s("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[i?"text-yellow-400 hover:text-yellow-600":"text-white hover:text-gray-400"],attrs:{href:l},on:{click:a}},[s("i",{staticClass:"fas fa-user mr-2 text-sm",class:[i?"opacity-75":"text-white"]}),t._v(" รายงานเกษตกร ")])]}}])})],1),s("li",{staticClass:"items-center"},[s("router-link",{attrs:{to:"/admin/reportmap"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,a=e.navigate,i=e.isActive;return[s("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[i?"text-yellow-400 hover:text-yellow-600":"text-white hover:text-gray-400"],attrs:{href:l},on:{click:a}},[s("i",{staticClass:"fas fa-globe-americas mr-2 text-sm",class:[i?"opacity-75":"text-white"]}),t._v(" รายงานเชิงแผนที่ ")])]}}])})],1),s("li",{staticClass:"items-center"},[s("router-link",{attrs:{to:"/admin/reportcattle"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,a=e.navigate,i=e.isActive;return[s("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[i?"text-yellow-400 hover:text-yellow-600":"text-white hover:text-gray-400"],attrs:{href:l},on:{click:a}},[s("i",{staticClass:"em em-water_buffalo mr-2 text-sm",class:[i?"opacity-75":"text-white"]}),t._v(" รายงานโคขุน ")])]}}])})],1),s("li",{staticClass:"items-center"},[s("router-link",{attrs:{to:"/admin/reportflow"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,a=e.navigate,i=e.isActive;return[s("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[i?"text-yellow-400 hover:text-yellow-600":"text-white hover:text-gray-400"],attrs:{href:l},on:{click:a}},[s("i",{staticClass:"fab fa-stack-overflow mr-2 text-sm",class:[i?"opacity-75":"text-white"]}),t._v(" รายงานความเคลื่อนไหว ")])]}}])})],1)]),s("hr",{staticClass:"my-4 md:min-w-full"}),s("h6",{staticClass:"md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline"},[t._v(" ส่งออกข้อมูล ")]),s("ul",{staticClass:"md:flex-col md:min-w-full flex flex-col list-none md:mb-4"},[s("li",{staticClass:"items-center"},[s("router-link",{attrs:{to:"/admin/export"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,a=e.navigate,i=e.isActive;return[s("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[i?"text-yellow-400 hover:text-yellow-600":"text-white hover:text-gray-400"],attrs:{href:l},on:{click:a}},[s("i",{staticClass:"fas fa-file-export mr-2 text-sm",class:[i?"opacity-75":"text-white"]}),t._v(" ส่งออกข้อมูลการเจริญเติบโต ")])]}}])})],1)]),s("hr",{staticClass:"my-4 md:min-w-full"}),s("h6",{staticClass:"md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline"},[t._v(" การจัดการ ")]),s("ul",{staticClass:"md:flex-col md:min-w-full flex flex-col list-none md:mb-4"},[s("li",{staticClass:"items-center"},[s("router-link",{attrs:{to:"/admin/user"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,a=e.navigate,i=e.isActive;return[s("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[i?"text-yellow-400 hover:text-yellow-600":"text-white hover:text-gray-400"],attrs:{href:l},on:{click:a}},[s("i",{staticClass:"fas fa-user mr-2 text-sm",class:[i?"opacity-75":"text-white"]}),t._v(" จัดการข้อมูลผู้ใช้ ")])]}}])})],1)]),s("ul",{staticClass:"md:flex-col md:min-w-full flex flex-col list-none md:mb-4"},[s("li",{staticClass:"items-center"},[s("router-link",{attrs:{to:"/admin/admin"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,a=e.navigate,i=e.isActive;return[s("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[i?"text-yellow-400 hover:text-yellow-600":"text-white hover:text-gray-400"],attrs:{href:l},on:{click:a}},[s("i",{staticClass:"fas fa-users mr-2 text-sm",class:[i?"opacity-75":"text-white"]}),t._v(" จัดการข้อมูลผู้ดูแลระบบ ")])]}}])})],1)]),s("hr",{staticClass:"my-4 md:min-w-full"}),s("h6",{staticClass:"md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline"},[t._v(" ออกจากระบบ ")]),s("ul",{staticClass:"md:flex-col md:min-w-full flex flex-col list-none md:mb-4"},[s("li",{staticClass:"items-center"},[s("router-link",{attrs:{to:"/admin/"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,a=e.navigate,i=e.isActive;return[s("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[i?"text-yellow-400 hover:text-yellow-600":"text-white hover:text-gray-400"],attrs:{href:l},on:{click:a}},[s("i",{staticClass:"fas fa-sign-out-alt mr-2 text-sm",class:[i?"opacity-75":"text-white"]}),t._v(" ออกจากระบบ ")])]}}])})],1)])])])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"border-2  text-center text-white mr-0 inline-block uppercase font-bold p-4 px-0 invisible md:visible"},[s("i",{staticClass:"em em-cow"}),t._v(" "),s("span",{staticClass:"text-sm"},[t._v("การจัดการการเลี้ยงโคขุน")])])}],y=s("ade3"),C=s("227a"),k=Object(y["a"])({components:{},data:function(){return{collapseShow:"hidden"}},methods:{toggleCollapseShow:function(t){this.collapseShow=t}}},"components",{NotificationDropdown:C["a"],UserDropdown:m["a"]}),g=k,_=(s("a497"),Object(p["a"])(g,b,v,!1,null,"63832a3c",null)),S=_.exports,j=s("59ac"),A=function(t){Object(o["a"])(s,t);var e=Object(r["a"])(s);function s(){return Object(i["a"])(this,s),e.apply(this,arguments)}return s}(c["b"]);A=Object(n["a"])([Object(c["a"])({components:{AdminNavbar:h,SidebarAdmin:S,FooterAdmin:j["a"]},computed:{},data:function(){return{}}})],A);var O=A,$=O,E=Object(p["a"])($,l,a,!1,null,null,null);e["default"]=E.exports},a497:function(t,e,s){"use strict";s("ed69")},ed69:function(t,e,s){}}]);
//# sourceMappingURL=chunk-980b8b46.a32953ff.js.map