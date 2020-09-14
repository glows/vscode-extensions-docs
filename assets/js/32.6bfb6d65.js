(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{377:function(s,e,t){"use strict";t.r(e);var a=t(42),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"发布插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布插件"}},[s._v("#")]),s._v(" 发布插件")]),s._v(" "),t("h2",{attrs:{id:"vsce-发布工具参阅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vsce-发布工具参阅"}},[s._v("#")]),s._v(" vsce —— 发布工具参阅")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/Microsoft/vsce",target:"_blank",rel:"noopener noreferrer"}},[s._v("vsce"),t("OutboundLink")],1),s._v("是一个用于将插件发布到"),t("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery",target:"_blank",rel:"noopener noreferrer"}},[s._v("市场"),t("OutboundLink")],1),s._v("上的命令行工具。")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("请确认本机已经安装了"),t("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),t("OutboundLink")],1),s._v("，然后运行：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g vsce\n")])])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("然后你就可以在命令行里直接使用"),t("code",[s._v("vsce")]),s._v("了。下面是一个快速发布的示例（在你登录和打包好插件之后）:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ vsce publish\nPublishing uuid@0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSuccessfully published uuid@0.0.1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])]),t("p",[s._v("更多可用的命令参数，请使用"),t("code",[s._v("vsce --help")])]),s._v(" "),t("h2",{attrs:{id:"发布教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布教程"}},[s._v("#")]),s._v(" 发布教程")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("!> "),t("strong",[s._v("注意：")]),s._v(" 出于安全考虑，"),t("code",[s._v("vsce")]),s._v("不会发布包含用户提供SVG图片的插件。")]),s._v(" "),t("p",[s._v("发布工具会检查以下内容：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("pacakge.json")]),s._v("文件中的icon不可以是SVG。")]),s._v(" "),t("li",[t("code",[s._v("pacakge.json")]),s._v("中的标记不可以是SVG，除非来自于"),t("RouterLink",{attrs:{to:"/extensibility-reference/extension-manifest.html#使用认证过的标志"}},[s._v("可靠的图标来源")])],1),s._v(" "),t("li",[t("code",[s._v("README.md")]),s._v("和"),t("code",[s._v("CHANGELOG.md")]),s._v("中的图片链接需要使用"),t("code",[s._v("https")]),s._v("协议")]),s._v(" "),t("li",[t("code",[s._v("README.md")]),s._v("和"),t("code",[s._v("CHANGELOG.md")]),s._v("中的图片不可以是SVG，除非来自"),t("RouterLink",{attrs:{to:"/extensibility-reference/extension-manifest.html#使用认证过的标志"}},[s._v("可靠的图标来源")])],1)]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("VS Code插件市场的服务是"),t("a",{attrs:{href:"https://visualstudio.microsoft.com/team-services",target:"_blank",rel:"noopener noreferrer"}},[s._v("Visual Studio Team Services"),t("OutboundLink")],1),s._v("提供的，因此验证、代理、管理插件都是由这个服务提供的。")]),s._v(" "),t("p",[t("code",[s._v("vsce")]),s._v("只能用"),t("a",{attrs:{href:"https://docs.microsoft.com/vsts/integrate/get-started/authentication/pats",target:"_blank",rel:"noopener noreferrer"}},[s._v("Personal Access Tokens"),t("OutboundLink")],1),s._v("发布插件，所以至少要创建一个Token以便发布插件。")]),s._v(" "),t("h4",{attrs:{id:"获取personal-access-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取personal-access-token"}},[s._v("#")]),s._v(" 获取Personal Access Token")]),s._v(" "),t("p",[s._v("首先，请先确保你有一个"),t("a",{attrs:{href:"https://docs.microsoft.com/vsts/accounts/create-account-msa-or-work-student",target:"_blank",rel:"noopener noreferrer"}},[s._v("Visual Studio Team Services"),t("OutboundLink")],1),s._v("账户。")]),s._v(" "),t("p",[s._v("下面的例子里，我们假设账户名为"),t("code",[s._v("monacotools")]),s._v("，从你的账户主页（例如：https://monacotools.visualstudio.com ）进入**安全（Security）**页：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/publish-extension/publishers1.png",alt:"publishers1"}})]),s._v(" "),t("p",[s._v("点击**添加（Add）**创建一个新的Personal Access Token：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/publish-extension/publishers2.png",alt:"publishers2"}})]),s._v(" "),t("p",[s._v("给Personal Access Token添加描述，过期时间等等，给它设置"),t("strong",[s._v("最高权限")]),s._v("：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensions/images/publish-extension/publishers3.png",alt:"publishers3"}})]),s._v(" "),t("p",[s._v("然后会显示你刚创建好的Personal Access Token，复制好，待会我们还要用来发布插件呢。")]),s._v(" "),t("h4",{attrs:{id:"创建一个发行方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个发行方"}},[s._v("#")]),s._v(" 创建一个发行方")]),s._v(" "),t("p",[t("strong",[s._v("发行方")]),s._v("是VS Code市场有权发布插件的唯一标识，每个插件的"),t("RouterLink",{attrs:{to:"/extensibility-reference/extension-manifest.html"}},[s._v("package.json")]),s._v("文件都包含着"),t("code",[s._v("publisher")]),s._v("字段。")],1),s._v(" "),t("p",[s._v("现在我们已经有了"),t("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96Personal-Access-Token"}},[s._v("Personal Access Token")]),s._v("，我们马上可以用"),t("code",[s._v("vsce")]),s._v("创建一个发行方：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("vsce create-publisher "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("publisher name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[t("code",[s._v("vsce")]),s._v("会记住这个Personal Access Token，日后再用这个发行方的时候会自动带上。")]),s._v(" "),t("p",[s._v("?> 注意：另外，你也可以在市场的发行方"),t("a",{attrs:{href:"https://marketplace.visualstudio.com/manage",target:"_blank",rel:"noopener noreferrer"}},[s._v("管理页"),t("OutboundLink")],1),s._v("中创建发行方，然后用这个账号登录"),t("code",[s._v("vsce")]),s._v("。")]),s._v(" "),t("h4",{attrs:{id:"发行方登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发行方登录"}},[s._v("#")]),s._v(" 发行方登录")]),s._v(" "),t("p",[s._v("如果你已经有发行方账号了：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("vsce login "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("publisher name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("和"),t("code",[s._v("create-publisher")]),s._v("命令类似地，"),t("code",[s._v("vsce")]),s._v("会要求输入你的Personal Access Token。")]),s._v(" "),t("p",[s._v("你也可以用命令参数"),t("code",[s._v("-p <token>")]),s._v("直接登录发行方然后立即发布插件：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("vsce publish -p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("token"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("h4",{attrs:{id:"增量更新插件版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增量更新插件版本"}},[s._v("#")]),s._v(" 增量更新插件版本")]),s._v(" "),t("p",[s._v("用SemVer语义标识符："),t("code",[s._v("major")]),s._v("，"),t("code",[s._v("minor")]),s._v("，"),t("code",[s._v("patch")]),s._v("增量更新插件版本号。")]),s._v(" "),t("p",[s._v("例如，你想把插件从1.0.0更新到1.1.0，那么加上"),t("code",[s._v("minor")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("vsce publish minor\n")])])]),t("p",[s._v("插件"),t("code",[s._v("package.json")]),s._v("的version会先更新，然后才发布插件。")]),s._v(" "),t("p",[s._v("你也可以通过命令行指定版本号：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("vsce publish "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v(".1\n")])])]),t("h4",{attrs:{id:"下架插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下架插件"}},[s._v("#")]),s._v(" 下架插件")]),s._v(" "),t("p",[s._v("通过指定插件id"),t("code",[s._v("publisher.extension")]),s._v("下架插件：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vsce unpublish (publisher name).(extension name)\n")])])]),t("p",[s._v("!> **注意：**当你下架插件的时候，市场会移除所有插件的历史统计数据，请在下架前再三考虑，最好还是更新插件吧。")]),s._v(" "),t("h4",{attrs:{id:"插件打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件打包"}},[s._v("#")]),s._v(" 插件打包")]),s._v(" "),t("p",[s._v("你也可能只是想打包一下插件，而不是发布到商店里。用下列命令将插件打包到"),t("code",[s._v(".vsix")]),s._v("文件中：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vsce package\n")])])]),t("p",[s._v("这个命令会在当前目录生成一个"),t("code",[s._v(".vsix")]),s._v("文件，直接从"),t("code",[s._v(".vsix")]),s._v("安装插件是允许的，查看"),t("a",{attrs:{href:"https://github.com/Microsoft/vscode-docs/blob/master/docs/editor/extension-gallery.md#install-from-a-vsix",target:"_blank",rel:"noopener noreferrer"}},[s._v("从VSIX安装插件"),t("OutboundLink")],1),s._v("了解更多内容。")]),s._v(" "),t("h4",{attrs:{id:"vs-code版本兼容性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code版本兼容性"}},[s._v("#")]),s._v(" VS Code版本兼容性")]),s._v(" "),t("p",[s._v("当你制作插件的时候，你需要描述插件对VS Code的版本兼容性——修改"),t("code",[s._v("package.json")]),s._v("中的"),t("code",[s._v("engines.vscode")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"engines"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vscode"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.8.0"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("code",[s._v("1.8.0")]),s._v("标识你的插件只与"),t("code",[s._v("1.8.0")]),s._v("的VS Code兼容，"),t("code",[s._v("^1.8.0")]),s._v("则表示你的插件向上兼容，包括"),t("code",[s._v("1.8.1, 1.9.0")]),s._v("等等。")]),s._v(" "),t("p",[s._v("用"),t("code",[s._v("engines.vscode")]),s._v("可以保证插件的安装环境包含了插件依赖的API。这个机制在稳定版和Insider版本都适用。")]),s._v(" "),t("p",[s._v("例如，最新的稳定版VS Code版本是"),t("code",[s._v("1.8.0")]),s._v("，而新的API在"),t("code",[s._v("1.9.0")]),s._v("开发版中释出，所以用"),t("code",[s._v("1.9.0-insider")]),s._v("标识插件在Insider版本中都可用。\n如果你想发布一个使用这些API的插件，则设置版本依赖为"),t("code",[s._v("^1.9.0")]),s._v("，你的插件则只能安装在"),t("code",[s._v(">=1.9.0")]),s._v("的VS Code上，也就意味着所有当前的Insider版本都可以用得上，而稳定版只有在更新到"),t("code",[s._v("1.9.0")]),s._v("才能使用。")]),s._v(" "),t("h2",{attrs:{id:"进阶用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进阶用法"}},[s._v("#")]),s._v(" 进阶用法")]),s._v(" "),t("hr"),s._v(" "),t("h4",{attrs:{id:"符合市场的插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#符合市场的插件"}},[s._v("#")]),s._v(" 符合市场的插件")]),s._v(" "),t("p",[s._v("你可以自定义插件在市场中的外观，查看示例"),t("code",[s._v("GO 插件")]),s._v("。")]),s._v(" "),t("p",[s._v("下面是一些让你的插件在市场看起来更酷的小提示：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("插件根目录下面的"),t("code",[s._v("README.md")]),s._v("文件可以用来填充插件市场的页面内容。"),t("code",[s._v("vsce")]),s._v("会将README中的链接通过下面两种方式修改掉：")]),s._v(" "),t("ul",[t("li",[s._v("如果你的"),t("code",[s._v("package.json")]),s._v("的"),t("code",[s._v("repository")]),s._v("字段是一个Github仓库，"),t("code",[s._v("vsce")]),s._v("会自动检测，然后相应地调整链接。")]),s._v(" "),t("li",[s._v("运行"),t("code",[s._v("vsce package")]),s._v("时，加上"),t("code",[s._v("--baseContentUrl")]),s._v("和"),t("code",[s._v("--baseImagesUrl")]),s._v("标识重载上述行为。")])])]),s._v(" "),t("li",[t("p",[s._v("插件根目录下的"),t("code",[s._v("LICENSE")]),s._v("会成为插件的license。")])]),s._v(" "),t("li",[t("p",[s._v("同样的"),t("code",[s._v("CHANGELOG.md")]),s._v("文件会成为插件的发布日志。")])]),s._v(" "),t("li",[t("p",[s._v("通过设置"),t("code",[s._v("package.json")]),s._v("的"),t("code",[s._v("galleryBanner.color")]),s._v("hex值，修改banner的背景色。")])]),s._v(" "),t("li",[t("p",[s._v("通过给"),t("code",[s._v("package.json")]),s._v("中的"),t("code",[s._v("icon")]),s._v("设置一个相对路径，可以将一个"),t("code",[s._v("128px")]),s._v("的PNG图标放进你的插件中。")])]),s._v(" "),t("li",[t("p",[s._v("参见"),t("a",{attrs:{href:"https://github.com/Microsoft/vscode-docs/blob/master/docs/extensionAPI/extension-manifest.md#marketplace-presentation-tips",target:"_blank",rel:"noopener noreferrer"}},[s._v("插件市场展现小提示"),t("OutboundLink")],1)])])]),s._v(" "),t("h4",{attrs:{id:"vscodeignore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscodeignore"}},[s._v("#")]),s._v(" "),t("code",[s._v(".vscodeignore")])]),s._v(" "),t("p",[s._v("创建一个"),t("code",[s._v(".vscodeignore")]),s._v("文件可以排除插件目录中的内容。这个文件支持"),t("a",{attrs:{href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"}},[s._v("glob"),t("OutboundLink")],1),s._v("模式，每个表达式一行。")]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("**/*.ts\n**/tsconfig.json\n!file.ts\n")])])]),t("p",[s._v("你应该忽略哪些不必在运行时用到的文件。例如：你的插件是用Typescript写的，那么你就应该忽略所有的"),t("code",[s._v("**/*.ts")]),s._v("文件。")]),s._v(" "),t("p",[s._v("?> **注意：**在"),t("code",[s._v("devDependencies")]),s._v("列出的开发依赖会被自动忽略，你不必将他们加入到"),t("code",[s._v(".vscodeignore")]),s._v("中。")]),s._v(" "),t("h5",{attrs:{id:"预发布步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预发布步骤"}},[s._v("#")]),s._v(" 预发布步骤")]),s._v(" "),t("p",[s._v("你是可以在清单文件中添加预发布步骤的，下面的命令会在插件每次打包时执行：")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uuid"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"publisher"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"joaomoreno"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"engines"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vscode"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.10.x"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vscode:prepublish"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsc"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("上面的示例会在每次插件打包时调用Typescript编译器。")]),s._v(" "),t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[s._v("#")]),s._v(" FAQ")]),s._v(" "),t("h5",{attrs:{id:"问-当我发布插件时遇到了403-forbidden-或-401-unauthorized-错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问-当我发布插件时遇到了403-forbidden-或-401-unauthorized-错误"}},[s._v("#")]),s._v(" 问：当我发布插件时遇到了403 Forbidden（或 401 Unauthorized）错误？")]),s._v(" "),t("p",[s._v("答：很有可能是你创建PAT (Personal Access Token) 时没有选择"),t("code",[s._v("all accessible accounts")]),s._v("。你还需要将授权范围设置为"),t("code",[s._v("All scopes")]),s._v("，这样发布工具才能工作。")]),s._v(" "),t("h5",{attrs:{id:"问-我没办法用vsce工具下架插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问-我没办法用vsce工具下架插件"}},[s._v("#")]),s._v(" 问：我没办法用"),t("code",[s._v("vsce")]),s._v("工具下架插件？")]),s._v(" "),t("p",[s._v("答：你可能改变了插件ID或者发行方名称。不过你还可以在"),t("a",{attrs:{href:"https://marketplace.visualstudio.com/manage",target:"_blank",rel:"noopener noreferrer"}},[s._v("管理页面"),t("OutboundLink")],1),s._v("发布或者下架插件。")]),s._v(" "),t("h5",{attrs:{id:"问-为什么vsce不保留文件属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问-为什么vsce不保留文件属性"}},[s._v("#")]),s._v(" 问：为什么vsce不保留文件属性？")]),s._v(" "),t("p",[s._v("答：请注意，当你在Windows平台构建和发布插件的时候，所有插件包内的文件会缺失POSIX文件属性，或称之为执行位（executable bit）的东西。一些基于这些属性的"),t("code",[s._v("node_modules")]),s._v("依赖则会调整工作方式。从Linux和macOS平台构建则会如预期执行。")]),s._v(" "),t("h2",{attrs:{id:"下一步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[s._v("#")]),s._v(" 下一步")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery",target:"_blank",rel:"noopener noreferrer"}},[s._v("插件市场"),t("OutboundLink")],1),s._v(" - 学习更多VS Code公共插件市场。")]),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/extension-authoring/testing-extensions.html"}},[s._v("测试插件")]),s._v(" - 添加插件测试，提高插件质量。")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);