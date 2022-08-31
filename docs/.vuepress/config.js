module.exports = {
  title: "前端学习记录",
  description: "记录一些平时的学习记录",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "vue相关",
        link: "/vue/one",
      },
    ],
    //侧边栏
    sidebar: {
      "/vue/": [
        {
          title: "vue初始化",
          collapsable: false,
          // children: ["", "/guide/getting-started", "/guide/markdown"],
          path: "/vue/one",
        },
        {
          title: "原理",
          collapsable: false,
          path: "/vue/two",
        },
      ],
    },
  },
};
