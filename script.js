function loadNav() {
  const navHTML = `
    <header>
      <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="projects.html">Projects</a>
        <a href="resume.html">Resume</a>
        <a href="contact.html">Contact</a>
      </nav>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", navHTML);
}

function loadFooter() {
  const footerHTML = `
    <div class="footer">
      <p>© ${new Date().getFullYear()} ${siteData.name}. Built with HTML/CSS/JS.</p>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function loadCommonData() {
  setText("name", siteData.name);
  setText("title", siteData.title);
  setText("location", siteData.location);
  setText("bio", siteData.bio);
  setText("hireMeText", siteData.hireMeText);

  const emailLink = document.getElementById("emailLink");
  if (emailLink) emailLink.href = `mailto:${siteData.email}`;

  const emailText = document.getElementById("emailText");
  if (emailText) emailText.textContent = siteData.email;

  const githubLink = document.getElementById("githubLink");
  if (githubLink) githubLink.href = siteData.github;

  const linkedinLink = document.getElementById("linkedinLink");
  if (linkedinLink) linkedinLink.href = siteData.linkedin;
}

function loadSkills() {
  const skillsList = document.getElementById("skillsList");
  if (!skillsList) return;

  skillsList.innerHTML = "";

  siteData.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

function loadProjects() {
  const projectsContainer = document.getElementById("projectsContainer");
  if (!projectsContainer) return;

  projectsContainer.innerHTML = "";

  siteData.projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project-card";

    div.innerHTML = `
      <img src="${project.image}" alt="${project.name} screenshot" class="project-image">
      <h2>${project.name}</h2>
      <p>${project.description}</p>

      <div class="project-buttons">
        <a class="btn" href="${project.live}" target="_blank">Live Demo</a>
        <a class="btn btn-outline" href="${project.github}" target="_blank">GitHub</a>
      </div>
    `;

    projectsContainer.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadNav();
  loadFooter();
  loadCommonData();
  loadSkills();
  loadProjects();
});