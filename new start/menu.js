const burger = document.querySelector(".burger");

const offScreenMenu = document.querySelector(".off-screen-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});