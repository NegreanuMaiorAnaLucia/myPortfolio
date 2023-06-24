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

const switchButton = document.getElementById('switch');
const section_header = document.getElementById('home');
const section_about = document.getElementById('about');
const section_services = document.getElementById('services');
const section_portfolio = document.getElementById('portfolio');
const section_contact = document.getElementById('contact');

switchButton.addEventListener('change', function() {
    if (this.checked) {
        section_header.classList.add('day-mode1');
        section_header.classList.remove('night-mode');

        section_about.classList.add('day-mode2');
        section_about.classList.remove('night-mode');

        section_services.classList.add('day-mode3');
        section_services.classList.remove('night-mode');

        section_portfolio.classList.add('day-mode4');
        section_portfolio.classList.remove('night-mode');

        section_contact.classList.add('day-mode5');
        section_contact.classList.remove('night-mode');
      } else {
        section_header.classList.add('night-mode');
        section_header.classList.remove('day-mode1');

        section_about.classList.add('night-mode');
        section_about.classList.remove('day-mode2');

        section_services.classList.add('night-mode');
        section_services.classList.remove('day-mode3');

        section_portfolio.classList.add('night-mode');
        section_portfolio.classList.remove('day-mode4');

        section_contact.classList.add('night-mode');
        section_contact.classList.remove('day-mode5');
      }
  });