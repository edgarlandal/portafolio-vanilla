let projects;
let experiences;
let lenguages;
let frameworks;
let tools;
let skills;

fetch("../data/projects.json")
  .then((response) => response.json())
  .then(createProjectCards);

fetch("../data/skills.json")
  .then((response) => response.json())
  .then(createSkillsCards);

fetch("../data/experience.json")
  .then((response) => response.json())
  .then(createExperienceCards);

fetch("../data/lenguages.json")
  .then((response) => response.json())
  .then(createLenguagesCards);

fetch("../data/frameworks.json")
  .then((response) => response.json())
  .then(createFrameWorksCards);

fetch("../data/tools.json")
  .then((response) => response.json())
  .then(createToolsCards);

function createProjectCards(json) {
  projects = json;

  const projectsListElement = document.getElementById("projects-list");
  const projectsSize = projects.length;

  for (let i = 0; i < projectsSize; i++) {
    const project = projects[i];
    projectsListElement.innerHTML += `
    <div class="project-card">
        <a href="${project.repository}" target="_blank"></a>

        <img src="${project.img}" alt="">

        <p>${project.name}</p>
        <p>${project.description}</p>
        <p>${project.year}</p>

        <div class="technologies center" id="tech-${i}">

        </div>
    </div>
    `;

    const techListElement = document.getElementById(`tech-${i}`);
    for (let j = 0; j < project.technologies.length; j++) {
      const tech = project.technologies[j];
      techListElement.innerHTML += `
        <div>${tech}</div>
      `;
    }
  }
}

function createExperienceCards(json) {
  experiences = json;

  const experienceListElement = document.getElementById("experience-list");
  const experienceSize = experiences.length;

  for (let i = 0; i < experienceSize; i++) {
    const experience = experiences[i];
    experienceListElement.innerHTML += `
      <div class="experience-card">
        <p style="font-weight: bold; font-size: 20px; padding: 10px 0px;">${experience.entity}</p>
        <p style="font-weight: 400; font-size: 20px; padding: 10px 0px;">${experience.title}</p>
        <p>${experience.description}</p>

        <p>${experience.period}</p>

        <div class="technologies" id="tech-list-${i}">
        </div>
      </div>
      `;

    const techListElement = document.getElementById(`tech-list-${i}`);
    for (let j = 0; j < experience.technology.length; j++) {
      const tech = experience.technology[j];
      techListElement.innerHTML += `
        <div>${tech}</div>
      `;
    }
  }
}

function createLenguagesCards(json) {
  lenguages = json;

  const lenguagesListElement = document.getElementById("lenguages-list");
  const lenguagesSize = lenguages.length;

  for (let i = 0; i < lenguagesSize; i++) {
    const lenguage = lenguages[i];
    lenguagesListElement.innerHTML += `
        <div class="lenguages-card">
            <img src="${lenguage.img}" alt="${lenguage.name}" />
        </div>
        `;
  }
}

function createFrameWorksCards(json) {
  frameworks = json;

  const frameworksListElement = document.getElementById("frameworks-list");
  const frameworksSize = frameworks.length;

  for (let i = 0; i < frameworksSize; i++) {
    const framework = frameworks[i];
    frameworksListElement.innerHTML += `
        <div class="frameworks-card">
            <img src="${framework.img}" alt="${framework.name}" />
        </div>
        `;
  }
}

function createToolsCards(json) {
  tools = json;

  const toolsListElement = document.getElementById("tools-list");
  const toolsSize = tools.length;

  for (let i = 0; i < toolsSize; i++) {
    const tool = tools[i];
    toolsListElement.innerHTML += `
        <div class="tools-card">
            <img src="${tool.img}" alt="${tool.name}" />
        </div>
        `;
  }
}

function createSkillsCards(json) {
  skills = json;

  const skillsListElement = document.getElementById("skill-list");
  const skillsize = skills.length;

  for (let i = 0; i < skillsize; i++) {
    const skill = skills[i];
    skillsListElement.innerHTML += `
        <div class="tools-card">
            <img src="${skill.img}" alt="${skill.name}" />
        </div>
        `;
  }
}
