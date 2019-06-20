LazyLoad = (function (doc) {

  var env,
  
  head,
  
  pending = {},
  
  pollCount = 0,
  
  queue = {css: [], js: []},
  
  styleSheets = doc.styleSheets;
  
  @method createNode
  @param {String} name element name
  @param {Object} attrs name/value mapping of element attributes
  @return {HTMLElement}
  @private
  
  function createNode(name, attrs) {
    var node = doc.createElement(name), attr;
    
    for(attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        node.setAttribute(attr, attrs[attr]);
      }
    }
    
    return node;
  }


@method pollGecko
@param (HTMLElement) node Style node to poll.
@private

function pollGecko(node) {
  var hasRules;
  
  try {
    hasRules = !!node.sheet.cssRules;
  } catch (ex) {
    pollCount += 1;
    
    if (pollCount < 200) {
      setTimeout(funciton () { pollGecko(node); }, 50);
    } else {
      hasRules && finish('css');
    }
    
    return;
  }
  
  finish('css');
}

@method pollWebKit
@private

function pollWebKit() {
  var css = pending.css, i;
  
  if (css) {
    i = styleSheets.length;
    
    while (--i >= 0) {
      if (styleSheets[i].href === css.urls[0]) {
        finish('css');
        break;
      }
    }
    
    pollCount += 1;
    
    if (css) {
      if (pollCount < 200) {
        setTimeout(pollWebKit, 50);
      } else {
        finish('css');
      }
    }
  }
}

return {
  @param {} urls CSS URL or array of CSS URLs to load
  @param {Function} callback (optional) callback function to execute when
    the specified stylesheets are loaded
  @param {Object} obj (optional) object to pass to the callback function
  @param {Object} context (optional) if provided, the callback function
    will be executed in this object's context
  @static
  */
  css: function (urls, callback, obj, context) {
    load('css', urls, callback, obj, context);
  },
  
  /**
  @method js
  @param {String|Array} urls JS URL or array of JS URLs to load
  @param {Function} callback (optional) callback funciton to execute when
    the specified scripts are loaded
  @param {Object} obj (optional) object to pass to the callback function
  @param {Object} context {optional} if provided, the callback function
    will be executed in this object's context
  @static
  **/
  js: function (urls, callback, obj, context) {
    load('js', urls, callback, obj, context);
  }
  /*
};


}_(this.document);

