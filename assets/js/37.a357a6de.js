(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{382:function(e,t,v){"use strict";v.r(t);var a=v(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"插件功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件功能"}},[e._v("#")]),e._v(" 插件功能")]),e._v(" "),v("p",[e._v("VS Code 提供了非常多的方法，供插件扩展VS Code本身的能力。但是有的时候也很难找到对的"),v("RouterLink",{attrs:{to:"/references/contribution-points.html"}},[e._v("发布内容配置")]),e._v("和"),v("RouterLink",{attrs:{to:"/references/vscode-api.html"}},[e._v("VS Code API")]),e._v("。这章内容将插件的功能分成了几个部分，每个部分都将告诉你：")],1),e._v(" "),v("ul",[v("li",[e._v("插件可以使用的功能")]),e._v(" "),v("li",[e._v("这些功能点的细节索引")]),e._v(" "),v("li",[e._v("一些插件灵感")])]),e._v(" "),v("p",[e._v("不过，我们也会告诉你一些"),v("a",{attrs:{href:"#%E9%99%90%E5%88%B6"}},[e._v("限制")]),e._v("，为了避免插件影响到VS Code的性能和稳定性。比如：插件不可以修改VS Code UI底层的DOM。")]),e._v(" "),v("h2",{attrs:{id:"常用功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用功能"}},[e._v("#")]),e._v(" 常用功能")]),e._v(" "),v("hr"),e._v(" "),v("p",[v("a",{attrs:{href:"/extension-capabilities/common-capabilities"}},[e._v("常用功能")]),e._v("是你在任何插件中都可能用到的核心功能。")]),e._v(" "),v("p",[e._v("这些功能包括：")]),e._v(" "),v("ul",[v("li",[e._v("注册命令、配置、快捷键绑定、菜单等。")]),e._v(" "),v("li",[e._v("保存工作区或全局数据。")]),e._v(" "),v("li",[e._v("显示通知信息。")]),e._v(" "),v("li",[e._v("使用快速选择获得用户输入。")]),e._v(" "),v("li",[e._v("打开系统的文件选择工具，以便用户选择文件或文件夹。")]),e._v(" "),v("li",[e._v("使用进度API提示耗时较长的操作。")])]),e._v(" "),v("h2",{attrs:{id:"主题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主题"}},[e._v("#")]),e._v(" 主题")]),e._v(" "),v("hr"),e._v(" "),v("p",[v("a",{attrs:{href:"/extension-capabilities/theming"}},[e._v("主题")]),e._v("控制着VS Code的外观——编辑器中的源代码的颜色和VS Code UI颜色。如果你曾经想要把VS Code搞成绿色，想象自己在黑客帝国里写代码，或者想要追求极简性冷淡灰色风格，那么主题章节就是为你而来。")]),e._v(" "),v("h5",{attrs:{id:"插件灵感"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件灵感"}},[e._v("#")]),e._v(" 插件灵感")]),e._v(" "),v("ul",[v("li",[e._v("改变你的代码颜色")]),e._v(" "),v("li",[e._v("改变VS Code UI颜色")]),e._v(" "),v("li",[e._v("将现有的TextMate主题应用到VS Code中")]),e._v(" "),v("li",[e._v("添加自定义图标")])]),e._v(" "),v("h2",{attrs:{id:"声明式添加语言特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#声明式添加语言特性"}},[e._v("#")]),e._v(" 声明式添加语言特性")]),e._v(" "),v("hr"),e._v(" "),v("p",[v("a",{attrs:{href:"/language-extensions/README#%E5%A3%B0%E6%98%8E%E5%BC%8F%E8%AF%AD%E8%A8%80%E7%89%B9%E6%80%A7"}},[e._v("声明式语言特性")]),e._v("添加了基础的编程语言编辑支持，如括号匹配、自动缩进和语法高亮。这些功能都可以通过声明配置而不用写任何代码就可以获得，更高级的语言特性如IntelliSense或调试，请看"),v("a",{attrs:{href:"#%E7%BC%96%E7%A8%8B%E5%BC%8F%E6%B7%BB%E5%8A%A0%E8%AF%AD%E8%A8%80%E7%89%B9%E6%80%A7"}},[e._v("编程式添加语言特性")])]),e._v(" "),v("h5",{attrs:{id:"插件灵感-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件灵感-2"}},[e._v("#")]),e._v(" 插件灵感")]),e._v(" "),v("ul",[v("li",[e._v("将常用的JS代码片段打包到插件中")]),e._v(" "),v("li",[e._v("为VS Code添加新的语言支持")]),e._v(" "),v("li",[e._v("为一门语言添加或替换语法")]),e._v(" "),v("li",[e._v("通过注入的方式，扩展一门语法")]),e._v(" "),v("li",[e._v("将现有的 TextMate 语法迁移到VS Code中")])]),e._v(" "),v("h2",{attrs:{id:"编程式添加语言特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编程式添加语言特性"}},[e._v("#")]),e._v(" 编程式添加语言特性")]),e._v(" "),v("hr"),e._v(" "),v("p",[v("a",{attrs:{href:"/language-extensions/README#%E7%BC%96%E7%A8%8B%E5%BC%8F%E8%AF%AD%E8%A8%80%E7%89%B9%E6%80%A7"}},[e._v("编程式添加语言特性")]),e._v("可以为编程语言添加更为丰富的特性，如：悬停提示、转跳定义、错误诊断、IntelliSense和CodeLens。这些语言特性暴露于"),v("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#languages",target:"_blank",rel:"noopener noreferrer"}},[v("code",[e._v("vscode.languages.*")]),v("OutboundLink")],1),e._v("API。语言插件可以直接使用这些API，或是自己写一个语言服务器，通过"),v("a",{attrs:{href:"https://github.com/Microsoft/vscode-languageserver-node",target:"_blank",rel:"noopener noreferrer"}},[e._v("语言服务器库"),v("OutboundLink")],1),e._v("将它适配到VS Code。")]),e._v(" "),v("p",[e._v("虽然我们提供了一个"),v("a",{attrs:{href:"/language-extensions/programmatic-language-features"}},[e._v("语言特性")]),e._v("列表，但是并不阻碍你发挥想象，自由使用这些API。比方说，在行内显示额外信息，使用CodeLens和代码悬停是非常好的方式，而错误诊断可以高亮拼写或代码风格错误。")]),e._v(" "),v("h5",{attrs:{id:"插件灵感-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件灵感-3"}},[e._v("#")]),e._v(" 插件灵感")]),e._v(" "),v("ul",[v("li",[e._v("鼠标悬停于API上时, 出现用法示例")]),e._v(" "),v("li",[e._v("使用诊断，报告代码风格错误")]),e._v(" "),v("li",[e._v("注册新的HTML代码格式化")]),e._v(" "),v("li",[e._v("提供丰富的IntelliSense中间件")]),e._v(" "),v("li",[e._v("为一门语言添加代码折叠、面包屑、轮廓支持")])]),e._v(" "),v("h2",{attrs:{id:"扩展工作台"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#扩展工作台"}},[e._v("#")]),e._v(" 扩展工作台")]),e._v(" "),v("hr"),e._v(" "),v("p",[v("a",{attrs:{href:"/extension-capabilities/extending-workbench"}},[e._v("扩展工作台")]),e._v("加强了 VS Code 工作台的UI，为资源管理侧边栏添加了新的右击行为，你甚至可以用 "),v("a",{attrs:{href:"/extension-guides/tree-view"}},[e._v("TreeView")]),e._v("API构建自定义的资源管理侧边栏。如果你的插件需要完全自定义用户界面，那就使用"),v("a",{attrs:{href:"/extension-guides/webview"}},[e._v("Webview API")]),e._v("和HTML，CSS，Javascript构建你自己的UI。")]),e._v(" "),v("h5",{attrs:{id:"插件灵感-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件灵感-4"}},[e._v("#")]),e._v(" 插件灵感")]),e._v(" "),v("ul",[v("li",[e._v("自定义资源管理侧边栏的菜单行为")]),e._v(" "),v("li",[e._v("在侧边栏中创建新的、交互式的TreeView")]),e._v(" "),v("li",[e._v("定义新的活动栏视图")]),e._v(" "),v("li",[e._v("在状态栏显示新的信息")]),e._v(" "),v("li",[e._v("使用"),v("code",[e._v("WebView")]),e._v(" API显示自定义内容")]),e._v(" "),v("li",[e._v("配置*源控制(git/svn等)*来源")])]),e._v(" "),v("h2",{attrs:{id:"调试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[e._v("#")]),e._v(" 调试")]),e._v(" "),v("hr"),e._v(" "),v("p",[e._v("你可以利用"),v("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/debugging",target:"_blank",rel:"noopener noreferrer"}},[e._v("调试"),v("OutboundLink")],1),e._v("来制作"),v("a",{attrs:{href:"/extension-guides/debugger-extension"}},[e._v("调试器插件")]),e._v("，这个插件需要将VS Code的调试UI连接到真实的调试器或者运行时上。")]),e._v(" "),v("h5",{attrs:{id:"插件灵感-5"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件灵感-5"}},[e._v("#")]),e._v(" 插件灵感")]),e._v(" "),v("ul",[v("li",[e._v("通过"),v("a",{attrs:{href:"https://microsoft.github.io/debug-adapter-protocol/implementors/adapters/",target:"_blank",rel:"noopener noreferrer"}},[e._v("调试适配器"),v("OutboundLink")],1),e._v("将VS Code的调试UI连接到真实的调试器或者运行时上")]),e._v(" "),v("li",[e._v("通过调试器插件添加语言支持")]),e._v(" "),v("li",[e._v("为调试配置文件添加丰富的智能提示或者悬停信息")]),e._v(" "),v("li",[e._v("为调试配置文件添加代码片段")])]),e._v(" "),v("p",[e._v("另一方面，VS Code也提供了非常多的"),v("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#debug",target:"_blank",rel:"noopener noreferrer"}},[e._v("调试器插件API"),v("OutboundLink")],1),e._v("，你可以用来实现任何VS Code调试器相关的功能，加强用户的调试体验。")]),e._v(" "),v("h5",{attrs:{id:"插件灵感-6"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件灵感-6"}},[e._v("#")]),e._v(" 插件灵感")]),e._v(" "),v("ul",[v("li",[e._v("动态生成调试器配置文件，启动调试器会话")]),e._v(" "),v("li",[e._v("跟踪调试会话的声明周期")]),e._v(" "),v("li",[e._v("编程式管理断点")])]),e._v(" "),v("h2",{attrs:{id:"限制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[e._v("#")]),e._v(" 限制")]),e._v(" "),v("hr"),e._v(" "),v("p",[e._v("最后，我还对插件也提出了一些限制。")]),e._v(" "),v("h4",{attrs:{id:"不可访问dom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不可访问dom"}},[e._v("#")]),e._v(" 不可访问DOM")]),e._v(" "),v("p",[e._v("插件没有权限访问VS Code UI的底层DOM，"),v("strong",[e._v("禁止")]),e._v("添加自定义的CSS 和 HTML片段到VS Code UI上。")]),e._v(" "),v("p",[e._v("我们在一直努力优化VS Code底层的web技术，为用户创造高可用、持续响应的编辑器，而我们也会继续调整这些技术中使用到的DOM。为了确保不会干扰到VS Code的性能和稳定性，同时不阻断其他插件的运行，所以我们的插件都跑在"),v("a",{attrs:{href:"/advanced-topics/extension-host"}},[e._v("插件主机")]),e._v("进程中，而且阻止了插件直接访问DOM的途径。")])])}),[],!1,null,null,null);t.default=r.exports}}]);