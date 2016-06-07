define(function(require,exports,module){
    var getData=require('m_baidu_sea1').getData;
    var showList=require('v_baidu_sea').showList;
    var fnSearch=require('v_baidu_sea').fnSearch;
    exports.fnInput=function(){
        var oT=document.getElementById('txt');

        oT.onkeyup=function(){
            getData(oT.value,function(arr){
                showList(arr);
            });
        }
        // 点击搜索
        var oT1=document.getElementById('txt1');
        var oBtn=document.getElementById('btn');

        oBtn.onclick=function(){
            getData(oT1.value,function(arr){
                fnSearch(arr);
            })
        }
    }
});