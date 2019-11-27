document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

const projectsLink = document.getElementById("projectsLink"),
  aboutLink = document.getElementById("aboutLink"),
  contactLink = document.getElementById("contactLink"),
  aboutText = document.getElementById("aboutText"),
  projects = document.getElementById("projects"),
  about = document.getElementById("about"),
  ned = document.getElementById("ned"),
  eng = document.getElementById("eng");

ned.addEventListener("click", nedSelect);
eng.addEventListener("click", engSelect);

let projectsEnd = projects.clientHeight - 220,
  aboutEnd = about.clientHeight + projectsEnd;

function projectsSelect() {
  projectsLink.style.color = "#aaf";
  aboutLink.style.color = "#fff";
  contactLink.style.color = "#fff";
  projectsLink.style.textShadow = "0 0 10px #fff";
  aboutLink.style.textShadow = "none";
  contactLink.style.textShadow = "none";
}

function aboutSelect() {
  projectsLink.style.color = "#fff";
  aboutLink.style.color = "#aaf";
  contactLink.style.color = "#fff";
  projectsLink.style.textShadow = "none";
  aboutLink.style.textShadow = "0 0 10px #fff";
  contactLink.style.textShadow = "none";
}

function contactSelect() {
  projectsLink.style.color = "#fff";
  aboutLink.style.color = "#fff";
  contactLink.style.color = "#aaf";
  projectsLink.style.textShadow = "none";
  aboutLink.style.textShadow = "none";
  contactLink.style.textShadow = "0 0 10px #fff";
}

function nedSelect() {
  ned.style.textShadow = "0 0 10px #fff";
  ned.style.color = "#aaf";
  eng.style.textShadow = "none";
  eng.style.color = "#fff";
  aboutText.innerHTML = `<div>​Ik hou ervan dat alles mogelijk is met software, en ik ben op mijn best als ik een 
    probleem moet oplossen.</div>
    <div>Mijn universitaire studie is filosofie, en ik ondervind dat de precisie en logische 
    analyse vanuit de filosofie een goede basis is voor het proces van software ontwikkelen.</div>
    </div>`;
}

function engSelect() {
  ned.style.textShadow = "none";
  ned.style.color = "#fff";
  eng.style.textShadow = "0 0 10px #fff";
  eng.style.color = "#aaf";
  aboutText.innerHTML = `<div>I love the feeling that anything is possible with software, and am 
    happiest when I have a problem to solve.</div>
    <div>My university degree is in philosophy, and I find that the precision and logical 
    analysis that philosophy teaches is a good preparation for the process of writing software.</div>
    </div>`;
}

window.onscroll = function() {
  if (window.pageYOffset < projectsEnd) {
    this.projectsSelect();
  } else if (
    window.pageYOffset > projectsEnd &&
    window.pageYOffset < aboutEnd
  ) {
    this.aboutSelect();
  } else if (window.pageYOffset > aboutEnd) {
    this.contactSelect();
  }
};

projectsSelect();
nedSelect();
