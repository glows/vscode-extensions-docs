module.exports = {

  title: 'VS code Extension',
  themeConfig: {
    logo: "/assets/img/logo.png",
    // sidebar: "auto",
    nav: [
      { text: "Home", link: "/" },
      { text: "预备知识", link: "/preknowledge/" },
      {
        text: "External",
        link: "https://google.com",
        target: "_self",
        rel: "",
      },
    ],

    sidebar: [
      {
        title: "术语表和说明", // 必要的
        path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/"],
      },
      {
        title: "预备知识", // 必要的
        path: "/preknowledge/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: -1, // 可选的, 默认值是 1
        children: [
          "/preknowledge/",
          "/preknowledge/first-step",
          "/preknowledge/variable-and-type",
          "/preknowledge/class",
          "/preknowledge/interface-and-namespace",
          "/preknowledge/generics",
          "/preknowledge/declaration-files",
        ],
      },
      {
        title: "概述",
        children: [
          "/get-started/your-first-extension",
          "/get-started/extension-anatomy",
          "/get-started/wrapping-up",
        ],
        initialOpenGroupIndex: 1, // 可选的, 默认值是 0
      },
      {
        title: "开发插件",
        children: [
          "/working-with-extensions/testing-extension.md",
          "/working-with-extensions/publish-extension.md",
          "/working-with-extensions/bundling-extension.md",
          "/working-with-extensions/continuous-integration.md",
        ],
        initialOpenGroupIndex: 1, // 可选的, 默认值是 0
      },
      {
        title: "插件功能", // 必要的
        children: [
          // "/extension-capabilities/readme.md",
          '/extension-capabilities/',
          "/extension-capabilities/common-capabilities.md",
          "/extension-capabilities/theming.md",
          "/extension-capabilities/extending-workbench.md",
        ],
        initialOpenGroupIndex: 1, // 可选的, 默认值是 0
      },
      {
        title: "插件指南", // 必要的
        path: "/extension-guides/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          "/extension-guides/",
          "/extension-guides/command.md",
          "/extension-guides/color-theme.md",
          "/extension-guides/icon-theme.md",
          "/extension-guides/tree-view.md",
          "/extension-guides/webview.md",
          "/extension-guides/virtual-documents.md",
          "/extension-guides/task-provider.md",
          "/extension-guides/scm-provider.md",
          "/extension-guides/debugger-extension.md",
          "/extension-guides/markdown-extension.md",
        ],
      },
      {
        title: "语言插件", // 必要的
        path: "/language-extensions/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          "/language-extensions/",
          "/language-extensions/syntax-highlight-guide.md",
          "/language-extensions/snippet-guide.md",
          "/language-extensions/language-configuration-guide.md",
          "/language-extensions/programmatic-language-features.md",
          "/language-extensions/language-server-extension-guide.md",
        ],
      },
      {
        title: "进阶主题", // 必要的
        path: "/preknowledge/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          "/advanced-topics/extension-host.md",
          "/advanced-topics/remote-extensions.md",
          "/advanced-topics/using-proposed-api.md",
        ],
      },
      {
        title: "参考", // 必要的
        path: "/preknowledge/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          "/references/vscode-api.md",
          "/references/contribution-points.md",
          "/references/activation-events.md",
          "/references/extension-manifest.md",
          "/references/commands.md",
          "/references/theme-color.md",
          "/references/icons-in-labels.md",
          "/references/document-selector.md",
        ],
      },
    ],

    // sidebar: {
    //   '/preknowledge/': [
    //     '',     /* /foo/ */
    //     'variable-and-type',  /* /foo/one.html */
    //     'class'   /* /foo/two.html */
    //   ],

    //   '/bar/': [
    //     '',      /* /bar/ */
    //     'three', /* /bar/three.html */
    //     'four'   /* /bar/four.html */
    //   ],

    //   // fallback
    //   '/': [

    //     '',        /* l */
    //     'README'
    //   ]
    // }
  },
};
