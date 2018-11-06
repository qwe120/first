require.config({
    baseUrl: './js/', // 
    paths:{
        'jquery': './libs/jquery-3.1.1.min',
        'swiper': './libs/swiper-4.1.6.min',
        'bscroll': './libs/better-scroll',
        'index': './index'
    },
    shim:{ // 配置不符合AMD规范的模块
        'util':{
            exports: 'sum', //导出一个模块
            init: function () { // 导出多个模块
                return {
                    sum: sum,
                    minus: minus
                }
            }
        },
        'until': {
            deps:['jquery'] //设置依赖
        }
    }
});
require(['index']);