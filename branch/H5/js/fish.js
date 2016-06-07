//画鱼
var FISH_SIZE=[
	null,
	{w: 55, h: 37, collR: 17},
	{w: 78, h: 64, collR: 24},
	{w: 72, h: 56, collR: 20},
	{w: 77, h: 59, collR: 22},
	{w: 107, h: 122, collR: 29}
];


function Fish(type){
	this.type=type;
	this.x=100;
	this.y=100;
	this.iSpeed=0.5;
	this.cur=0;
	this.w=FISH_SIZE[this.type].w;
	this.h=FISH_SIZE[this.type].h;
	this.rotate=10;
	
	this.move();
}

Fish.prototype.draw=function(gd){
	gd.save();
	gd.translate(this.x,this.y);
	gd.rotate(d2a(this.rotate));
	
	if(this.rotate>90 && this.rotate<270){
		gd.scale(1,-1);
	}
	
	gd.drawImage(JSON['fish'+this.type],
		0,this.cur*this.h,this.w,this.h,
		-this.w/2,-this.h/2,this.w,this.h
	);	
	gd.restore();
};

Fish.prototype.move=function(){
	var _this=this;
	
	setInterval(function(){
		_this.x+=Math.cos(d2a(_this.rotate))*_this.iSpeed;
		_this.y+=Math.sin(d2a(_this.rotate))*_this.iSpeed;
	},16);
	
	setInterval(function(){
		_this.cur++;
		if(_this.cur==4){
			_this.cur=0;
		}
	},300);
};

Fish.prototype.isIn=function(x,y){
	var a=this.x-x;
	var b=this.y-y;
	
	var c=Math.sqrt(a*a+b*b);
	if(c<FISH_SIZE[this.type].collR){
		return true;		
	}else{
		return false;	
	}
}











