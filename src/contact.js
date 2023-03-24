import mapImage from "./images/map.jpg";

function loadContact() {
  const mainBox = document.querySelector(".main-box");
  mainBox.textContent = "";
  mainBox.appendChild(createContact());
}

function createContact() {
  const contactBox = document.createElement("div");
  contactBox.className = "contact-box";
  //mainBox.appendChild(contactBox);

  const contact = document.createElement("div");
  contact.textContent = "📞 123-456-789";
  contact.className = "contact";
  contactBox.appendChild(contact);

  const address = document.createElement("div");
  address.textContent =
    "🏤 Grand Trunk Rd, Dharamveer Colony, Gharaunda, Haryana - 132114";
  address.className = "address";
  contactBox.appendChild(address);

  const mapImg = document.createElement("img");
  mapImg.src = mapImage;
  mapImg.className = "map-img";
  contactBox.appendChild(mapImg);

  return contactBox;
}

export default loadContact;
