const userData = {
  name: "RICHARD SANCHEZ",
  title: "MARKETING MANAGER",
  profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  profileImage: "photo.png.png",
  contact: [
    "+123-456-7890",
    "hello@reallygreatsite.com",
    "123 Anywhere St., Any City",
    "www.reallygreatsite.com"
  ],
  education: [
    "2029 - 2030 | Wardiere University | Master of Business Management",
    "2025 - 2029 | Wardiere University | Bachelor of Business | GPA: 3.8"
  ],
  skills: [
    "Project Management", "Public Relations", "Teamwork", "Time Management",
    "Leadership", "Effective Communication", "Critical Thinking"
  ],
  languages: [
    "English (Fluent)", "French (Fluent)", "German (Basics)", "Spanish (Intermediate)"
  ],
  experience: [
    "2030 - Present | Borcelle Studio | Marketing Manager & Specialist",
    "2025 - 2029 | Fauget Studio | Marketing Manager & Specialist",
    "2024 - 2025 | Studio Showde | Marketing Manager & Specialist"
  ],
  references: [
    { name: "Estelle Darcy", role: "CTO", company: "Wardiere Inc.", contact: "123-456-7890", email: "hello@reallygreatsite.com" },
    { name: "Harper Richard", role: "CEO", company: "Wardiere Inc.", contact: "123-456-7890", email: "hello@reallygreatsite.com" }
  ]
};


window.onload = () => {
  document.getElementById("name").textContent = userData.name;
  document.getElementById("title").textContent = userData.title;
  document.getElementById("profile-text").textContent = userData.profile;
  document.getElementById("profile-img").src = userData.profileImage;

  loadList("contact-info", userData.contact);
  loadList("education-info", userData.education);
  loadList("skills-info", userData.skills);
  loadList("languages-info", userData.languages);
  loadList("experience-info", userData.experience);
  loadReferences();
};


function loadList(id, array) {
  const container = document.getElementById(id);
  container.innerHTML = "";
  array.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item;
    container.appendChild(div);
  });
}


function loadReferences() {
  const refContainer = document.getElementById("references-info");
  refContainer.innerHTML = "";
  userData.references.forEach(ref => {
    const div = document.createElement("div");
    div.className = "reference-item";
    div.innerHTML = `<p><strong>${ref.name}</strong><br>${ref.company} / ${ref.role}<br>${ref.contact}<br>${ref.email}</p>`;
    refContainer.appendChild(div);
  });
}


function editProfile() {
  document.getElementById("profile-text").style.display = "none";
  const textarea = document.getElementById("profile-edit");
  textarea.style.display = "block";
  textarea.value = userData.profile;
  document.getElementById("save-profile").style.display = "inline";
}

function saveProfile() {
  const newText = document.getElementById("profile-edit").value.trim();
  if (newText) {
    userData.profile = newText;
    document.getElementById("profile-text").textContent = newText;
  }
  document.getElementById("profile-text").style.display = "block";
  document.getElementById("profile-edit").style.display = "none";
  document.getElementById("save-profile").style.display = "none";
}


function addEducation() {
  const val = document.getElementById("new-edu").value.trim();
  if (val) {
    userData.education.push(val);
    loadList("education-info", userData.education);
    document.getElementById("new-edu").value = "";
  }
}


function addSkill() {
  const val = document.getElementById("new-skill").value.trim();
  if (val) {
    userData.skills.push(val);
    loadList("skills-info", userData.skills);
    document.getElementById("new-skill").value = "";
  }
}


function addExperience() {
  const val = document.getElementById("new-exp").value.trim();
  if (val) {
    userData.experience.push(val);
    loadList("experience-info", userData.experience);
    document.getElementById("new-exp").value = "";
  }
}
