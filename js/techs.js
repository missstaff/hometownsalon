// IMPORT STATEMENTS
import data from "./data.js";

// ELEMENT VARIABLES
const cardEl = document.querySelector(".card");
const messageEl = document.createElement("div");
const headerEl = document.querySelector(".top");

/**
 * Map function iteratates over data array of technician objects rendering each techs' information
 * (*) tech
 * returns card.innerHTML
 */
data.techs.map((tech) => {
  cardEl.innerHTML += `<div class="card key=${tech._id}">
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

messageEl.innerHTML = `We use cookies for improved functionality and analytics &nbsp <button class="btn btn--close-cookie btn--text">Got It!</button>`;

//console.log(messageEl.innerHTML);

headerEl.append(messageEl);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    messageEl.remove();
  });
