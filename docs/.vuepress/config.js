const path = require('path')
module.exports = {
    dest: 'vuepress',
    palette: path.resolve(__dirname, 'palette.styl'),
    themeConfig: {

        // nav: [
        //     { text: '主页', link: '/' },
        //     { text: '博文',
        //         items: [
        //             { text: 'Android', link: './android' },
        //             { text: 'ios', link: './ios' },
        //             { text: 'Web', link: './web' }
        //         ]
        //     },
        //     { text: '关于', link: '/about/' },
        // ],
        sidebar: [
            {
                title: '入门',
                children: [
                    'thinkey/WhatIsThinkey.md',
                    'thinkey/Thinkey\'sTechnicalFeatures.md',
                    'thinkey/BlockchainBrowser.md',

                    {
                        title: '开发文档',
                        children: [
                            {
                                title: 'httpapi',
                                children: [
                                    'HTTP/test_1.md',
                                    'thinkey/Thinkey\'sTechnicalFeatures.md',
                                ]
                            },
                            'thinkey/Thinkey\'sTechnicalFeatures.md',
                        ]
                    },
                ]
            },
            {
                title: '组件',
                children: ['/components/button']
            }
        ]
    }

}