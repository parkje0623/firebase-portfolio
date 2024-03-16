const menuIcon = document.querySelector('.nav-bar-menu-icon');
const name = document.querySelector('.top-nav-bar-name');
const menu = document.querySelector('.top-nav-bar-menu');

const navbar = document.getElementById('top-nav-bar');
const about = document.getElementById('about-btn');
const port = document.getElementById('port-btn');
const contact = document.getElementById('contact-btn');

/* Setup for fade-in effect when scrolling */
var trigger = new ScrollTrigger.default();
trigger.add('[data-trigger]', {
  once: false,
  offset: {
    x: 0,
    y: -300
  },
  addHeight: true
});

/* When scroll outside of navbar, make top navbar little transparent */
window.onscroll = function() {
  if (window.pageYOffset > 30) {
    navbar.style.opacity = 0.9;
  } else {
    navbar.style.backgroundColor  = "#FFFFFF";
    navbar.style.opacity = 1;
  }
}

/* When menu icon clicked, show entire menu list */
// menuIcon.addEventListener('click', () => {
//   name.classList.toggle('active');
//   menu.classList.toggle('active');
// });

/* Clicking each About, Exp, Port, Contact will decrease opacity of others and increase opacity of clicked menu */
function clickAbout() {
  about.style.opacity = "1";
  port.style.opacity = "0.5";
  contact.style.opacity = "0.5";
}

function clickPort() {
  about.style.opacity = "0.5";
  port.style.opacity = "1";
  contact.style.opacity = "0.5";
}

function clickContact() {
  about.style.opacity = "0.5";
  port.style.opacity = "0.5";
  contact.style.opacity = "1";
}
