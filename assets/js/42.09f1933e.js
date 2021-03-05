(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{417:function(t,a,r){"use strict";r.r(a);var e=r(40),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#docker"}},[t._v("Docker")])]),r("li",[r("a",{attrs:{href:"#build-from-sources"}},[t._v("Build from sources")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),r("p",[t._v("The official images:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/balerter",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/balerter"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/orgs/balerter/packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/orgs/balerter/packages"),r("OutboundLink")],1)])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("docker run "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /path/to/config.yml:/opt/config.yml "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    balerter/balerter -config"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/config.yml\n")])])]),r("p",[t._v("or")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("docker run "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /path/to/config.yml:/opt/config.yml "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    ghcr.io/balerter/balerter -config"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/config.yml\n")])])]),r("h2",{attrs:{id:"build-from-sources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-from-sources"}},[t._v("#")]),t._v(" Build from sources")]),t._v(" "),r("p",[t._v("Clone the repo and build the Balerter")]),t._v(" "),r("blockquote",[r("p",[t._v("Require Go 1.15 or later")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/balerter/balerter.git\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" balerter\ngo build ./cmd/balerter\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);