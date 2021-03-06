/**
 * Configuration for region cn (lang zh-cn)
 */
const docSideBar = function() {
  return [
    {
      title: "使用指南",
      collapsable: false,
      children: [
        "/zh/docs/",
        "/zh/docs/getting-started",
        "/zh/docs/adding-upm-package",
        "/zh/docs/modifying-upm-package",
        "/zh/support/"
      ]
    },
    {
      title: "软件包作者指南",
      collapsable: false,
      children: ["/zh/docs/adding-badge", "/zh/docs/managing-upm-project"]
    },
    {
      title: "OpenUPM维护指南",
      collapsable: true,
      children: ["/zh/docs/dev/"]
    },
    {
      title: "其他资源",
      collapsable: true,
      children: [
        "/zh/docs/team",
        "/zh/docs/terms",
        "/zh/docs/code-of-conduct",
        "/zh/docs/privacy"
      ]
    }
  ];
};

module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
      title: "OpenUPM中文网",
      description: "OpenUPM是收集Unity开源软件包的仓库和自动化构建服务。"
    }
  },
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "openupm,upm,registry,unity,package,manager,open source,开源,软件源,软件包,软件包仓库"
      }
    ]
  ],
  themeConfig: {
    locales: {
      "/": {
        editLinkText: "编辑此页面",
        nav: [
          {
            text: "软件包",
            link: "/packages/"
          },
          {
            text: "文档",
            link: "/zh/docs/"
          },
          {
            text: "贡献",
            ariaLabel: "Support Menu",
            items: [
              { text: "支援OpenUPM", link: "/zh/support/" },
              { text: "贡献者", link: "/contributors/" }
            ]
          },
          {
            text: "社区",
            ariaLabel: "Connect Menu",
            items: [
              {
                text: "GitHub",
                link: "https://github.com/openupm/openupm",
                icon: "fab fa-github",
                iconLeft: true
              },
              {
                link: "mailto:hello@openupm.com",
                text: "联系我们",
                icon: "fas fa-envelope",
                iconLeft: true
              },
              {
                link: "/feeds/updates/rss",
                text: "软件包更新",
                icon: "fa fa-rss-square",
                raw: true,
                iconLeft: true
              }
            ]
          },
          {
            text: "命令行工具",
            link: "https://github.com/openupm/openupm-cli#openupm-cli",
            icon: "fa fa-keyboard",
            iconLeft: true
          }
        ],
        sidebar: {
          "/docs/": docSideBar(),
          "/support/": docSideBar(),
          "/zh/": docSideBar()
        }
      }
    }
  },
  plugins: [
    [
      "vuepress-plugin-social-share",
      {
        networks: ["weibo"],
        fallbackImage: "/images/openupm-icon-256.png"
      }
    ]
  ]
};
