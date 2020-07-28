// 命令式
var authenticate = function(form) {
  var user = toUser(form);
  return logIn(user);
};

// 声明式
var authenticate = compose(logIn, toUser);


// 使用 ramda 的一个通用 getter 函数 _.prop() 来获取这些嵌套的属性。


requirejs.config({
  paths: {
    ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
  }
});


/**
 * 1. 把curry和compose组合
 * 2. 可以使用 ramda 的一个通用 getter 函数 _.prop() 来获取这些嵌套的属性
 */

 /**
  * 例如你可以这样去获取一个嵌套对象的属性
  */

  var mediaUrl = _.compose(_.prop('m'), _.prop('media'));

  /**
   *  然后这样调用map去构造一个新的对象
   */

   var srcs = _.compose(_.map(mediaUrl), _.prop('items'));



require([
    'ramda',
    'jquery'
  ],
  function (_, $) {
    ////////////////////////////////////////////
    // Utils

    var Impure = {
      getJSON: _.curry(function(callback, url) {
        $.getJSON(url, callback);
      }),

      setHtml: _.curry(function(sel, html) {
        $(sel).html(html);
      })
    };

    var img = function (url) {
      return $('<img />', { src: url });
    };

    var trace = _.curry(function(tag, x) {
      console.log(tag, x);
      return x;
    });

    ////////////////////////////////////////////

    var url = function (t) {
      return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + t + '&format=json&jsoncallback=?';
    };

    var mediaUrl = _.compose(_.prop('m'), _.prop('media'));

    var srcs = _.compose(_.map(mediaUrl), _.prop('items'));

    var images = _.compose(_.map(img), srcs);

    var renderImages = _.compose(Impure.setHtml("body"), images);

    var app = _.compose(Impure.getJSON(renderImages), url);

    app("cats");
  });

  // 重构
  // 把声明式列出来之后，可以根据组合率