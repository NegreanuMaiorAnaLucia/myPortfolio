const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 50) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

const toggleButton = document.getElementById('switch');
const styleElement = document.getElementById('style');
let isNightMode = false;

toggleButton.addEventListener('change', function() {
  if (isNightMode) {
    styleElement.setAttribute('href', 'style_day.css');
    isNightMode = false;
  } else {
    styleElement.setAttribute('href', 'style_night.css');
    isNightMode = true;
  }
});
