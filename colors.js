// javascript code heavily inspired by https://stackoverflow.com/questions/14292997/changing-style-sheet-javascript
var colorpreference = document.getElementById('stylesheet');

document.getElementById('switch-style').addEventListener('click', function () {

    

    if (colorpreference.getAttribute('href') == './styles/main.css') {
        colorpreference.setAttribute('href', './styles/mainLight.css');
        localStorage.setItem('stylesheet', './styles/mainLight.css');
    }
    else {
        colorpreference.setAttribute('href', './styles/main.css');
        localStorage.setItem('stylesheet', './styles/main.css');
        
    }
});

window.onload = function() {
    
    var siteColor = localStorage.getItem('stylesheet');

    if (siteColor) {
        colorpreference.setAttribute('href', siteColor);
    }
 };