
/**
 * [微信JS]
 * @param Title     [分享标题]
 * @param des       [分享描述]
 * @param picURL    [分享图片]
 */
function WeChatShare(Title, des, picURL) {
    var LocaURL = window.location.href.split('#')[0];
    var proper = WeChatShare.prototype.GetRequest();

    window.openid = 'xxxxxx';
    var ShareUrl = 'game.cqqigao.com/game/skiing/index.html?openid=' + window.openid;
    $.ajax({
        url: "/服务器地址",
        type: "post",
        data: {
            appid: 'appid需要提供或服务器直接自己处理',
            secret: 'secretkey需要提供或服务器直接自己处理',
            url: LocaURL // 将当前URL地址上传至服务器用于产生数字签名
        },
        success: function (data) {
            var datas = JSON.parse(data);//转换JSON

            if (datas.state == 'ok') {
                var appList = datas['data'];

                WeChatShare.prototype.sharePopUp(Title, des, picURL);
                cc.director.pause();
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
                    appId: appList['appid'], // 必填，公众号的唯一标识
                    timestamp: appList['timeStamp'],//必填，生成签名的时间戳
                    nonceStr: appList['nonceStr'], // 必填，生成签名的随机串
                    signature: appList['signature'],//必填，签名
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] //必填，需要使用的JS接口列表
                });

                // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
                wx.onMenuShareTimeline({
                    title: Title+" - "+des, // 分享标题
                    link: ShareUrl,
                    imgUrl: picURL, // 分享图标  "http://img.sc115.com/uploads/shows/67/20120227194223137.jpg"
                    success: function () {
                        cc.director.resume();

                    },
                    cancel: function () {
                        cc.director.resume();
                    }
                });
                // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
                wx.onMenuShareAppMessage({
                    title: Title, // 分享标题
                    desc: des, // 分享描述
                    link: ShareUrl,
                    imgUrl: picURL,// 分享图标
                    success: function () {
                        cc.director.resume();

                    },
                    cancel: function () {
                        cc.director.resume();
                    }
                });


                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                wx.error(function (res) {
                    console.log("res", res);
                });
            }
            else {
                console.log(" 请求失败原因：", datas.error);
            }
        },
        error: function (err) {
            console.log("err", err);
        }
    })
}
/**
 * [sharePopUp 分享弹窗]
 * @param  {[string]} title  [分享标题]
 * @param  {[string]} des    [分享描述]
 * @param  {[string]} picURL [分享图片]
 */
WeChatShare.prototype.sharePopUp = function (title, des, picURL) {
    var sharePopUp = document.createElement('div');//分享遮罩层
    sharePopUp.className = 'sharePopUp';
    var shareMsgImg = document.createElement('img');//分享提示图片
    shareMsgImg.src = imgrootPath+'img/share.png';
    shareMsgImg.className = 'shareMsgImg';
    shareMsgImg.id = 'shareMsgImg';
    sharePopUp.appendChild(shareMsgImg);
    var shareCont = document.createElement('div');//分享内容
    shareCont.className = 'shareCont';
    shareCont.id = 'shareCont';
    var shareTit = document.createElement('h3');//分享标题
    shareTit.id = 'shareTit';
    shareTit.innerHTML = title;
    shareCont.appendChild(shareTit);
    var shareImg = document.createElement('img');//分享的图片
    shareImg.id = 'shareImg';
    shareImg.src = picURL;
    shareCont.appendChild(shareImg);
    var shareDes = document.createElement('p');//分享描述
    shareDes.id = 'shareDes';
    shareDes.innerHTML = des;
    shareCont.appendChild(shareDes);
    sharePopUp.appendChild(shareCont);
    document.body.appendChild(sharePopUp);

}
/**
 * [GetRequest 截取ResourceID]
 */
WeChatShare.prototype.GetRequest = function () {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
};
