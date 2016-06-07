define(function(require,exports,module){
    exports.jsonp=function(json){
        json=json || {};
        if(!json.url){
            alert('滚 url！');
            return;
        }
        json.data=json.data||{};
        json.cb=json.cb||'cb';

        var fnName='jsonp_'+Math.random();
        fnName=fnName.replace('.','');
        var oHead=document.getElementsByTagName('head')[0];
        window[fnName]=function (json2){
            json.fnSucc && json.fnSucc(json2);
        };
        var arr=[];
        json.data[json.cb]=fnName;
        for(var name in json.data){
            arr.push(name+'='+json.data[name]);
        }
        var oS=document.createElement('script');
        oHead.appendChild(oS);
        oS.src=json.url+'?'+arr.join('&');
        oHead.removeChild(oS);
    };
});