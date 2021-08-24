//get localStorage
let darkMode = localStorage.getItem("darkMode");
const checkbox = document.getElementById('checkbox');
const darkModeLogo = document.getElementById("bulb-logo");
const checkbox2 = document.getElementById('checkbox2');

function enableDarkMode(){
    $("#bulb-logo").removeClass("far fa-lightbulb");
    $("#bulb-logo").addClass("fas fa-lightbulb");
    $("body").addClass("dark");
    $(".title-md").addClass("dark");
    $(".credits").addClass("dark");
    $(".btn-lg").addClass("dark");

    localStorage.setItem("darkMode", "enabled");
}
function disableDarkMode(){
    $("#bulb-logo").removeClass("fas fa-lightbulb");
    $("#bulb-logo").addClass("far fa-lightbulb");
    $("body").removeClass("dark");
    $(".title-md").removeClass("dark");
    $(".credits").removeClass("dark");
    $(".btn-lg").removeClass("dark");

    localStorage.setItem("darkMode", null);
}

if(darkMode === "enabled"){
    checkbox.click();
    enableDarkMode();
}

checkbox.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if(checkbox.checked){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});

function collapse(){
var navLinks = $("#nav-links");
if(navLinks.attr("class") === "nav-links"){
    $("#nav-links").removeClass("nav-links");
    $("#nav-links").addClass("nav-links-expand");
}else if(navLinks.attr("class") === "nav-links-expand"){
    $("#nav-links").removeClass("nav-links-expand");
    $("#nav-links").addClass("nav-links");
}
}
function enableDarkMode(){
    $("#bulb-logo").removeClass("far fa-lightbulb");
    $("#bulb-logo").addClass("fas fa-lightbulb");
    $("body").addClass("dark");
    $(".title-md").addClass("dark");
    $(".credits").addClass("dark");
    $(".btn-lg").addClass("dark");

    localStorage.setItem("darkMode", "enabled");
}
function disableDarkMode(){
    $("#bulb-logo").removeClass("fas fa-lightbulb");
    $("#bulb-logo").addClass("far fa-lightbulb");
    $("body").removeClass("dark");
    $(".title-md").removeClass("dark");
    $(".credits").removeClass("dark");
    $(".btn-lg").removeClass("dark");

    localStorage.setItem("darkMode", null);
}

if(darkMode === "enabled"){
    checkbox2.click();
    enableDarkMode();
}

checkbox2.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if(checkbox2.checked){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});
