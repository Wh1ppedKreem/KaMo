    //get localStorage
    let darkMode = localStorage.getItem("darkMode");
    const checkbox = document.getElementById('checkbox');
    
    function enableDarkMode(){
        $("body").addClass("dark");
        $(".title-md").addClass("dark");
        $(".credits").addClass("dark");
        $(".btn-lg").addClass("dark");

        localStorage.setItem("darkMode", "enabled");
    }
    function disableDarkMode(){
        $("body").removeClass("dark");
        $(".title-md").removeClass("dark");
        $(".credits").removeClass("dark");
        $(".btn-lg").removeClass("dark");

        localStorage.setItem("darkMode", null);
    }

    if(darkMode === "enabled"){
        enableDarkMode();
    }
    
    checkbox.addEventListener('click', () => {
        darkMode = localStorage.getItem("darkMode");
        if(darkMode !== "enabled"){
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
