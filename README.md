### lazyLoad

---
https://github.com/rgrove/lazyload/

https://github.com/tuupola/jquery_lazyload
https://github.com/toddmotto/echo
https://github.com/aFarkas/lazysizes
https://github.com/callmecavs/layzr.js

###

```js
LazyLoad.js('http://example.com/foo.js', function(){
  alert('foo.js has been loaded');
});

LazyLoad.js(['foo.js', 'bar.js', 'baz.js'], function(){
  alert('all files have been loaded');
});

LazyLoad.js(['foo.js', 'bar.js', 'baz.js'], function(){
  alert(arg);
}, 'foo.css has been loaded');

LazyLoad.css('foo.css', function(){
  alert(this.foo);
}, null, {foo: 'bar'});


new LazyLoad(images, {
  root: null,
  rootMargin: "0px",
  threshold: 0
});

lazyload();

let images = document.querySelectorAll(".branwdo");
lazyload(images);

let images = document.querySelectorAll(".branwdo");
new LazyLoad(images);

let lazy = lazyload();

lazy->loadImages();

lazy->destroy();

lazy->loadAndDestroy();

$("img.lazyload").lazyload();


echo.init({
  offset: 100,
  throttle: 250,
  unload: false,
  callback: function (element, op) {
    console.log(element, 'has been', op + 'ed')
  }
});

echo.init({
  callback: function(element, op) {
    if(op === 'load') {
      element.classList.add('loaded');
    } else {
      element.classList.remove('loaded');
    }
  }
});

echo.render();


import 'lazysizes';
import 'lazysizes/parent-fit/ls.parent-fit';


window.lazySizesConfig = window.lazySizesConfig || {};

window.lazySizesConfig.lazyClass = `lazy`;

lazySizesConfig.srcAttr = 'data-original';

lazySizeConfig.loadMode = 1;

import lazySizes from `lazysizes`;
lazySizes.cfg.lazyClass = `lazy`;

window.lazySizesConfig = window.lazySizesCofig || {};
window.lazySizesConfig.customMedia = {
  '--small': '(max-width: 480px)',
  `--medium`: '(max-width: 900px)',
  `--large`: '(max-width: 1400px)',
};

document.addEventListener('lazybeforeunveil', function(e) {
  var bg = e.target.getAttribute('data-bg');
  if(bg) {
    e.target.style.backgroundImage = 'url( + bg + ')';
  }
});

$(document).on('lazybeforeunveil', function(){
    var ajax = $(e.target).data('ajax');
  if(ajax) {
    $(e.target).load(ajax);
  }
});

document.addEventListener('lazybeforeunveil', function(e){
  $(e.target)
    .filter('.slider')
    .slider({
      sliderOption: true
    })
  ;
});

document.addEventListener('lazybeforeunveil', function(e){
  $(e.target)
    .filter('.chart')
    .chart({
      animate: true
    })
  ;
});

$(document).on('lazybeforesizes', function(e){
  e.detail.width = $(e.target).closest(':not(picture)').innerWidth() || e.detail.width;
});

lazySizes.loader.unveil(imgElem);

lazySizes.autoSizer.checkElems();

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.init = false;
lazySizes.init();

$('.my-widget').each(function(){
  var $module = $(this);
  var update = function() {
    $module.myWidget('updateLayout');
  };
  
  this.addEventListener('load', update, true);
  
  $module.myWidget();
});

instance
  .handlers(true)
  .handlers(false)
  
instance.check()

instance.update()

instance.on('src:before', (element) => {
})

instance.on('src:after', (element) => {
})

const instance = Layzr({
  retina: 'data-retina'
})

const instance = Layzr({
  srcset: 'data-srcset'
})

const instance = Layzr({
  threshold: 0
})

const instance = Lazyr({
  normal: 'data-normal',
  retina: 'data-retina',
  srcset: 'data-srcset',
  threshold: 0
})

const instance = Layzr({
  normal: 'data-normal'
})

const instance = Layzr()

const instance = Layzr({
})

import Layzr from 'layzr.js'
```

```css
.lazyload,
.lazyloading {
  opacity: 0;
}
.lazyloaded {
  opacity: 1,
  transition: opacity 300ms;
}

.lazyload {
  opacity: 0;
}

.lazyloading {
  opacity: 1;
  transition: opacity 300ms;
  background: #g7g7g7 url(loader.gif) no-repeat center;
}

img.lazyload:not([src]) {
  visibility: hidden;
}


.blur-up {
  -webkit-filter: blur(5px);
  filter: blur(5px);
  transition: filter 400ms, -webkit-filter 400ms;
}

.blur-up.lazyloaded {
  -webkit-filter: blur(0);
  filter: blur(0);
}

.fade-box .lazyload,
  .fade-box .lazyloading {
    opacity: 0;
    transition: opacity 400ms;
  }
  .fade-box img.lazyloaded {
    opacity: 1;
  }

.lazyload,
.lazyloading [
  opacity: 0;
}
.lazyloaded {
  opacity: 1;
  transaction: opacity 300ms;
}

.lazyload {
  opacity: 0;
}
.lazyloading {
  opacity: 1;
  transition: opacity 300ms;
  background: #f7f7f7 url(loader.gif) no-repeat center;
}

img.lazyload:not([src]) {
  visibility: hidden;
}


.ratio-container {
  position: relative;
}
.ratio-container:after {
  content: '';
  display: block;
  height: 0;
  width: 100%;
  padding-bottom: 42.86%;
}
.ratio-container > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.ratio-box {
  position: relative;
  height: 0;
  display: block;
  width: 100%;
}
.ratio-box img,
.ratio-box iframe,
.ratio-box video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.ratio-container {
  position: relative;
}
.ratio-container:after {

}
.ratio-container > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.unknown-ratio-container > * {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.lazyload,
.lazyloading {
  min-height: 200px;
}
```

```sh
yarn add lazyload
npm install lazyload

bower install echojs
npm install echo-js

npm install layzr.js --save
```

```
<img class="lazyload"
  src="thumbnail.jpg"
  data-src="large.jpg"
  data-secret="small.jpg 480w, medium.jpg 640w, large.jpg 1024w"
  width="1024" height="768" />
  
<img class="lazyload"
  src="thumbnail.jpg"
  data-src="normal.jpg"
  data-srcset="normal.jpg 1x, retina.jpg 2x"
  width="1024" height="768" />

<script src=""></script>
<img class="" data-src="img/example.jpg" width="765" height="574" />
<img class="lazyload" src="img/example-humb.jpg" data-src="img/example.jpg" width="765" height="574" />

<img data-normal="normal.jpg">

<img data-normal="normal.jpg" data-retina="retina.jpg">

<img data-normal="normal.jpg" data-retina="retina.jpg" data-srcset="small.jpg 320w, medium.jpg 768w, large.jpg 1024w">

```


