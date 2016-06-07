function rnd(n,m){
	return parseInt(Math.random()*(m-n))+n;	
};
function d2a(n){
	return n*Math.PI/180;
};
function toDou(n){
    return n<10?'0'+n:''+n;
};
function DOMReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			fn&&fn();	
		},false);	
	}else{
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				fn&&fn();
			}
		});
	}
}
DOMReady(function(){
	function Box(){
		var aBtn=document.querySelectorAll('input');
		var oFly=document.querySelector('li');
		var oBox=document.querySelector('#box');
		var oHome=document.querySelector('.home');
		var oH=oHome.offsetHeight;
		for(var i=0;i<aBtn.length;i++){
     		;(function(index){
     			aBtn[i].onclick=function(){  
     				elastic(oFly,this.offsetLeft);			
          			for(var i=0;i<aBtn.length;i++){
          				
          				oBox.style.top=-(oH*i-65)+'px'; 
          			}
     			
     			oBox.style.top=-(oH*index-65)+'px';
     		     }
     		})(i);
     	}

	}
	
	
	C2();
	C1();
	Home();
	Box();
	function Home(){
		var aLi=document.querySelectorAll('.verse li')
		var arr=['秋风瑟瑟百花愁 ，','唯有明月挂枝头 。','青衫寒剑坐独亭 ，','浊酒一杯醉心扉 。','举杯望月寒如雪 ，','低头抚剑望解忧 。','寄月空传相思苦 ，','明月千里传思情 。','| 月思'];
		

		function add(obj,arr){
			for (var i = 0; i < arr.length; i++) {
				var oSpan=document.createElement("span");
				oSpan.innerHTML=arr[i];
				obj.appendChild(oSpan);
			};
			var count=0;
			var aSpan=obj.children;
			var timer=setInterval(function(){
				aSpan[count].className="on";
				count++;
				if(count==arr.length){
					clearInterval(timer);
				};
			},100)
		};
		var iNow=0;
		var timer=setInterval(function(){
			add(aLi[iNow],arr[iNow])
			iNow++;
			if(iNow==aLi.length){
				clearInterval(timer);
			};
		},1000)

	};
	
	var WorksBox=document.querySelector('.works_box');
	var aUl=document.querySelectorAll('.worker_cile')
	var oOl=WorksBox.querySelectorAll('.works_box_ol')[0];
	var aLi2=oOl.children;
	//选项卡
	for(var i=0;i<aLi2.length;i++){
	    (function(index){
	        aLi2[i].onclick=function(){
	            for(var i=0;i<aLi2.length;i++){
	                aLi2[i].className='none';
	                aUl[i].style.display='none';
	            }   
	            this.className='on';
	            aUl[index].style.display='block';
	        };
	    })(i);  
	};
	
});	