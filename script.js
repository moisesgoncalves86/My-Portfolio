var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("activ-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("activ-tab");
    }
    event.currentTarget.classList.add("activ-link");
    document.getElementById(tabname).classList.add("activ-tab");
}

