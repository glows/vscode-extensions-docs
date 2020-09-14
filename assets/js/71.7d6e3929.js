(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{415:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"文档选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档选择器"}},[t._v("#")]),t._v(" 文档选择器")]),t._v(" "),a("p",[t._v("插件的特性可以通过语言、类型、位置等文档选择器类型加以筛选，本节将深入文档选择器、文档协议等插件创作者应该了解的内容。")]),t._v(" "),a("h2",{attrs:{id:"不在磁盘上的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不在磁盘上的文件"}},[t._v("#")]),t._v(" 不在磁盘上的文件")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("并不是所有文件都是储存在磁盘上的，比如一份刚刚创建的文件。除非特别指明，文档选择器通常会应用于"),a("strong",[t._v("所有")]),t._v("文档类型。使用"),a("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#DocumentFilter",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocumentFilter"),a("OutboundLink")],1),t._v("的"),a("code",[t._v("scheme")]),t._v("属性将协议范围缩小，比如说，"),a("code",[t._v("{ scheme: 'file', language: 'typescript' }")]),t._v("是特定的用于储存在磁盘上的TypeScript文件。")]),t._v(" "),a("h2",{attrs:{id:"文档选择器-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档选择器-2"}},[t._v("#")]),t._v(" 文档选择器")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("VS Code插件API结合了特定的语言特性, 通过文档选择器的"),a("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#DocumentSelector",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocumentSelector"),a("OutboundLink")],1),t._v("类型, 可以支持例如智能感知(IntelliSense)等特性. 这是实现特定语言所支持特性的最为简单的机制.")]),t._v(" "),a("p",[t._v("下面的片段注册了一个Typescript文件的"),a("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#HoverProvider",target:"_blank",rel:"noopener noreferrer"}},[t._v("HoverProvider"),a("OutboundLink")],1),t._v(", 此时的文档选择器是"),a("code",[t._v("typescript")]),t._v("语言标识符.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("languages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHoverProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'typescript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideHover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'For *all* TypeScript documents.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("文档选择器可以不只是一个语言标识符, 还可以是复杂选择器——比如基于"),a("code",[t._v("协议(scheme)")]),t._v("和文件路径的"),a("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#DocumentFilter",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocumentFilter"),a("OutboundLink")],1),t._v(", 文件路径支持"),a("code",[t._v("pattern")]),t._v("参数和glob模式:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("languages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHoverProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'**/test/**'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideHover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'For documents inside `test`-folders only'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("下面这个片段, 使用合并后的"),a("code",[t._v("协议(scheme)")]),t._v("过滤器和语言标识符作为参数. "),a("code",[t._v("未命名的(untitled)")]),t._v("协议正是为暂未保存到本地磁盘的文件准备的.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("languages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHoverProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scheme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'untitled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'typescript'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideHover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'For new, unsaved TypeScript documents only'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"文档协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档协议"}},[t._v("#")]),t._v(" 文档协议")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("文档协议")]),t._v("经常会被忽视, 但是它提供了很重要的信息. 插件开发者经常假设自己正在处理的文档也是存在磁盘上的. 用一个简单的"),a("code",[t._v("typescript")]),t._v("选择器做个例子, 假设"),a("strong",[t._v("Typescript文件在磁盘上")]),t._v(", 不过大部分开发场景都过于宽松了，使用了诸如"),a("code",[t._v("{ scheme: 'file', language: 'typescript' }")]),t._v("显式的选择器。")]),t._v(" "),a("p",[t._v("当某项功能依赖于从磁盘上读/写文件时, 这个问题显得尤为重要. 请看下面的代码:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 👎 too lax")]),t._v("\nvscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("languages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHoverProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'typescript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideHover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("statSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fsPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ⚠️ what about 'untitled:/Untitled1.ts' or others?")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Size in bytes is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面的例子中, 悬浮提示器想展示文件占用的磁盘大小, 但是它不会检查文档是不是真的存储在磁盘上. 比如, 一个新创建但是未保存的文件. 正确的做法是告诉VS Code只在文件存储在磁盘上时才开始工作.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 👍 only works with files on disk")]),t._v("\nvscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("languages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHoverProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scheme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'typescript'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideHover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("statSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fsPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Size in bytes is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("文档通常都储存在文件系统中，但也有例外：未保存的新文件、Git使用的缓存文件、FTP上的远程文件等等。如果你的插件特性依赖于磁盘读取，那么你就要用文档选择器时应带上file协议。")]),t._v(" "),a("h2",{attrs:{id:"下一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[t._v("#")]),t._v(" 下一步")]),t._v(" "),a("p",[t._v("阅读下列文章来了解更多有关于VS Code可拓展模型的知识.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/references/extension-manifest"}},[t._v("插件清单")]),t._v(" - VS Code的package.json(插件清单)文件配置相关")]),t._v(" "),a("li",[a("a",{attrs:{href:"/references/contribution-points"}},[t._v("发布内容配置")]),t._v(" - VS Code发布内容相关")])])])}),[],!1,null,null,null);s.default=e.exports}}]);