//
var clientHeight = (window.innerHeight || document.documentElement.clientHeight);
var scrollTop = (document.body.scrollTop || document.documentElement.scrollTop);

//2
$(window).bind("scroll", function(){
  var clientHeight = (window.innerHeihgt || document.documentElement.clientHeight);

  var scrollTop = (document.body.scrollTop || document.documentElement.scrollTop);

  var form = scrollTop - (clientHeight/2);
  var to   = scrollTop + clientHeight;

  $(".image").each(function(){
    var $dom = $(this);
    cache.onload = function(){
      var $image = $("<img>")
	    .attr("src", url)
	    .attr("alt", $dom.attr("alt"))
	    .css({
	      width: $dom.width(),
	      height: $dom.height()
	    }).addClass("image");
      $(dom).replaceWith("image");
    }
  });
});

//
$(window).bind("scroll", function(){
  $().each(function(){
    var img = this;
    if(this.offsetTop >= from && this.offsetTop < to){
    //2
    }else{
      if(dom.nodeName === "IMG"){
        var $space = $("<div>")
	      .attr("src", dom.src)
	      .attr("alt", dom.alt)
	      .css({
	        width: dom.width,
		height: dom.height,
		display: "inline-block"      
	      }).addClass("image");
	      $(dom).replceWith($spacer);
      }
    }
  });
});


