const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// Now, let's break down the above code:
// ** The header holds the value of the nav element since the querySelector method returns 
// the first element that matches the CSS selector (which is .navbar in this case).
// **window.onscroll fires up when the scroll event happens.
// **window.scrollY returns the number of pixels that the document is scrolled vertically
// and its value is assigned to a variable named top.
// **If the value of top is greater than or equal to 100, it adds a class of navbarDark to the header.

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
