(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{319:function(t,e,r){},354:function(t,e,r){"use strict";var n=r(319);r.n(n).a},367:function(t,e,r){"use strict";r.r(e);var n=r(365),a=r(363),i=r(362),o=r(364),s={name:"CarbonAds",watch:{$route:function(t,e){t.path!==e.path&&this.$el.querySelector("#carbonads")&&(this.$el.innerHTML="",this.load())}},mounted:function(){this.load()},methods:{load:function(){var t=document.createElement("script");t.id="_carbonads_js",t.src="//cdn.carbonads.com/carbon.js?serve=CE7I62JL&placement=novalaravelcom",this.$el.appendChild(t)}},render:function(t){return t("div",{class:"carbon-ads"})}},u=(r(354),r(40)),c=(Object(u.a)(s,void 0,void 0,!1,null,null,null).exports,r(27),r(94),r(165),r(96),r(166),r(63),r(64),r(303),r(93),r(304),r(95),/#.*$/),l=/\.(md|html)$/,h=/\/$/,d=/^[a-z]+:/i;function p(t){return decodeURI(t).replace(c,"").replace(l,"")}function f(t){return d.test(t)}function b(t){if(f(t))return t;var e=t.match(c),r=e?e[0]:"",n=p(t);return h.test(n)?t:n+".html"+r}function g(t,e,r){if(f(e))return{type:"external",path:e};r&&(e=function(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var a=e.split("/");r&&a[a.length-1]||a.pop();for(var i=t.replace(/^\//,"").split("/"),o=0;o<i.length;o++){var s=i[o];".."===s?a.pop():"."!==s&&a.push(s)}""!==a[0]&&a.unshift("");return a.join("/")}(e,r));for(var n=p(e),a=0;a<t.length;a++)if(p(t[a].regularPath)===n)return Object.assign({},t[a],{type:"page",path:b(t[a].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function m(t,e,r,n){var a=r.pages,i=r.themeConfig,o=n&&i.locales&&i.locales[n]||i;if("auto"===(t.frontmatter.sidebar||o.sidebar||i.sidebar))return function(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var s=o.sidebar||i.sidebar;if(s){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,s),c=u.base,l=u.config;return l?l.map((function(t){return function t(e,r,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return g(r,e,n);if(Array.isArray(e))return Object.assign(g(r,e[0],n),{title:e[1]});var i=e.children||[];return 0===i.length&&e.path?Object.assign(g(r,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:i.map((function(e){return t(e,r,n,a+1)})),collapsable:!1!==e.collapsable}}(t,a,c)})):[]}return[]}var v={name:"Layout",components:{Home:n.a,Page:i.a,Sidebar:o.a,Navbar:a.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return m(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,r=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(r)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},S=Object(u.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?r("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),r("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),r("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?r("Home"):r("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=S.exports}}]);