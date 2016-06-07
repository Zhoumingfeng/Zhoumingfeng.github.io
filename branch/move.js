function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}
function Move(obj,json,options){
    options=options || {};
    options.time=options.time || 800;
    options.type=options.type || 'ease-out';
    clearInterval(obj.timer);
    var iCount=Math.ceil(options.time/30);
    var start={};
    var dis={};
    for(var name in json){
       
        start[name]=parseFloat(getStyle(obj,name));
       
        dis[name]=json[name]-start[name];
    }
    var n=0;
    obj.timer=setInterval(function(){
        n++;
       
        for(var name in json){

            switch(options.type){
                case 'linear':
                    var a=n/iCount;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/iCount;
                    var cur=start[name]+dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a=1-n/iCount;
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
            }

            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+(cur)*100+')';
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