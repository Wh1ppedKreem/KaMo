//get localStorage
let darkMode = localStorage.getItem("darkMode");
const checkbox = document.getElementById("checkbox");
const darkModeLogo = document.getElementById("bulb-logo");
const checkboxSlider = document.getElementById("checkbox-slider");

function enableDarkMode() {
  checkboxSlider.click();
  $("#bulb-logo").removeClass("far fa-lightbulb");
  $("#bulb-logo").addClass("fas fa-lightbulb");
  $("body").addClass("dark");
  $(".title-md").addClass("dark");
  $(".credits").addClass("dark");
  $(".btn-lg").addClass("dark");

  localStorage.setItem("darkMode", "enabled");
}
function disableDarkMode() {
  checkboxSlider.click();
  $("#bulb-logo").removeClass("fas fa-lightbulb");
  $("#bulb-logo").addClass("far fa-lightbulb");
  $("body").removeClass("dark");
  $(".title-md").removeClass("dark");
  $(".credits").removeClass("dark");
  $(".btn-lg").removeClass("dark");

  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {

  checkbox.click();
  enableDarkMode();
}

checkbox.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (checkbox.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
checkboxSlider.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (checkboxSlider.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

window.addEventListener("resize", function (event) {
  if (window.innerWidth < 991) {
    document.getElementById("bookmark-ribbon").style.right = "-10px";
  } else {
    document.getElementById("bookmark-ribbon").style.right = "-70px";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY <= 0) {
    document.getElementById("bookmark-ribbon").style.right = "-70px";
  } else {
    document.getElementById("bookmark-ribbon").style.right = "-10px";
  }
});

function collapse() {
  var navLinks = $("#nav-links");
  if (navLinks.attr("class") === "nav-links") {
    $("#nav-links").removeClass("nav-links");
    $("#nav-links").addClass("nav-links-expand");
  } else if (navLinks.attr("class") === "nav-links-expand") {
    $("#nav-links").removeClass("nav-links-expand");
    $("#nav-links").addClass("nav-links");
  }
}
