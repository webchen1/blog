module.exports = {
    title: '全民娱乐',
    description: 'Just play around',
	dest:'docs/dist',
    themeConfig: {
        // 导航栏LOGO
        logo: '/assets/img/logo.png',
        // 导航栏连接
        // nav: [
        //     { text: '主页', link: '/' },
        //     { text: '懵逼指南', link: '/guide/' },
        //     { text: 'External', link: 'https://google.com' },
        // ],

        nav:require("./nav.js"),
        sidebar:require("./sidebar.js"),

    }
}