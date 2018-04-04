if (!checkCookie("acceptcookies"))
    document.write('<script type="text/javascript" id="cookieinfo" src="js/cookieinfo.min.js" data-bg="#373737" data-fg="#ACA9A9" data-cookie="acceptcookies" data-moreinfo="cookies.html"></script>');

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var cookie = getCookie(cname);
    if (cookie != "") {
        return true;
    } else {
        return false;
    }
}