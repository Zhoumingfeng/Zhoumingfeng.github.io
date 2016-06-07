function DieFish(type){
	this.type=type;
	this.x=0;
	this.y=0;
	this.w=FISH_SIZE[this.type].w;
	this.h=FISH_SIZE[this.type].h;
	this.cur=4;
	this.rotate=0;
	this.move();
}

DieFish.prototype.draw=function(gd){
	gd.save();

	console.log(this.h);
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
DieFish.prototype.move=function(){
	var _this=this;
	setInterval(function(){
		_this.cur++;
		if(_this.cur==8){
			_this.cur=4;
		}
	},100);	
}

DieFish.prototype.song=function(){
	var oA=new Audio();
		
	oA.src='snd/coin.wav';	
	
	oA.play();	
}