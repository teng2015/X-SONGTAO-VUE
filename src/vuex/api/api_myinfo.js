/**
 * Created by xiangsongtao on 16/7/30.
 * Description: 获取更新我的个人信息的api,
 * 只由actions.js调用,返回成功的结果,否则返回空,错误由自己处理显示
 */


import CONFIG from "../../config.js"
import Vue from "vue";
export default {
    get (cb) {
        // cb("success");
        Vue.http.get(CONFIG.getMyInfo).then((response) => {
            // success callback
            let result = response.data;
            if (parseInt(result.code) === 1) {
                console.log('cb(result.data)');
                console.log(result.data);
                cb(result.data);
                // this.myinfo = result.data;
            } else {
                alert("请求失败!")
            }
        }, (response) => {
            console.log('GetMyInfo err')
            console.log(response)
        });
    },

    // set (products, cb, errorCb) {
    //     setTimeout(() => {
    //         // simulate random checkout failure.
    //         (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
    //             ? cb()
    //             : errorCb()
    //     }, 100)
    // }
}