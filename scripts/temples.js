// Footer dynamic year and last modified
document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        hamburger.innerHTML = "&#9776;"; // hamburger symbol
    } else {
        navMenu.style.display = "flex";
        hamburger.innerHTML = "&times;"; // close symbol
    }
});
