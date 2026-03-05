// Footer dynamic year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        hamburger.textContent = "☰"; // hamburger symbol
    } else {
        navMenu.style.display = "flex";
        hamburger.textContent = "✖"; // close symbol
    }
});
