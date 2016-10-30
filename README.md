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
$('#container').imagesLoaded( function() {
  // images have loaded
});

// options
$('#container').imagesLoaded( {
  // options...
  },
  function() {
    // images have loaded
  }
);
```
