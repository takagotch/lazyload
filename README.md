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



```

```sh
yarn add lazyload
npm install lazyload
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
```

