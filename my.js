window.onload=function(){getTime()};
function getTime(){
    var today= new Date();
    var h= today.getHours();
    var m= today.getMinutes();
    var s= today.getSeconds();
    m= check(m);
    s = check(s);
    document.getElementById('demo').innerHTML=h+ " :"+ m+" :"+s;
    setTimeout(()=>{
        getTime();

    }, 1000);
}
function check(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}