//画随机星空图
function C1(){
	var oDiv=document.querySelector('.werp_l');
	var oC1=document.querySelector('#c1');
	var gd=oC1.getContext('2d');
	
	oC1.width=oDiv.clientWidth;
	oC1.height=oDiv.clientHeight;
	
	
	var aPoint=[];
	var N=8;
	for(var i=0; i<N;i++){
		aPoint[i]={
			x:rnd(0,oC1.width),
			y:rnd(0,oC1.height),
			iSpeedX:rnd(-3,3),
			iSpeedY:rnd(-3,3)
		};	
	}
	
	var LEN=10;
	var oldArr=[]; 
	
	setInterval(function(){
		gd.clearRect(0,0,oC1.width,oC1.height);
		
		for(var i=0;i<aPoint.length;i++){
			aPoint[i].x+=aPoint[i].iSpeedX;
			aPoint[i].y+=aPoint[i].iSpeedY;
			if(aPoint[i].x<0){
				aPoint[i].x=0;
				aPoint[i].iSpeedX*=-1;	
			}
			if(aPoint[i].x>oC1.width){
				aPoint[i].x=oC1.width;
				aPoint[i].iSpeedX*=-1;	
			}
			if(aPoint[i].y<0){
				aPoint[i].y=0;
				aPoint[i].iSpeedY*=-1;	
			}
			if(aPoint[i].y>oC1.height){
				aPoint[i].y=oC1.height;
				aPoint[i].iSpeedY*=-1;	
			}
			
			drawPoint(aPoint[i]);
		}
		
		var arr=[];
		for(var i=0; i<aPoint.length;i++){
			arr[i]={x:aPoint[i].x,y:aPoint[i].y}
		}
		
		oldArr.push(arr);
		
		if(oldArr.length>=LEN){
			oldArr.shift();	
		}
		
		gd.beginPath();
		gd.strokeStyle='#1782a2';
		gd.moveTo(aPoint[0].x,aPoint[0].y);
		for(var i=1;i<aPoint.length;i++){
			gd.lineTo(aPoint[i].x,aPoint[i].y);
		}
		gd.closePath();
		gd.stroke();
		
		
		for(var i=0; i<oldArr.length;i++){
			var oPa=i/oldArr.length;
			gd.beginPath();
			gd.moveTo(oldArr[i][0].x,oldArr[i][0].y);
			gd.strokeStyle='rgba(2,82,105,'+oPa+')';
			for(var j=1;j<oldArr[i].length;j++){
				gd.lineTo(oldArr[i][j].x,oldArr[i][j].y);
			}
			gd.closePath();
			gd.stroke();
		}
		
	},16);
	
	
	function drawPoint(p){
		var pW=5;
		var pH=5;
		
		gd.fillStyle='#1782a2';
		gd.fillRect(p.x-pW/2,p.y-pH/2,pW,pH);
	}

}
	//画彩色时钟
function C2(){
	var oDiv1=document.querySelector('.werp_r');
	var oC2=document.querySelector('#c2');
	oC2.width=oDiv1.clientWidth;
	oC2.height=oDiv1.clientHeight;
	var gd=oC2.getContext('2d');
	var cX=oC2.width/2;
	var cY=oC2.height/2;
	setInterval(function(){
		gd.clearRect(0,0,oC2.width,oC2.height);
		
		//加文字
		gd.beginPath();
		gd.strokeStyle='#dfe710';
		gd.font='20px 黑体';
		gd.textAlign='center';
		gd.lineWidth=1;
		gd.strokeText('圆弧时钟',cX,200);
		gd.closePath();
		
		var oDate=new Date();
		var oH=oDate.getHours();
		var oM=oDate.getMinutes();
		var oS=oDate.getSeconds();
		var oMs=oDate.getMilliseconds();
		
		
		drawArc(40,0,30*(oH%12),5,'red');
		drawArc(50,0,6*oM,5,'#dfe710');
		drawArc(60,0,6*oS+oMs/1000*6,5,'#1782a2');
			
			
		//加数字时钟
		gd.beginPath();
		gd.strokeStyle='#dfe710';
		gd.font='14px 黑体';
		gd.textAlign='center';
		gd.lineWidth=1;
		gd.strokeText(toDou(oH)+':'+toDou(oM)+':'+toDou(oS),cX,cY);
		gd.closePath();
		
	},16);
	
	function drawArc(r,start,end,w,col){
		gd.beginPath();
		gd.strokeStyle=col || '#F90';
		gd.lineWidth=w;
		gd.arc(cX,cY,r,d2a(start-90),d2a(end-90),false);
		gd.stroke();
	}

}