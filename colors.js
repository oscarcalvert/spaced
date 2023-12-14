
var colorpreference = document.getElementById('stylesheet');
var headercolor = document.getElementById('desktop-header-placeholder')
window.onload = function () {
    var siteColor = localStorage.getItem('stylesheet');
    if (siteColor) {
        colorpreference.setAttribute('href', siteColor);
    }
};
document.getElementById('switch-style').addEventListener('click', function () { //code heavily inspired by https://stackoverflow.com/questions/14292997/changing-style-sheet-javascript
    if (colorpreference.getAttribute('href') == './styles/main.css') {
        colorpreference.setAttribute('href', './styles/mainLight.css');
        localStorage.setItem('stylesheet', './styles/mainLight.css');
    } else {
        colorpreference.setAttribute('href', './styles/main.css');
        localStorage.setItem('stylesheet', './styles/main.css');

    }
});

document.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        headercolor.setAttribute('id', 'desktop-header')
    }
});
document.addEventListener("scroll", function () {
    if (window.scrollY <= 100) {
        headercolor.setAttribute('id', 'desktop-header-placeholder')
    }
})