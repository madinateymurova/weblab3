const profileData = {
  image: "https://via.placeholder.com/150",
  name: "John Doe",
  position: "Cybersecurity Student",
  about: "I'm passionate about defending systems and learning about vulnerabilities."
};

const educationList = [
  "BS in Computer Science - Baku State University (2021-2025)",
  "Ethical Hacking Course - TryHackMe"
];

const experienceList = [
  "Intern - SOC Analyst (2024)",
  "Participant - Cyber Security Bootcamp"
];

const skillsList = [
  "Kali Linux", "Nmap", "Wireshark", "Python", "Burp Suite"
];


document.getElementById("profile-img").src = profileData.image;
document.getElementById("name").textContent = profileData.name;
document.getElementById("position").textContent = profileData.position;
document.getElementById("about-me").textContent = profileData.about;

function populateList(id, data) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

populateList("education-list", educationList);
populateList("experience-list", experienceList);
populateList("skills-list", skillsList);

function editAbout() {
  const aboutText = document.getElementById("about-me");
  const textarea = document.getElementById("about-edit");
  const saveBtn = document.getElementById("save-about-btn");

  textarea.style.display = "block";
  saveBtn.style.display = "inline";
  textarea.value = aboutText.textContent;
  aboutText.style.display = "none";
}

function saveAbout() {
  const aboutText = document.getElementById("about-me");
  const textarea = document.getElementById("about-edit");
  const saveBtn = document.getElementById("save-about-btn");

  profileData.about = textarea.value;
  aboutText.textContent = profileData.about;
  aboutText.style.display = "block";
  textarea.style.display = "none";
  saveBtn.style.display = "none";
}


function addEducation() {
  const input = document.getElementById("new-edu");
  const value = input.value.trim();
  if (value) {
    educationList.push(value);
    populateList("education-list", educationList);
    input.value = "";
  }
}

function addExperience() {
  const input = document.getElementById("new-exp");
  const value = input.value.trim();
  if (value) {
    experienceList.push(value);
    populateList("experience-list", experienceList);
    input.value = "";
  }
}

function addSkill() {
  const input = document.getElementById("new-skill");
  const value = input.value.trim();
  if (value) {
    skillsList.push(value);
    populateList("skills-list", skillsList);
    input.value = "";
  }
}
