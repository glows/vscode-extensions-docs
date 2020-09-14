(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{394:function(t,a,s){"use strict";s.r(a);var n=s(42),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"markdown插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown插件"}},[t._v("#")]),t._v(" Markdown插件")]),t._v(" "),s("p",[t._v("Markdown插件可以帮你扩展和加强VS Code内置的Markdown预览，包括改变预览的样式、添加新的Markdown语法。")]),t._v(" "),s("h2",{attrs:{id:"用css改变markdown预览样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用css改变markdown预览样式"}},[t._v("#")]),t._v(" 用CSS改变Markdown预览样式")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("配置CSS可以改变markdown预览的布局和样式，在你的插件"),s("code",[t._v("pacakge.json")]),t._v("中注册"),s("code",[t._v("markdown.previewStyles")]),s("a",{attrs:{href:"/references/contribution-points"}},[t._v("发布内容配置")]),t._v("即可：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"markdown.previewStyles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./style.css"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("markdown.previewStyles")]),t._v("类型是插件根目录下的文件列表。")]),t._v(" "),s("p",[t._v("配置的样式会在用户的"),s("code",[t._v('"markdown.styles"')]),t._v("之前，内置Markdown预览样式之后加载。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown Preview GitHub Styling"),s("OutboundLink")],1),t._v("是一个如何将Markdown预览变成像GitHub渲染风格的好例子，在GitHub上去查看"),s("a",{attrs:{href:"https://github.com/mjbvz/vscode-github-markdown-preview-style",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1),t._v("吧")]),t._v(" "),s("h2",{attrs:{id:"使用markdown-it插件添加新语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用markdown-it插件添加新语法"}},[t._v("#")]),t._v(" 使用markdown-it插件添加新语法")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("VS Code Markdown预览支持"),s("a",{attrs:{href:"https://spec.commonmark.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonMark规格"),s("OutboundLink")],1),t._v("，插件可以通过一个"),s("a",{attrs:{href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it插件"),s("OutboundLink")],1),t._v("添加新的Markdown语法。")]),t._v(" "),s("p",[t._v("首先，在你的插件"),s("code",[t._v("package.json")]),t._v("中配置"),s("code",[t._v('"markdown.markdownItPlugins"')]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"markdown.markdownItPlugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后在插件的主"),s("code",[t._v("activation")]),t._v("函数中，返回一个包含名"),s("code",[t._v("extendMarkdownIt")]),t._v("函数的对象。这个函数接收一个markdown-it实例，然后必须返回出新的markdown-it实例：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" vscode "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vscode'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("activate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExtensionContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendMarkdownIt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("md"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-emoji'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("若想配置多个markdown-it插件，只需多次链式调用"),s("code",[t._v("use")]),t._v("声明即可。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-emoji'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-hashtag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Markdown预览第一次显示时，配置了markdown-it的插件会变成懒加载激活。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-emoji"),s("OutboundLink")],1),t._v("插件展示了如何使用markdown-it添加emoji支持，你可以在GitHub上查看Emoji插件的"),s("a",{attrs:{href:"https://github.com/mjbvz/vscode-markdown-emoji",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("你可能还想了解：")]),t._v(" "),s("ul",[s("li",[t._v("markdown-it插件开发者"),s("a",{attrs:{href:"https://github.com/markdown-it/markdown-it/blob/master/docs/development.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("指南"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.npmjs.com/browse/keyword/markdown-it-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("现成的markdown-it插件"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"用脚本添加进阶功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用脚本添加进阶功能"}},[t._v("#")]),t._v(" 用脚本添加进阶功能")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("对于进阶特性，在插件中配置可运行的脚本：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"markdown.previewScripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./main.js"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("配置的脚本是异步加载的，每次内容变动还会重载。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown Preview Mermaid Support"),s("OutboundLink")],1),t._v("插件展示了如何使用脚本添加"),s("a",{attrs:{href:"https://knsv.github.io/mermaid/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("鱼骨图"),s("OutboundLink")],1),t._v("和流程图预览。在"),s("a",{attrs:{href:"https://github.com/mjbvz/vscode-markdown-mermaid",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("查看插件源码。")])])}),[],!1,null,null,null);a.default=r.exports}}]);