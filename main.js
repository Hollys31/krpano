const defaultUrl = '../1.jpg' // 全景图地址
    
// 从链接上获取图片的url
let querys = location.search
const paramsObj = {}
if (querys) {
    querys = querys.slice(1)
    const queryArr = querys.split('&')
    if (queryArr) {
        queryArr.forEach(function (item) {
            let itemArr = item.split('=')
            if (itemArr && itemArr.length == 2) {
                paramsObj[itemArr[0]] = decodeURIComponent(itemArr[1])
            }
        })
    }
}

// 全景图图片url
const url = paramsObj.url || defaultUrl
let env = '' // 当前环境

window.onload = function () {
    var that = this;
    embedpano({
        xml: "./js/krpano.xml",
        target: "panorama",
        id: 'krpano',
        initvars: {
            source: url
        },
        onready: function (krpano_interface) {
            that.viewer = krpano_interface
        }
    })
    //删除实例
    //removepano('krpano')
}
document.addEventListener('DOMContentLoaded', function () {
        const ua = navigator.userAgent.toLowerCase()
        if (/miniProgram/i.test(ua)) { // 微信小程序中
            document.getElementById('back-button').onclick = function () {
             wx.miniProgram.reLaunch({ url: '/pages/album/album'})
            }
        }
       
    
})