# imagesloaded-study

> imagesloaded-study
>

> > imagesLoaded 是一个可以判断图片加载情况的插件(可以不依赖任何插件, 如 jQuery), 如可以监控图片的加载进度,图片加载完成, 图片是否全部加载成功,图片是否有加载失败等情况。

## Install

---

[官网](https://github.com/desandro/imagesloaded)

### Download

[imagesloaded.pkgd.min.js](https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js) minified
[imagesloaded.pkgd.js](https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.js) un-minified

### CDN

```html
<script src="https://unpkg.com/imagesloaded@4.1/imagesloaded.pkgd.min.js"></script>
<!-- or -->
<script src="https://unpkg.com/imagesloaded@4.1/imagesloaded.pkgd.js"></script>
```

### Package managers

Install via npm: `npm install imagesloaded`

Install via Bower: `bower install imagesloaded --save`


## jQuery

---

```js
// jQuery配置方式
$('#container').imagesLoaded( function() {
  // 图片加载后执行的方法
});

$('#container').imagesLoaded( {
     // 属性配置
  },
  function() {
     // 图片加载后执行的方法
  }
);

// javaScript配置方式
var imgLoad = imagesLoaded( '#container', function() {
    // 图片加载后执行的方法
});

```

## 全部事件

```js
$('#container').imagesLoaded()
  .always( function( instance ) {
    console.log('图片已全部加载，或被确认加载失败');
  })
  .done( function( instance ) {
    console.log('图片全部加载成功');
  })
  .fail( function( instance ) {
    console.log('图片已全部加载，且至少一个图片加载失败');
  })
  .progress( function( instance, image ) {
    console.log('每张图片加载完');
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( '加载结果 ' + result + ' 图片地址 ' + image.img.src );
  });

// javaScript方式
imgLoad.on( 'always', onAlways );
```

## 全部配置

```js
// background 检测背景图片的加载情况
$('#container').imagesLoaded( { background: true }, function() {
  console.log('#container background image loaded');
});

// 指定要检测背景图片的子元素
$('#container').imagesLoaded( { background: '.item' }, function() {
  console.log('all .item background images loaded');
});

// JavaScript方式
imagesLoaded( '#container', { background: true }, function() {
  console.log('#container background image loaded');
});

```

## 参数

参看事件一栏，instance 是 imagesLoaded 的实例, image 是 LoadingImage 的实例

LoadingImage有两个接口：

- LoadingImage.img返回加载img图片的元素；
- LoadingImage.isLoaded返回图片是否被成功加载。

imagesLoaded有一个接口

- imagesLoaded.images返回LoadingImage的数组