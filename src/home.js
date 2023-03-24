import chefImage from "./images/chef.jpg";

function createHome() {
  const homeBox = document.createElement("div");
  homeBox.className = "home-box";

  const heroText = document.createElement("div");
  heroText.textContent = "The only cafe in Gharaunda";
  heroText.className = "hero-text";
  homeBox.appendChild(heroText);

  const heroSubtext = document.createElement("div");
  heroSubtext.textContent = "Birthday celebration spot since 2018";
  heroSubtext.className = "hero-subtext";
  homeBox.appendChild(heroSubtext);

  const chefImg = document.createElement("img");
  chefImg.src = chefImage;
  chefImg.className = "chef-img";
  homeBox.appendChild(chefImg);

  const ctaText = document.createElement("div");
  ctaText.textContent = "Come to store because we rarely do home delivery";
  ctaText.className = "cta-text";
  homeBox.appendChild(ctaText);

  return homeBox;
}

function loadHome() {
  const mainBox = document.querySelector(".main-box");
  mainBox.textContent = "";
  mainBox.appendChild(createHome());
}

export default loadHome;
