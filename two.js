let bar = document.querySelector(".menu"),
  ultag = document.querySelector(".links");
bar.addEventListener("click", () => {
  ultag.classList.toggle("showmenu");
  bar.children[0].classList.toggle("arrow-1");
  bar.children[1].classList.toggle("arrow-2");
  bar.children[2].classList.toggle("arrow-3");
});
