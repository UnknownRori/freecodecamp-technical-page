let navStatus = 0;
function HideNavbar() {
    const nav = document.getElementById("collapseNavbar");
    const content = document.getElementById("main-doc");
    if (navStatus == 0) {
        nav.classList.add("hidden");
        content.classList.add("navbarhidden");
        navStatus = 1;
    }else {
        nav.classList.remove("hidden");
        content.classList.remove("navbarhidden");
        navStatus = 0;
    }
}