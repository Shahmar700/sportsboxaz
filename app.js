const sections = document.querySelectorAll("section");
const windowHeight = window.innerHeight;
const navigation = document.querySelector(".navigations");
// console.log(windowHeight);

function reset() {
  for (let i = 0; i < navigation.children.length; i++) {
    navigation.children[i].classList.remove("selected");
  }
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  sections.forEach((section, i) => {
    if (
      section.offsetTop < scrollTop + windowHeight / 2 &&
      scrollTop < section.offsetTop + windowHeight / 2
    ) {
      reset();
      navigation.children[i].classList.add("selected");
    }
  });
});

document.querySelectorAll(".navigations li").forEach((item, i) => {
  item.addEventListener("click", () => {
    window.scrollTo({
      top: i * (windowHeight/1.4),
      behavior: "smooth",
    });
  });
});

/* Hamburger Menu */

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
