define(function(require,exports,module){
    exports.showList=function (data){
        var oUl=document.getElementById('oUl');

        oUl.innerHTML='';
        for(var i=0;i<data.length;i++){
            var oLi=document.createElement('li');
            oLi.innerHTML=data[i];
            oUl.appendChild(oLi);
        }

    }
    exports.fnSearch=function (data){
        var oUl=document.getElementById('oUl1');
        oUl.innerHTML='';

        for(var i=0;i<data.length;i++){
            var oA=document.createElement('a');
            oA.href='javascript:;';
            oA.innerHTML=data[i];
            oA.style.margin=10+'px';
            oUl.appendChild(oA);
        }
    }
});

