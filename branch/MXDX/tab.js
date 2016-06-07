function Silder(id){
    if(!id)return;
    this.oBox=document.getElementById(id);
    this.aBtn=this.oBox.getElementsByTagName('input');
    this.aDiv=this.oBox.getElementsByTagName('div');
    this.index=0;
    this.init();
}

Silder.prototype.init=function(){
    var _this=this;
    for(var i=0;i<this.aBtn.length;i++){
        this.aBtn[i].index=i;
        this.aBtn[i].onclick=function(){
            _this.index=this.index;
            _this.fnClick();
        }
    }
};
Silder.prototype.fnClick=function(){
    for(var i=0;i<this.aBtn.length;i++){
        this.aBtn[i].className='';
        this.aDiv[i].style.display='none';
    }
    this.aBtn[this.index].className='ac';
    this.aDiv[this.index].style.display='block';
};