/*
 * @Author: baby
 * @Date:   2016-10-28 20:08:03
 * @Last Modified by:   baby
 * @Last Modified time: 2016-10-30 23:35:31
 */

var container = document.querySelector('#container');
var imgLoad = imagesLoaded(container)

imgLoad.on('progress', function(instance) {
    console.log('progress 加载中')
});

imgLoad.on('always', function(instance) {
    console.log('onAlways 所有图片成功加载完成')
})

imgLoad.off('always', function(instance) {
    console.log('offAlways 解绑');
})
