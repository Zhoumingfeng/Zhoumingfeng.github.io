var timer=null;
var left=0;
var speed=0;
function elastic(obj,iTarget){
    clearInterval(timer);
    timer=setInterval(function(){
        speed-=(left-iTarget)/20;
        speed*=0.8;
        left+=speed;

      
        obj.style.left=Math.round(left)+'px';
        if(Math.round(left)==iTarget && Math.round(speed)==0){
            clearInterval(timer);
        }
    },30);
}