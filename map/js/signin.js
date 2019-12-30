function signin() {
    var user = document.getElementById("username");
    var psw = document.getElementById("psw");
    console.log(user.value);
    console.log(psw.value);
    if(user.value == getCookie("username")
     && psw.value == getCookie("psw")) {
        window.location.href="./polygon/polygon_fav.html";
    } else {
        alert("Wrong Password!");
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