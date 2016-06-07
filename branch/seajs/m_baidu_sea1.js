define(function(require,exports,module){
    var jsonp=require('jsonp').jsonp;
    exports.getData=function (value,fn){
        var URL='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su'
        jsonp({
            url:URL,
            data:{
                wd:value
            },
            fnSucc:function(json){
                fn && fn(json.s);
            }
        });
    }

});
