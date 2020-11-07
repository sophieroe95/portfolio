"use strict";

var _projects = _interopRequireDefault(require("./static/data/projects.js"));

var _skills = _interopRequireDefault(require("./static/data/skills.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var toggleButton = document.getElementsByClassName('toggle-button')[0];
var navbarLinks = document.getElementsByClassName('navbar-links')[0]; // added using the toggle with an active class to avoid 'if'

toggleButton.addEventListener('click', function () {
  // get navbar - access all the different classes on it - toggle active class
  navbarLinks.classList.toggle('active');
});

var createProjectHTML = function createProjectHTML(projectObject) {
  return "\n      <div class=\"grid-section\">\n            <div class=\"image-title\">".concat(projectObject.title, "<div class=\"mobile-text\">").concat(projectObject.text, "</div>\n            </div>\n            <div class=\"icon-container\"><a href=\"").concat(projectObject.openGithub, "\" target=\"_blank\"><i\n                        class=\"code far fa-file-code fa-2x\"></i></a>\n                <a href=\"").concat(projectObject.openPage, "\" target=\"_blank\"><i\n                        class=\"code fas fa-rocket fa-2x\"></i></a></div>\n            <img class=\"proj-bg-img\" src=\"").concat(projectObject.image, "\" alt=\"").concat(projectObject.title, "\">\n            <p class=\"image-description\">").concat(projectObject.text, "\n        </p>\n        </div>\n      ");
};

var insertProjects = function insertProjects() {
  //.Get hold of container
  var cardContainer = document.querySelector(".grid-container"); // Empty the container out

  cardContainer.innerHTML = ""; // Insert all teas on to the page

  _projects["default"].forEach(function (keyboard) {
    var projectHTML = createProjectHTML(keyboard);
    cardContainer.innerHTML += projectHTML;
  });
};

insertProjects();

var createSkillsHTML = function createSkillsHTML(skillObject) {
  return "\n      <div class=\"grid-section\">\n            <div class=\"image-title\">".concat(skillObject.title, "\n            </div>\n            <p class=\"image-description\">").concat(skillObject.text, "\n        </p>\n        </div>\n      ");
};

var insertSkills = function insertSkills() {
  //.Get hold of container
  var skillsContainer = document.querySelector(".skills-container"); // Empty the container out

  skillsContainer.innerHTML = ""; // Insert all teas on to the page

  _skills["default"].forEach(function (keyboard) {
    var skillsHTML = createSkillsHTML(keyboard);
    skillsContainer.innerHTML += skillsHTML;
  });
};

insertSkills();