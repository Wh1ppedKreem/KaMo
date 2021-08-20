function collapse(){
    var navLinks = document.querySelector("#nav-links").className;
    if(navLinks === "nav-links"){
        navLinks = "nav-links-expand";
    }else if(navLinks === "nav-links-expand"){
        navLinks = "nav-links";
    }
    console.log(navLinks);
}