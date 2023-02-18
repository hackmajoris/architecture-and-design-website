// Open and close sidebar

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// function to accept the cookie //
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function acceptCookies() {
    document.getElementById("accept").addEventListener("click", function() {
        setCookie("cookies_accepted", true, 365);
        document.getElementById("cookie").style.display = "none";
    });
}
// function to decline the cookie //
function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
}

function declineCookies() {
    document.getElementById("decline").addEventListener("click", function() {
        eraseCookie("cookies_accepted");
        document.getElementById("cookie").style.display = "none";
    });
}

// function to close the cookie //
function hideBanner() {
    document.getElementById("cookie").style.display = "none";
}

function onCloseBannerClick() {
    document.getElementById("close").addEventListener("click", hideBanner);
}