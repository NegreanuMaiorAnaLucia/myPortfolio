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

//below is the code to activate the day-night switch
const switchButton = document.getElementById('switch');
const body = document.body;

switchButton.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('day-mode');
  } else {
    body.classList.remove('day-mode');
  }
});

// In this JavaScript code, we select the switch button element using 
// document.getElementById('switch'). We also select the body element 
// using document.body to modify its class.

// We add an event listener to the switch button using 
// addEventListener('change', function() {...}). 
// Inside the event listener function, we check if 
// the switch button is checked (this.checked). If 
// it is checked, we add the class 'night-mode' to 
// the body element using body.classList.add('night-mode'). 
// If it is not checked, we remove the class 'night-mode' from 
// the body element using body.classList.remove('night-mode').

// To activate the day-night switch, you need to include the 
// JavaScript code in a <script> tag after the HTML code. 
// Make sure the script is placed before the closing </body> tag 
// or in the <head> section with a DOMContentLoaded event listener 
// to ensure the JavaScript is executed after the HTML elements are loaded.

// Note: The above JavaScript code assumes that you have defined 
// the night mode styles in your CSS by adding a class called 'night-mode'. 
// You can customize the styles for the night mode by adding rules under 
// .night-mode selector in your CSS.