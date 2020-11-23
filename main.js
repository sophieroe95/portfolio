import allProjects from "./static/data/projects.js";
import allSkills from "./static/data/skills.js";

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// added using the toggle with an active class to avoid 'if'
toggleButton.addEventListener('click', () => {
  // get navbar - access all the different classes on it - toggle active class
  navbarLinks.classList.toggle('active');
})

const createProjectHTML = (projectObject) => {
  return `
      <div class="grid-section">
            <div class="image-title">${projectObject.title}<div class="mobile-text">${projectObject.text}</div>
            </div>
           
            <img class="proj-bg-img" src="${projectObject.image}" alt="${projectObject.title}">
            <p class="image-description">${projectObject.text}
        </p>
        <p class="techstack">${projectObject.techstack}
        </p>
        <div class="icon-container"><a href="${projectObject.openGithub}" target="_blank"><i class="code far fa-file-code fa-2x"></i></a>
        <a href="${projectObject.openPage}" target="_blank"><i class="code fas fa-rocket fa-2x"></i></a></div>
        </div>
      `;
};

const insertProjects = () => {
  //.Get hold of container
  const cardContainer = document.querySelector(".grid-container");
  // Empty the container out
  cardContainer.innerHTML = "";
  // Insert all teas on to the page
  allProjects.forEach((keyboard) => {
    const projectHTML = createProjectHTML(keyboard);
    cardContainer.innerHTML += projectHTML;
  });
};

insertProjects();

const createSkillsHTML = (skillObject) => {
  return `
      <div class="grid-section">
            <div class="image-title">${skillObject.title}
            </div>
            <p class="image-description">${skillObject.text}
        </p>
        
        </div>
      `;
};

const insertSkills = () => {
  //.Get hold of container
  const skillsContainer = document.querySelector(".skills-container");
  // Empty the container out
  skillsContainer.innerHTML = "";
  // Insert all teas on to the page
  allSkills.forEach((keyboard) => {
    const skillsHTML = createSkillsHTML(keyboard);
    skillsContainer.innerHTML += skillsHTML;
  });
};

insertSkills();