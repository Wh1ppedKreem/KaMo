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

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    //change them of site
    document.body.classList.toggle('dark');
    document.querySelector('.title-md').classList.toggle('dark');
    document.querySelector('.credits').classList.toggle('dark');
    document.querySelector('.btn-lg').classList.toggle('dark');
});
