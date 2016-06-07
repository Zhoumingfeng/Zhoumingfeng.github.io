function get2Url(data){
    var arr=[];
    data.t=Math.random();

    for(var name in data){
        arr.push(name+'='+data[name])
    }
    return arr.join('&');
}
function ajax(json){
    json=json || {};
    if(!json.url){
        alert('去你大爷的！连地址都不传！');
        return;
    }

    json.time=json.time || 30000;
    json.type=json.type || 'GET';
    json.data=json.data ||{};

    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
    }
    var timer=null;
    switch(json.type.toUpperCase()){
        case 'GET':
            oAjax.open('GET',json.url+'?'+get2Url(json.data),true);
            oAjax.send();
            break;
        case 'POST':
            oAjax.open('POST',json.url,true);
            oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            oAjax.send(get2Url(json.data));
            break;
    }

    json.Loading && json.Loading();

    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status>=200 && oAjax.status<300 ||oAjax.status==304){
                json.success && json.success(oAjax.responseText);
            }else{
                json.error && json.error(oAjax.status);
            }
            clearTimeout(timer);
        }
    }

    timer=setTimeout(function(){
        alert('网络超时！');
        oAjax.onreadystatechange=null;
    },json.time);

}