var JSON={};


function rnd(n,m){
	return parseInt(Math.random()*(m-n)+n);
}

function d2a(n){
	return n*Math.PI/180;
}

function a2d(n){
	return n*180/Math.PI;	
}

function loadImage(arr,fnSucc,fnLoading){
	var cur=0;
	for(var i=0;i<arr.length;i++){
		var oImg=new Image();
		(function(index){
			oImg.onload=function(){
				JSON[arr[index]]=this;
				cur++;
				fnLoading&&fnLoading(cur,arr.length);
				if(cur==arr.length){
					fnSucc&&fnSucc();
				}
			};	
		})(i);
		
		oImg.src='img/'+arr[i]+'.png';	
	}
}
