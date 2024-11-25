/* Carousels */

$(document).ready(function () {
  $(".businesses-carousel").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  });
});

$(document).ready(function () {
  $(".image-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

/* Mobile menu */

function openMobileMenu() {
  document.getElementById("mobile-menu").style.width = "100vw";
}

function closeMobileMenu() {
  document.getElementById("mobile-menu").style.width = "0";
}

/* Video modal */

function openVideoModal() {
  document.getElementById("video-modal").style.display = "block";
}

function closeVideoModal() {
  document.getElementById("video-modal").style.display = "none";
}

/* Search bar toggle */

function openSearchBar() {
  let searchBar = document.getElementById("search-bar");
  if (searchBar.style.display === "flex") {
    searchBar.style.display = "none";
  } else {
    searchBar.style.display = "flex";
  }
}

/* Accordion script */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* Search page styling */
const heroText = document.getElementsByClassName("hero-text");

if (window.location.href.indexOf("search") > -1) {
  for (let i = 0; i < heroText.length; i++) {
    heroText[i].setAttribute("style", "text-align: center; margin-left: 0;");
  }
}
