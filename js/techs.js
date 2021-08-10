import data from "./data.js";

const card = document.querySelector(".card");

data.techs.map((tech) => {
  card.innerHTML += `<div class="card key=${tech._id}">
    <div class="card-body">
    <img class="medium" src="${tech.image}" alt="technician picture" />
        <h3>${tech.name}</h3>
        <h3><a href="${tech.book}">Book me</a></h3>
        <h3><a href="tel:${tech.phone}">Phone</a></h3>
        <h3><a href="mailto:${tech.email}">Email</a></h3>
        <h4>${tech.services}</h4>
        <a href="${tech.instagram}"><i class="fa fa-instagram"></i></a>
        <a href="${tech.facebook}"><i class="fa fa-facebook-f"></i></a>
    </div>
    </div>`;
});
