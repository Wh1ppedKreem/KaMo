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