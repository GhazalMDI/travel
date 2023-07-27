function check()
{
var a=document.getElementById('pass').value;
if(isNaN(a)==false)
{
    var d=a.length;
    if(d==8) 
    alert("گذرواژه صحیح است");
    else
    alert("کمتر از هشت عدد است");
}
    
    var email1=document.getElementById('email').value;
    if(email1.search('@')==-1)
        alert("ایمیل صحیح است");
    else
    {
        var c=email1.search('@');
        var s=email1.substring(0,c);
        alert(s);
        if(s.length !=4) 
            alert("ایمیل صحیح نیست");
    }
    var pascon=document.getElementById('password').value;
    var pass=document.getElementById('pass').value;
    if(pascon==pass){

    }
    else{
        alert("گذرواژه با تکرار گذرواژه یکسان نیست");
    }
    var ph=document.getElementById('phone').value;
    if(isNaN(ph)==false && ph.length==10){
    }
    else{
        alert("شماره تلفن باید عدد باشد و حداکثر ده رقم باشد");
    }
}
