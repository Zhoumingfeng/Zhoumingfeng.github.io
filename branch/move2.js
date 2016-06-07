function getStyle(obj,name){
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
function move(obj,json,options){
    clearInterval(obj.timer);
    options=options || {};
    options.time=options.time || 800;
    options.type=options.type || 'ease-out';

    var iCount=Math.ceil(options.time/30);
    var start={};
    var dis={};
    for(var name in json){
        start[name]=parseFloat(getStyle(obj,name));
        if(isNaN(start[name])){
            switch(name){
                case 'width':
                    start[name]=obj.offsetWidth;
                    break;
                case 'height':
                    start[name]=obj.offsetHeight;
                    break;
                case 'left':
                    start[name]=obj.offsetLeft;
                    break;
                case 'top':
                    start[name]=obj.offsetTop;
                    break;
                case 'opacity':
                    start[name]=1;
                    break;
            }
        }
        dis[name]=json[name]-start[name];
    }

    var n=0;
    obj.timer=setInterval(function(){
        n++;
        for(var name in json){
            //n*dis[name]/iCount
            // dis[name]*n/iCount
            switch(options.type){
                case 'linear':
                    var a=n/iCount;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/iCount;
                    var cur=start[name]+dis[name]*Math.pow(a,3);
                    break;
                case 'ease-out':
                    var a=1-n/iCount;
                    var cur=start[name]+dis[name]*(1-Math.pow(a,3));
                    break;
            }
            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+(cur*100)+')';
            }else{
                obj.style[name]=cur+'px';
            }

        }
        if(n==iCount){
            clearInterval(obj.timer);
            options.end && options.end();
        }
    },30);
}







