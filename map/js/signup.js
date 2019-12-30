function pswcheck() {
    var user = document.getElementById("username")
    var psw = document.getElementById("psw")
    var pswrpt = document.getElementById("pswrpt")
    // console.log(psw.value)
    // console.log(pswrpt.value)
    if(psw.value == pswrpt.value) {
        //TODO 用户信息加密后存入数据库
        document.cookie="username=" + user.value;
        document.cookie="psw=" + psw.value;
        // console.log(getCookie("username"))
        // console.log(getCookie("psw"))
        alert("Log Up Success")
        window.location.href="polygon_fav.html";
    } else {
        alert("Twice password different!")
    }
}

function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}