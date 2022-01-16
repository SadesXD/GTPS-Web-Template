let elementStore = document.getElementById("modal").innerHTML;

function mobileClick() {
  if (window.innerWidth > 768) return;
  document.getElementById("navbar").classList.toggle("hidden");
  document.getElementById("bar").classList.toggle("fa-times");
  document.body.classList.toggle("overflow-hidden");
}

function darkModeClick() {
  let theme = localStorage.theme === "dark" ? "light" : "dark";
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", theme);
  document.getElementById("dark").classList.toggle("fa-sun");
  document.body.classList.toggle("bg-darkMode");
}

function darkModeLoad() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.getElementById("dark").classList.toggle("fa-sun");
    document.body.classList.add("dark");
    document.body.classList.add("bg-darkMode");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.remove("bg-darkMode");
  }
}

function scrollIntoView() {
  let element = document.getElementById("about");
  element.scrollIntoView();
}

function tutorClick(device) {
  let tutor = tutorial(config.ip)[device];
  let element = document.getElementById("modal");
  let result = `<h1 class="modalTitle">${device}</h1>
  <div class="modalX" onclick="modalX()">&times;</div>
  <div class="divide-y-2 divide-opacity-40 divide-gray-200">`;
  for (let i = 0; i < tutor.length; i++) {
    result += `<p class="modalP"><span class="modalSpan">${i + 1}</span>. ${
      tutor[i]
    }</p>`;
  }
  result += `</div>
  <div class="aboutUsButton my-3 inline-block dark:text-white" onclick="backToDevice()">Back</div>`;
  element.innerHTML = result;
}

function backToDevice() {
  document.getElementById("modal").innerHTML = elementStore;
}

function modalX() {
  document.getElementById("modalMain").classList.toggle("hidden");
  document.getElementById("modal").innerHTML = elementStore;
}

function loadConfig() {
  let serverName = document.querySelectorAll(".server_name");
  let serverDescription = document.getElementById("server_description");
  let serverImages = document.querySelectorAll(".server_images");
  serverName.forEach((el) => (el.innerHTML = config.server_name));
  serverDescription.innerHTML = config.server_description;
  serverImages.forEach((el, i) => {
    el.src = config.server_images[i];
  });

  let aboutServer = document.getElementById("aboutServer");
  let creatorName = document.querySelectorAll(".creatorName");
  let creatorRole = document.querySelectorAll(".creatorRole");
  let discordLink = document.getElementById("discord_server_link");
  aboutServer.innerHTML = config.about_server;
  discordLink.src = config.discord_server_link;
  creatorName.forEach((el, i) => {
    el.innerHTML = config.server_creator[i].name;
    creatorRole[i].innerHTML = config.server_creator[i].role;
  });

  let partners = document.getElementById("partners");
  let features = document.querySelectorAll(".featuresConfig");
  let galery = document.querySelectorAll(".galeryConfig");
  if (!config.partners.length) partners.classList.add("hidden");
  features.forEach((el, i) => {
    el.innerHTML = config.features[i];
  });
  galery.forEach((el, i) => {
    el.src = config.galery[i];
  });
}

darkModeLoad();
loadConfig();
