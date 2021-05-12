"use strict";

const buttons = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const saveBtn = document.querySelector("#save");
const loadBtn = document.querySelector("#load");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.execCommand(button.id, false, null);
  });
});

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

saveBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
