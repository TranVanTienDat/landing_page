const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const open_menu = $(".menu-responsive");
const menu_mobile = $(".menu-mobile");
const over_lay_menu_mobile = $(".over-lay");

// Chức năng đóng mở menu nav
menu_mobile.addEventListener("click", () => {
  console.log("open_menu");
  open_menu.style.left = "0px";
  open_menu.style.transition = "all .3s linear";
  over_lay_menu_mobile.style.display = "block";
});
over_lay_menu_mobile.addEventListener("click", () => {
  over_lay_menu_mobile.style.display = "none";
  open_menu.style.left = "-250px";
});
