'use strict';

const btnsShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modalDisplays = document.querySelectorAll(".hidden");


btnsShowModal.forEach(button => {
    button.addEventListener("click", showModal)
});

overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

function showModal() {
    modalDisplays.forEach(display => {
        display.classList.remove("hidden");
    });
}

function closeModal() {
    modalDisplays.forEach(display => {
        display.classList.add("hidden");
    })
}

document.addEventListener("keydown", function(e) {
    console.log(e);
    if(e.key == 'Escape' && !overlay.classList.contains("hidden")) {
        closeModal();
    }
});