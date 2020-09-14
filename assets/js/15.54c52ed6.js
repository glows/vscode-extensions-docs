(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{361:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vs-code中的源控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs-code中的源控制"}},[t._v("#")]),t._v(" VS Code中的源控制")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("VS Code 允许插件创作者通过扩展API去定义"),a("em",[t._v("源控制管理")]),t._v("特性（Source Control Management，SCM），VS Code整合了各式各样的SCM体系，而只给用户展现了一组小巧、强大的API接口，还是带用户界面的那种。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensionAPI/images/api-scm/main.png",alt:"main.png"}})]),t._v(" "),a("p",[t._v("VS Code自带一个源控制器：Git，本篇能帮你在VS Code中加入你自己的SCM系统。")]),t._v(" "),a("p",[t._v("如果你需要帮助，请查看"),a("a",{attrs:{href:"https://github.com/Microsoft/vscode-docs/blob/master/docs/extensionAPI/vscode-api.md#scm",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode命名空间API"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"源控制模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源控制模型"}},[t._v("#")]),t._v(" 源控制模型")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("SourceControl")]),t._v("负责生产源控制模型的实体，它里面有"),a("code",[t._v("SourceControlResourceState")]),t._v("实例的"),a("strong",[t._v("资源状态")]),t._v("，而资源状态又是"),a("code",[t._v("SourceControlResourceGroup")]),t._v("实例整理成"),a("strong",[t._v("组")]),t._v("的。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("vscode.scm.createSourceControl")]),t._v("创建一个新的"),a("em",[t._v("源控制器")]),t._v("。")]),t._v(" "),a("p",[t._v("为了更好地理解这几种实体的交互，让我们拿Git来做例子，考虑下列"),a("code",[t._v("git status")]),t._v("输出：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vsce master* → "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\nOn branch master\nYour branch is up-to-date with "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/master'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nChanges to be committed:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git reset HEAD <file>..."')]),t._v(" to unstage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        modified:   README.md\n        renamed:    src/api.ts -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" src/test/api.ts\n\nChanges not staged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commit:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add/rm <file>..."')]),t._v(" to update what will be committed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git checkout -- <file>..."')]),t._v(" to discard changes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" working directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        deleted:    .travis.yml\n        modified:   README.md\n")])])]),a("p",[t._v("这个工作区里面发生了很多事，首先，"),a("code",[t._v("README.md")]),t._v("文件已经被修改了但还没有提交，然后立刻又被修改了。 其次，"),a("code",[t._v("src/api.ts")]),t._v("文件被移动到了"),a("code",[t._v("src/test/api.ts")]),t._v("，这个修改已经存备（staged）， 最后，"),a("code",[t._v(".travis.yml")]),t._v("文件被删除。")]),t._v(" "),a("p",[t._v("对于这个工作区而言，Git定义了两个资源组："),a("strong",[t._v("工作中（Working tree）"),a("strong",[t._v("和")]),t._v("已索引（Index）")]),t._v("，对于单个组而言，每次"),a("strong",[t._v("文件修改")]),t._v("就会产生一些资源状态：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("已索引")]),t._v(" - 资源组\n"),a("ul",[a("li",[t._v("修改"),a("code",[t._v("README.md")]),t._v(" - 资源状态")]),t._v(" "),a("li",[t._v("移动"),a("code",[t._v("src/api.ts")]),t._v("到"),a("code",[t._v("src/test/api.ts")]),t._v(" - 资源状态")])])]),t._v(" "),a("li",[a("strong",[t._v("工作中")]),t._v(" - 资源组\n"),a("ul",[a("li",[t._v("删除"),a("code",[t._v(".travis.yml")]),t._v(" - 资源状态")]),t._v(" "),a("li",[t._v("修改"),a("code",[t._v("README.md")]),t._v(" - 资源状态")])])])]),t._v(" "),a("p",[t._v("同一个"),a("code",[t._v("README.md")]),t._v("是怎么成为两组截然不同的资源状态呢？")]),t._v(" "),a("p",[t._v("下面揭秘Git是如何创建这个模型的：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResourceUri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("relativePath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Uri "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" absolutePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("workspace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relativePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("absolutePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gitSCM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSourceControl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Git"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gitSCM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResourceGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nindex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourceStates "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resourceUri"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResourceUri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'README.md'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resourceUri"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResourceUri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/test/api.ts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" workingTree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gitSCM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResourceGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'workingTree'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Changes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworkingTree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourceStates "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resourceUri"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResourceUri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.travis.yml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resourceUri"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResourceUri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'README.md'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("源变动和最终产生的资源组会传递到源控制视图上。")]),t._v(" "),a("h2",{attrs:{id:"源控制视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源控制视图"}},[t._v("#")]),t._v(" 源控制视图")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("当源变动时，VS Code会生成源控制视图。源状态可通过"),a("code",[t._v("SourceControlResourceDecorations")]),t._v("自定义：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SourceControlResourceState")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" decorations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SourceControlResourceDecorations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上述例子已经足以让源控制视图生成一个简单的列表，不过用户可能想要在不同的资源状态上进行不同的操作。比如，当用户点击资源状态时，会发生什么呢？资源状态提供了一个可选命令去处理这类场景：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SourceControlResourceState")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#菜单"}},[t._v("#")]),t._v(" 菜单")]),t._v(" "),a("p",[t._v("要想提供更加丰富的交互效果，我们提供了5个源控制菜单项供你使用。")]),t._v(" "),a("p",[a("code",[t._v("scm/title")]),t._v("菜单在源控制视图的顶部右上方，菜单项水平排列在标题栏中，另外一些会在"),a("code",[t._v("...")]),t._v("下拉菜单中。"),a("code",[t._v("scm/resourceGroup/context")]),t._v("和"),a("code",[t._v("scm/resourceState/context")]),t._v("是类似的，你可以通过前者自定义资源组，后者则是定义资源状态。将菜单项放在"),a("code",[t._v("inline")]),t._v("组里，可以水平在视图中展示它们。而其他的菜单项可以通过鼠标右击的形式展示在菜单中。菜单中调用的命令会传入资源状态作为参数。注意SCM视图提供多选，因此命令函数可能一次性会接收一个或多个参数。")]),t._v(" "),a("p",[t._v("例如，Git支持往"),a("code",[t._v("scm/resourceState/context")]),t._v("菜单中添加"),a("code",[t._v("git.stage")]),t._v("命令和使用下列方法，提供多个文件的存备（staged）：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("resourceStates"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SourceControlResourceState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("创建它们的时候，"),a("code",[t._v("SourceControl")]),t._v("和"),a("code",[t._v("SourceControlResourceGroup")]),t._v("实例会需要你提供一个string类型的"),a("code",[t._v("id")]),t._v("，这些值最终会在"),a("code",[t._v("scmProvider")]),t._v("和"),a("code",[t._v("scmResourceGroup")]),t._v("以上下文键值的形式出现。在菜单项的"),a("code",[t._v("when")]),t._v("语法中使用这些"),a("a",{attrs:{href:"https://code.visualstudio.com/docs/getstarted/keybindings#_when-clause-contexts",target:"_blank",rel:"noopener noreferrer"}},[t._v("上下文键值"),a("OutboundLink")],1),t._v("。看个Git如何通过"),a("code",[t._v("git.stage")]),t._v("命令显示菜单项的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "command": "git.stage",\n  "when": "scmProvider == git && scmResourceGroup == merge",\n  "group": "inline"\n}\n')])])]),a("p",[a("code",[t._v("scm/change/title")]),t._v("可以对"),a("em",[t._v("行内变动")]),t._v("配置标题栏的命令（contribute commands to the title bar of an inline change）。命令中的参数有文档的URI，变动数组，当前行内变动所在索引。例如下面是一个可以配置菜单的Git"),a("code",[t._v("stageChange")]),t._v("命令声明：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stageChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" changes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LineChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("scm/sourceControl")]),t._v("菜单根据环境出现在源控制实例的边上。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensionAPI/images/api-scm/sourcecontrol-menu.png",alt:""}})]),t._v(" "),a("p",[t._v("最后，"),a("code",[t._v("scm/change/title")]),t._v("菜单是和快速Diff功能相关联的，越新的文件越靠前，你可以针对特定的代码变动调用命令。")]),t._v(" "),a("h3",{attrs:{id:"scm-输入框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scm-输入框"}},[t._v("#")]),t._v(" SCM 输入框")]),t._v(" "),a("p",[t._v("源控制输入框位于每个源控制视图的顶部，接收用户输入的信息。你可以获取（或设置）这个信息供后续使用。在Git中，比如说，这可以作为一个commit框，用户输入了提交信息后，触发"),a("code",[t._v("git commit")]),t._v("命令：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SourceControlInputBox")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SourceControl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" inputBox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SourceControlInputBox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("用户可以通过"),a("kbd",[t._v("Ctrl+Enter")]),t._v("（Mac上是"),a("kbd",[t._v("Cmd+Enter")]),t._v("）接收任意信息，在"),a("code",[t._v("SourceControl")]),t._v("中的"),a("code",[t._v("acceptInputCommand")]),t._v("处理这类事件。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SourceControl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" acceptInputCommand"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"快速diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速diff"}},[t._v("#")]),t._v(" 快速Diff")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("VS Code支持显示快速Diff编辑器的高亮槽，点击这些槽会出现一个内部diff交互器，你可以在这里为上下文配置命令。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensionAPI/images/api-scm/quickdiff.png",alt:""}})]),t._v(" "),a("p",[t._v("这些高亮槽是VS Code自己计算出来的，你要做的就是根据给定的文件提供原始文件内容")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SourceControl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  quickDiffProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" QuickDiffProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用"),a("code",[t._v("QuickDiffProvider")]),t._v("，你的实现需要告诉VS Code——参数传入的给定资源URI所对应的原始资源URI。")]),t._v(" "),a("h2",{attrs:{id:"下一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[t._v("#")]),t._v(" 下一步")]),t._v(" "),a("p",[t._v("想要学习更多关于VS Code扩展性模型，请参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://code.visualstudio.com/docs/extensionAPI/vscode-api#_scm",target:"_blank",rel:"noopener noreferrer"}},[t._v("SCM API 参考"),a("OutboundLink")],1),t._v(" - 查看完整的SCM API文档")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Microsoft/vscode/tree/master/extensions/git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 插件"),a("OutboundLink")],1),t._v(" - 学习Git插件实现")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/extensibility-reference/overview.html"}},[t._v("插件API概览")]),t._v(" - 学习全部的VS Code扩展性模型")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/extensibility-reference/extension-manifest.html"}},[t._v("插件配置清单")]),t._v(" - VS Code package.json插件配置清单参考")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/extensibility-reference/contribution-points.html"}},[t._v("发布内容配置点")]),t._v(" - VS Code发布内容配置点参考")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);