(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{187:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return l}));r(40),r(84);var c=r(4);function n(e){return o.apply(this,arguments)}function o(){return(o=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,c,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.app,c=t.store,n=t.error,!t.isClient){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,r.$axios.$get("".concat("http://localhost:3000","/api/messages"));case 6:o=e.sent,c.commit("INIT",o),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),c.commit("INIT",[]),n({statusCode:500,message:"Oops, try again"});case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}var l=function(html){return html.replace(/<[^>]*>/g,"")}},188:function(e,t,r){"use strict";r.r(t);r(39),r(19),r(20),r(11),r(30);var c=r(16),n=r(187),o=r(29);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={props:{message:{type:Object}},computed:{shortBody:function(){return"".concat(Object(n.b)(this.message.body).substr(0,50),"...")}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({goTo:function(e){this.$router.push({path:"/".concat(e)})}},Object(o.b)(["removeMessage"]))},f=r(21),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",{staticClass:"relative group hover:bg-gray-200 hover:shadow cursor-pointer flex flex-col md:flex-row border-b"},[r("td",{staticClass:"md:py-2 pr-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.message.isSelected,expression:"message.isSelected"}],staticClass:"form-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.message.isSelected)?e._i(e.message.isSelected,null)>-1:e.message.isSelected},on:{click:function(e){e.stopPropagation()},change:function(t){var r=e.message.isSelected,c=t.target,n=!!c.checked;if(Array.isArray(r)){var o=e._i(r,null);c.checked?o<0&&e.$set(e.message,"isSelected",r.concat([null])):o>-1&&e.$set(e.message,"isSelected",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.message,"isSelected",n)}}})]),e._v(" "),r("td",{staticClass:"md:py-2 pr-6",on:{click:function(t){return t.stopPropagation(),e.goTo(e.message.id)}}},[e._v("\n    "+e._s(e.message.sender)+"\n  ")]),e._v(" "),e.message.tags.length?r("td",{staticClass:"md:py-2 pr-1 text-black whitespace-no-wrap",on:{click:function(t){return t.stopPropagation(),e.goTo(e.message.id)}}},e._l(e.message.tags,(function(t){return e.message.tags.length?r("span",{key:t,staticClass:"mr-1 p-1 bg-gray-400 rounded text-xs capitalize",class:t},[e._v("\n      "+e._s(t)+"\n    ")]):e._e()})),0):e._e(),e._v(" "),r("td",{staticClass:"md:py-2 pr-4 text-black font-medium xl:flex-no-grow",on:{click:function(t){return t.stopPropagation(),e.goTo(e.message.id)}}},[e._v("\n    "+e._s(e.message.subject)+"\n  ")]),e._v(" "),r("td",{staticClass:"md:py-2 hidden xl:block pr-2 flex-grow",on:{click:function(t){return t.stopPropagation(),e.goTo(e.message.id)}}},[e._v("\n    "+e._s(e.shortBody)+"\n  ")]),e._v(" "),r("td",{staticClass:"md:py-2 pr-2 text-right group-hover:invisible",on:{click:function(t){return t.stopPropagation(),e.goTo(e.message.id)}}},[e._v("\n    "+e._s(new Date(e.message.date).toLocaleDateString())+"\n  ")]),e._v(" "),r("td",{staticClass:"invisible group-hover:visible absolute right-0 align-middle pr-2 py-2"},[r("a",{staticClass:"trash",attrs:{href:"#",title:"Delete"},on:{click:function(e){e.stopPropagation()}}},[r("ArchiveIcon",{staticClass:"w-5 h-5"})],1),e._v(" "),r("a",{staticClass:"trash",attrs:{href:"#",title:"Delete"},on:{click:function(t){return t.stopPropagation(),e.removeMessage(e.message)}}},[r("DeleteIcon",{staticClass:"w-5 h-5"})],1),e._v(" "),r("a",{staticClass:"mark",attrs:{href:"#",title:"Mark as unread"},on:{click:function(e){e.stopPropagation()}}},[r("MailIcon",{staticClass:"w-5 h-5"})],1),e._v(" "),r("a",{staticClass:"snooze",attrs:{href:"#",title:"Snooze"},on:{click:function(e){e.stopPropagation()}}},[r("ClockIcon",{staticClass:"w-5 h-5"})],1)])])}),[],!1,null,null,null);t.default=component.exports},189:function(e,t,r){"use strict";r.r(t);r(39),r(19),r(20),r(11),r(30);var c=r(16),n=r(187),o=r(29);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{Message:r(188).default},fetch:n.a,computed:d({messages:function(){return this.$store.getters.getMessagesByTag(this.$route.params.tag)},allSelected:{get:function(){return this.$store.getters.allSelected},set:function(){this.$store.dispatch("toggleAll",this.messages)}}},Object(o.c)(["selectedMessages"])),methods:d({},Object(o.b)(["toggleAll","removeMessages"]))},h=r(21),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"messages"},[r("table",{staticClass:"msgs text-sm text-gray-600 w-full"},[e.messages.length?r("thead",[r("tr",{staticClass:"flex border-b text-2xl"},[r("th",{staticClass:"pr-3 text-left font-normal"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.allSelected,expression:"allSelected"}],staticClass:"form-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allSelected)?e._i(e.allSelected,null)>-1:e.allSelected},on:{change:function(t){var r=e.allSelected,c=t.target,n=!!c.checked;if(Array.isArray(r)){var o=e._i(r,null);c.checked?o<0&&(e.allSelected=r.concat([null])):o>-1&&(e.allSelected=r.slice(0,o).concat(r.slice(o+1)))}else e.allSelected=n}}})]),e._v(" "),r("th",{staticClass:"msg__col flex items-center text-left font-normal pr-2 flex-grow"},[r("div",{class:[e.selectedMessages.length?"hidden":"flex "]},[r("a",{staticClass:"mr-1",attrs:{href:"#",title:"Refresh"}},[r("RefreshIcon",{staticClass:"w-5 h-5"})],1)]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedMessages.length,expression:"selectedMessages.length"}],staticClass:"flex items-center space-x-2"},[r("a",{attrs:{href:"#",title:"Archive selected"}},[r("ArchiveIcon",{staticClass:"w-5 h-5"})],1),e._v(" "),r("a",{attrs:{href:"#",title:"Report spam"}},[r("AlertIcon",{staticClass:"w-5 h-5"})],1),e._v(" "),r("a",{attrs:{href:"#",title:"Delete"},on:{click:e.removeMessages}},[r("DeleteIcon",{staticClass:"w-5 h-5"})],1),e._v(" "),r("a",{attrs:{href:"#",title:"Mark as read"}},[r("MailIcon",{staticClass:"w-5 h-5"})],1),e._v(" "),r("a",{attrs:{href:"#",title:"Snooze"}},[r("ClockIcon",{staticClass:"w-5 h-5"})],1)]),e._v(" "),r("a",{staticClass:"mr-1",attrs:{href:"#",title:"More"}},[r("MoreVerticalIcon",{staticClass:"w-5 h-5"})],1)]),e._v(" "),r("th",{staticClass:"msg__col text-left font-normal"},[r("a",{attrs:{href:"#",title:"Settings"}},[r("SettingsIcon",{staticClass:"w-5 h-5"})],1)])])]):e._e(),e._v(" "),r("tbody",e._l(e.messages,(function(e){return r("Message",{key:e.id,attrs:{message:e}})})),1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Message:r(188).default})}}]);