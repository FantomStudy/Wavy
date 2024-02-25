const container = document.querySelector(".container");
const reglink = document.querySelector(".reglink");
const signlink = document.querySelector(".signlink");
const phone = document.querySelector(".phone");
const body = document.querySelector("body");

reglink.addEventListener("click", () => {
    body.classList.add("active");
    container.classList.add("active");
    phone.classList.add("active");
})
signlink.addEventListener("click", () => {
    body.classList.remove("active");
    container.classList.remove("active");
    phone.classList.remove("active");
})