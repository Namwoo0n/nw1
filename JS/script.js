$(document).ready(function(){
    const date=new Date();
    const hour=date.getHours();
    let message="";
    if(hour>=5&&hour<=10)
        //message="Good Morning";
    if(hour>=11&&hour<=14)
        message="Good Afternoon";
    if(hour>=15&&hour<=18)
        message="Good Everning";
    if(hour>=19&&hour<=24)
        message="Good Night";
    $('#smstext').empty().append(message+ " From Mr.Namwoon!");
})