let prevScrollpos = window.pageYOffset;

//On Scroll, dissappear the navbar. On scroll up, reappear the bar.
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos){ //Check for different in scroll location.
        document.getElementById('nav-bar').style.top = '0';
    } else {
        document.getElementById("nav-bar").style.top = "-100px";
    }

    prevScrollpos = currentScrollPos;
}