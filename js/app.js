let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");

(() => {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navigation.classList.toggle("is-active");
  });
})();
