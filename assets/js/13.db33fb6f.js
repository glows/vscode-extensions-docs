(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{359:function(e,t,o){"use strict";o.r(t);var v=o(42),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"调试器api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#调试器api"}},[e._v("#")]),e._v(" 调试器API")]),e._v(" "),o("p",[e._v("VS Code 允许插件创作者制作新的"),o("strong",[e._v("调试器插件")]),e._v("，或为已有的调试功能添加"),o("strong",[e._v("特性")]),e._v("。")]),e._v(" "),o("p",[e._v("我们提供了两个领域的API：")]),e._v(" "),o("ul",[o("li",[e._v("通过成熟又强力的"),o("strong",[e._v("协议")]),e._v("生成新的VS Code常规调试界面")]),e._v(" "),o("li",[e._v("常规的"),o("strong",[e._v("插件API")]),e._v("，但不包括VS Code的全部调试功能")])]),e._v(" "),o("p",[e._v("提供这两种截然不同的API是因为VS Code的“热拔插调试器”插件架构（我们不会移除向后兼容的基于"),o("em",[e._v("协议")]),e._v("的调试器连接方法）")]),e._v(" "),o("p",[e._v("下列图片展示了两种API在VS Code中协作的方式：")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/extensionAPI/images/api-debugging/debug-extension-api.png",alt:"debug-extension-api"}})]),e._v(" "),o("p",[o("strong",[e._v("调试适配器")]),e._v("是一个典型的脱机程序，通过**调试适配器协议（Debug Adapter Protocol）**连接到真实的调试器和具体的调试器API上。因为调试适配器可以用任意的语言实现，因此非常适合先前"),o("em",[e._v("已有")]),e._v("的调试器或者运行时存在的场合，连接协议比实现了协议本身的客户端库提供的API更加重要。")]),e._v(" "),o("p",[e._v("调试适配器并不是VS Code本身的插件，而要创作者封装出一个调试器插件才行，不要担心，你并不需要写太多代码。这个插件只是一个容器，在"),o("code",[e._v("package.json")]),e._v("中只要提供必要的"),o("strong",[e._v("配置项")]),e._v("即可。当调试器会话运行后，VS Code会进入调试器插件，启动调试适配器，然后用调试适配器协议通信。")]),e._v(" "),o("p",[e._v("下面是我们为调试器插件提供的最新的API。")]),e._v(" "),o("h2",{attrs:{id:"调试器插件api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#调试器插件api"}},[e._v("#")]),e._v(" 调试器插件API")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("所有供调试使用的插件API都在"),o("code",[e._v("vscode.debug")]),e._v("下的命名空间中，你可以在"),o("a",{attrs:{href:"https://github.com/Microsoft/vscode-docs/blob/master/docs/extensionAPI/vscode-api.md#debug",target:"_blank",rel:"noopener noreferrer"}},[e._v("vscode 命名空间API参考"),o("OutboundLink")],1),e._v("中查看。")]),e._v(" "),o("h4",{attrs:{id:"调试型钩子"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#调试型钩子"}},[e._v("#")]),e._v(" 调试型钩子")]),e._v(" "),o("p",[e._v("所有调试型的钩子都在"),o("code",[e._v("DebugConfigurationProvider")]),e._v("中。")]),e._v(" "),o("p",[o("code",[e._v("registerDebugConfigurationProvider")]),e._v("注册了"),o("code",[e._v("DebugConfigurationProvider")]),e._v("，调试器类型本身是在"),o("a",{attrs:{href:"https://github.com/Microsoft/vscode-docs/blob/master/docs/extensionAPI/extension-points.md#contributesdebuggers",target:"_blank",rel:"noopener noreferrer"}},[e._v("发布内容配置项"),o("code",[e._v("debugger")]),o("OutboundLink")],1),e._v("中配置的。")]),e._v(" "),o("p",[e._v("当前，你可以使用的钩子有：")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("只要VS Code通过"),o("code",[e._v("launch.json")]),e._v("初始化出一个新的调试器配置就会为所有注册了"),o("code",[e._v("DebugConfigurationProviders")]),e._v("的插件调用"),o("code",[e._v("provideDebugConfigurations")]),e._v("，然后合并返回的调试器配置，注入到package.json中。")])]),e._v(" "),o("li",[o("p",[e._v("VS Code每次在启动调试会话前调用"),o("code",[e._v("resolveDebugConfiguration")]),e._v("方法，"),o("code",[e._v("resolveDebugConfiguration")]),e._v("的实现可以通过给调试配置中传入缺省值或者添加/改变/移除配置项的方式和调试配置“通信”。通过这个机制，甚至可以实时调整调试类型。")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("debugAdapterExecutable")]),e._v("方法会在VS Code启动了调试器之后调用，这个方法会返回调试适配器执行的路径（接受可选参数）。如果没有实现这个方法，VS Code则会使用package.json中配置的静态路径。")])])]),e._v(" "),o("h4",{attrs:{id:"调试会话生命周期api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#调试会话生命周期api"}},[e._v("#")]),e._v(" 调试会话生命周期API")]),e._v(" "),o("p",[e._v("一个调试会话在插件API中表示为"),o("code",[e._v("DebugSession")]),e._v("，它的声明周期可以通过下列方式控制和追踪：")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("startDebugging")]),e._v("：调试启动时触发，可以接受一个命名的调试器/复合配置/内存中的配置。")]),e._v(" "),o("li",[o("code",[e._v("onDidStartDebugSession")]),e._v("：调试会话启动后触发。")]),e._v(" "),o("li",[e._v("当前激活的调试会话可由变量"),o("code",[e._v("activeDebugSession")]),e._v("获得，调试会话变动反应在"),o("code",[e._v("onDidChangeActiveDebugSession")]),e._v("事件中。")]),e._v(" "),o("li",[o("code",[e._v("onDidTerminateDebugSession")]),e._v("：调试会话关闭后触发。")])]),e._v(" "),o("h4",{attrs:{id:"调试会话api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#调试会话api"}},[e._v("#")]),e._v(" 调试会话API")]),e._v(" "),o("p",[e._v("目前调试会话的API还比较少：")]),e._v(" "),o("ul",[o("li",[e._v("通过"),o("code",[e._v("customRequest")]),e._v("方法将调试适配器的请求发送到受控调试方。")]),e._v(" "),o("li",[e._v("自定义的调试适配器事件在"),o("code",[e._v("onDidReceiveDebugSessionCustomEvent")]),e._v("中获取。")])]),e._v(" "),o("h4",{attrs:{id:"断点api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#断点api"}},[e._v("#")]),e._v(" 断点API")]),e._v(" "),o("p",[e._v("所有的断点类型都是"),o("code",[e._v("Breakpoint")]),e._v("的子类，当前提供的子类有"),o("code",[e._v("SourceBreakpoint")]),e._v("和"),o("code",[e._v("FunctionBreakpoint")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("vscode.debug.breakpoints")]),e._v("提供了工作区所有的断点集合。用"),o("code",[e._v("instanceof")]),e._v("检查单个断点的具体对象类型。")]),e._v(" "),o("li",[o("code",[e._v("vscode.debug.onDidChangeBreakpoints")]),e._v("侦听断点的添加、移除、改变事件。")]),e._v(" "),o("li",[o("code",[e._v("SourceBreakpoints")]),e._v("和"),o("code",[e._v("FunctionBreakpoints")]),e._v("只能通过"),o("code",[e._v("addBreakpoints")]),e._v("和"),o("code",[e._v("removeBreakpoints")]),e._v("函数添加。")])]),e._v(" "),o("p",[e._v("!>注意：一开始获取断点可能是一个空数组，而随后则会触发"),o("code",[e._v("BreakpointsChangeEvent")]),e._v("事件并更新"),o("code",[e._v("vscode.debug.breakpoints")]),e._v("，在这个时间点你就能获得正确的集合。所以如果你需要正确的断点集合，不要忘了注册"),o("code",[e._v("BreakpointsChangeEvent")]),e._v("事件。")]),e._v(" "),o("h2",{attrs:{id:"调试适配器协议-dap-debug-adapter-protocol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#调试适配器协议-dap-debug-adapter-protocol"}},[e._v("#")]),e._v(" 调试适配器协议（DAP - Debug Adapter Protocol）")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("你可以在"),o("a",{attrs:{href:"https://github.com/Microsoft/vscode-debugadapter-node",target:"_blank",rel:"noopener noreferrer"}},[e._v("vscode-debugadapter-node"),o("OutboundLink")],1),e._v("仓库中找到JSON格式或者TypeScript定义的"),o("a",{attrs:{href:"https://microsoft.github.io/debug-adapter-protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("调试适配器协议"),o("OutboundLink")],1),e._v("规格说明书。这两个文件都详细地列出了每个协议的请求、响应和事件结构。这个协议在NPM库"),o("a",{attrs:{href:"https://www.npmjs.com/package/vscode-debugprotocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("vscode-debugprotocol"),o("OutboundLink")],1),e._v("中也可以找到。")]),e._v(" "),o("p",[e._v("我们已经实现了调试适配器协议的TypeScript和C#客户端版本，不过只有JavaScript/TypeScript的客户端库在NPM"),o("a",{attrs:{href:"https://github.com/Microsoft/vscode-debugadapter-node",target:"_blank",rel:"noopener noreferrer"}},[e._v("vscode-debugadapter-node"),o("OutboundLink")],1),e._v("中是可用的。C#的库可以在"),o("a",{attrs:{href:"https://github.com/Microsoft/vscode-mono-debug/blob/master/src/DebugSession.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mono Debug"),o("OutboundLink")],1),e._v("中找到。")]),e._v(" "),o("p",[e._v("下列调试器插件项目会教你如何实现调试适配器：")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("GitHub项目")]),e._v(" "),o("th",[e._v("描述")]),e._v(" "),o("th",[e._v("实现语言")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{href:"https://github.com/Microsoft/vscode-mock-debug.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mock Debug"),o("OutboundLink")],1)]),e._v(" "),o("td",[e._v("一个假的调试器")]),e._v(" "),o("td",[e._v("TypeScript")])]),e._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"https://github.com/Microsoft/vscode-node-debug2.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node Debug2"),o("OutboundLink")],1)]),e._v(" "),o("td",[e._v("内建的基于CDP-based的Node.js调试器")]),e._v(" "),o("td",[e._v("TypeScript")])]),e._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"https://github.com/Microsoft/vscode-node-debug.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node Debug"),o("OutboundLink")],1)]),e._v(" "),o("td",[e._v("内建的传统Node.js调试器")]),e._v(" "),o("td",[e._v("TypeScript")])]),e._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"https://github.com/Microsoft/vscode-mono-debug.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mono Debug"),o("OutboundLink")],1)]),e._v(" "),o("td",[e._v("一个供Mono使用的简单的C#调试器")]),e._v(" "),o("td",[e._v("C#")])])])]),e._v(" "),o("h2",{attrs:{id:"一语道破-调试适配器协议"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一语道破-调试适配器协议"}},[e._v("#")]),e._v(" 一语道破——调试适配器协议")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("我们快速地看一下VS Code和调试器间的互动，这应该能帮你快速地实现基于调试适配器协议的调试适配器。")]),e._v(" "),o("p",[e._v("调试器会话启动，VS Code加载调试适配器，通过"),o("em",[e._v("stdin")]),e._v("和"),o("em",[e._v("stdout")]),e._v("进行通信。VS Code发送了一个"),o("strong",[e._v("初始化")]),e._v("请求，然后用"),o("em",[e._v("行列值是0，1")]),e._v("的路径格式信息（原生或URI）配置好调试器。如果你的调试器是TypeScript或C#实现的"),o("code",[e._v("Debugsession")]),e._v("中派生出来的，你则不需要自行处理初始化请求。")]),e._v(" "),o("p",[e._v("根据用户创建的启动配置文件中的"),o("em",[e._v("请求")]),e._v("属性，VS Code会发送*加载（launch）"),o("em",[e._v("或是")]),e._v("附加（attch）*请求。对于"),o("strong",[e._v("加载")]),e._v("类型，调试适配器需要加载一个运行时或者可以调试的程序。如果这个程序可以通过stdin/stdout和用户进行交互，那么调试适配器就会在一个可交互的终端或者控制台加载这个程序。对于"),o("strong",[e._v("附加")]),e._v("类型，调试适配器则会连接或者附加到一个已经运行的程序上面。")]),e._v(" "),o("p",[e._v("因为这两种请求的参数都高度依赖特定的调试适配器实现，所以调试适配器协议不提供任何参数描述。而VS Code则会把所有用户启动配置传给"),o("em",[e._v("加载")]),e._v("或"),o("em",[e._v("附加")]),e._v("请求。这两种属性的智能补全和悬停信息提示可以在适配器插件中的"),o("code",[e._v("package.json")]),e._v("进行配置，以帮助用户知道何时可以创建或编辑"),o("em",[e._v("启动配置")]),e._v("。")]),e._v(" "),o("p",[e._v("VS Code会帮调试适配器保留断点，所以必须要在调试会话启动时，对应地注册适配器中的断点。因为VS Code不知道注册断点的最佳时机，所以调试适配器会发送一个"),o("strong",[e._v("initialize")]),e._v("事件给VS Code，告知它已经准备好接收断点配置请求了。")]),e._v(" "),o("p",[e._v("然后VS Code就会调用断点配置请求，发送所有的断点：")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("setBreakpoints")]),e._v(" 为每个源文件带上断点，")]),e._v(" "),o("li",[o("strong",[e._v("setFunctionBreakpoints")]),e._v(" 如果调试适配器支持函数断点，")]),e._v(" "),o("li",[o("strong",[e._v("setExceptionBreakpoints")]),e._v(" 如果调试适配器支持异常选项，")]),e._v(" "),o("li",[o("strong",[e._v("configurationDoneRequest")]),e._v(" 指示配置序列已经结束。")])]),e._v(" "),o("p",[e._v("所以，当你准备好了的时候不要忘了发送"),o("em",[e._v("initialize")]),e._v("事件接收断点。不然已保留的断点不会再储存下来。")]),e._v(" "),o("p",[o("em",[e._v("setBreakpoints")]),e._v("请求为文件设置所有已存在的断点（所以不是增量的哦）。常见的场景就是为某个文件清除所有的断点，然后再根据请求设置断点。"),o("em",[e._v("setFunctionBreakpoints")]),e._v("和"),o("em",[e._v("setFunctionBreakpoints")]),e._v("需要返回真正的断点，然后VS Code就会动态地更新UI，如果断点无法跟随请求设置然后就会在后台移除。")]),e._v(" "),o("p",[e._v("当程序停止（在程序入口，断点命中，抛出异常，或者用户需要暂停执行），那么调试适配器必须发出"),o("strong",[e._v("stopped")]),e._v("事件，带上原因和线程id。根据这条信息，VS Code会先请求"),o("strong",[e._v("threads")]),e._v("（见下），然后列出停止的线程的堆栈追踪日志（栈帧列表）。如果用户深入到栈帧（stack frame）中去，VS Code会先请求这个栈帧的"),o("strong",[e._v("scopes")]),e._v("，然后是这个scope的变量。如果变量是自构建的，VS Code会通过额外的"),o("em",[e._v("variables")]),e._v("请求获取它的属性。这个过程会生成下列事件层级：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Threads\n   Stackframes\n      Scopes\n         Variables\n            ...\n               Variables\n")])])]),o("p",[e._v("VS Code调试界面支持多线程（如果你只用Node.js调试器的话可能还不知道这个功能）。当VS Code接收到"),o("strong",[e._v("stopped")]),e._v("或"),o("strong",[e._v("thread")]),e._v("事件，然后它会立刻请求当时所有的"),o("strong",[e._v("threads")]),e._v("并显示到界面上。如果只检测到一个线程，VS Code则会保留在单线程模式。"),o("strong",[e._v("Thread")]),e._v("事件是可选的，不过调试适配器可以强制发送这个事件，即使不在暂停状态，VS Code也会动态地更新线程界面。")]),e._v(" "),o("p",[e._v("成功地"),o("strong",[e._v("加载")]),e._v("或"),o("strong",[e._v("附加")]),e._v("了调试适配器后，VS Code会发送"),o("strong",[e._v("threads")]),e._v("请求当前线程，获取线程基线，然后开始侦听"),o("strong",[e._v("threads")]),e._v("事件检查是否有新的或是终止的线程。即使你的调试适配器不支持多线程，它也必须实现"),o("strong",[e._v("threads")]),e._v("请求，然后返回一个（虚假的）线程。线程的id必须要在所有需要线程id的地方消费掉，比如："),o("strong",[e._v("stacktrace")]),e._v("， "),o("strong",[e._v("pause")]),e._v("，"),o("strong",[e._v("continue")]),e._v("，"),o("strong",[e._v("next")]),e._v("，"),o("strong",[e._v("stepIn")]),e._v("，和 "),o("strong",[e._v("stepOut")]),e._v("。")]),e._v(" "),o("p",[e._v("当发送"),o("strong",[e._v("disconnect")]),e._v("请求时，VS Code会终止调试会话。如果调试目标在"),o("em",[e._v("加载")]),e._v("时被断开了，那么则会终止目标程序（如果必要的话，会强制终止）。如果调试目标在"),o("em",[e._v("附加")]),e._v("初始化时断开，那么则会立刻断开目标（程序则会继续执行）。在目标正常终止或崩溃时，调试适配器必须触发一个"),o("strong",[e._v("terminated")]),e._v("事件。收到断开请求后，VS Code就会关闭调试适配器。")]),e._v(" "),o("h2",{attrs:{id:"下一步"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[e._v("#")]),e._v(" 下一步")]),e._v(" "),o("p",[e._v("学习更多VS Code扩展性模型，请参阅下列主题：")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/extension-authoring/example-debug-adapter.html"}},[e._v("示例：调试器")]),e._v(" - 查看一个可执行的'模拟'调试器示例。")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/extensibility-reference/vscode-api.html"}},[e._v("插件API概览")]),e._v(" - 学习完整的VS Code扩展性模型。")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/extensibility-reference/extension-manifest.html"}},[e._v("插件配置清单")]),e._v(" - VS Code的package.json插件配置清单参阅")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/extensibility-reference/contribution-points.html"}},[e._v("发布内容配置")]),e._v(" - VS Code发布内容配置参阅")],1)])])}),[],!1,null,null,null);t.default=_.exports}}]);