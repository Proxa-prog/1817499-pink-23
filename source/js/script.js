let mainNavToggle = document.querySelector(".main-nav__toggle--closed");
let navList = document.querySelector(".main-nav__list");
let mainNav = document.querySelector(".main-nav");
let pageHeader = document.querySelector(".page-header");

pageHeader.classList.remove("page-header--nojs");
mainNav.classList.remove("main-nav--nojs");
navList.classList.add("main-nav__list--closed");

mainNav.addEventListener("click", function() {
  if(mainNavToggle.classList.contains("main-nav__toggle--closed")) {
    mainNavToggle.classList.remove("main-nav__toggle--closed");
    mainNavToggle.classList.add("main-nav__toggle--open");
    navList.classList.remove("main-nav__list--closed");
    navList.classList.add("main-nav__list--open");
  }else{
    mainNavToggle.classList.remove("main-nav__toggle--open");
    mainNavToggle.classList.add("main-nav__toggle--closed");
    navList.classList.remove("main-nav__list--open");
    navList.classList.add("main-nav__list--closed");
  }
})
