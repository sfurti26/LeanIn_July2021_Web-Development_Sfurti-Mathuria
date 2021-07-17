function time(){
    var datetime=new Date();
    var hours=datetime.getHours();
    var minutes=datetime.getMinutes();
    var seconds=datetime.getSeconds();
    var am_pm='AM';

  /*  if(hours>12){
        hours=hours-12;
    }
    if(hours==0){
        hours=12;
    }*/
    if(hours>=12){
        am_pm='PM';
    }
    if(hours<10){
        hours='0'+hours;
    }
    if(minutes<10){
        minutes='0'+minutes;
    }
    if(seconds<10){
        seconds='0'+seconds;
    }

    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("AM_PM").innerHTML=am_pm;
    
}
setInterval(time,500);