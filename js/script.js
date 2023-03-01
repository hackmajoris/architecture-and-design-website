/* Open and close menu toggle */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


/* Cookie */

// function to accept the cookie 
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
// function to decline the cookie
function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
}

function declineCookies() {
    document.getElementById("decline").addEventListener("click", function() {
        eraseCookie("cookies_accepted");
        document.getElementById("cookie").style.display = "none";
    });
}

// function to close the cookie
function hideBanner() {
    document.getElementById("cookie").style.display = "none";
}

function onCloseBannerClick() {
    document.getElementById("close").addEventListener("click", hideBanner);
}


/* accordion for architecture and design section */
function services() {
    const faqs = document.querySelectorAll(".services");
    faqs.forEach(services => {
        services.addEventListener("click", () => {
            services.classList.toggle("active");
        })
    })
}


/* show more projects button */

function toggleItemsVisibility() {
    var showMoreBtn = document.getElementById("show-more-btn");
    var moreItems = document.getElementsByClassName("item--more");

    if (showMoreBtn.getAttribute('data-enabled') === 'true') {
        showMoreBtn.innerHTML = "Mai multe proiecte";
        showMoreBtn.setAttribute('data-enabled', 'false')
        for (let i = 0; i < moreItems.length; i++) {
            moreItems[i].classList.add('hidden');
        }
    } else {
        showMoreBtn.innerHTML = "Mai puține proiecte";
        showMoreBtn.setAttribute('data-enabled', 'true')
        for (let i = 0; i < moreItems.length; i++) {
            moreItems[i].classList.remove('hidden');
        }
    }
}


/* filter projects for portfolio section */

// updating active state on filter buttons
function filterProjects(type) {
    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].classList.remove('active');

        if (filterButtons[i].getAttribute('data-target') === type) {
            filterButtons[i].classList.add('active');
        }
    }
    // projects filtering
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = 'none';

        if (type === 'all' || projects[i].getAttribute('data-target') === type) {
            projects[i].style.removeProperty('display');
        }
    }
}