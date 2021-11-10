"use strict";
import "./style.scss";
/* import { toggleSelect } from "./modules/select";
console.log(toggleSelect); */

const Signup = {
  email: "",
  area: [],
};

clickSignup();

function clickSignup() {
  document.querySelectorAll(".btn-signup").forEach((item) => item.addEventListener("click", toggleSelect));
  document.querySelector("form").addEventListener("submit", post);
}

function toggleSelect(event) {
  const isSelected = event.target;
  isSelected.classList.toggle("selected");
  if (isSelected.classList.contains("selected")) {
    getValue(event);
  } else {
    const eventIndex = Signup.area.indexOf(event.target);
    Signup.area.splice(eventIndex, 1);
    countSelected();
  }
}

function getValue(event) {
  const isSelected = event.target;
  let newArea = isSelected.value;
  Signup.area.push(newArea);
  console.log(Signup.area);
  countSelected();
}

function countSelected() {
  console.log(Signup.area.length);
  const selectedAmount = Signup.area.length;
  document.querySelector(".nl-count").innerHTML = selectedAmount;
}

function post() {
  const postData = JSON.stringify(Signup);
  fetch("https://keasem2-551e.restdb.io/rest/ezone", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "606defeaf592f7113340ed01",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((response) => console.log(response));
}
