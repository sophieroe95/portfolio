"use strict";

var toggleButton = document.getElementsByClassName('toggle-button')[0];
var navbarLinks = document.getElementsByClassName('navbar-links')[0]; // added using the toggle with an active class to avoid 'if'

toggleButton.addEventListener('click', function () {
  // get navbar - access all the different classes on it - toggle active class
  navbarLinks.classList.toggle('active');
});