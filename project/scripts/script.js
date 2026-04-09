// ===============================
// Togolese Art and Culture Project
// JavaScript Features Demonstration
// ===============================


const artist = {
    name: "Koffi",
    style: "Traditional Sculpture",
    works: ["Wood carving", "Bronze statue", "Mask design"]
};


const artworks = [
    { title: "Sunset Dance", type: "Painting" },
    { title: "Village Harmony", type: "Sculpture" },
    { title: "Cultural Spirit", type: "Painting" }
];


function displayArtworks() {
    const gallerySection = document.querySelector("main section");
    if (!gallerySection) return;

    let htmlContent = "<h3>Featured Artworks</h3>";

    artworks.forEach(work => {
        htmlContent += `<p><strong>${work.title}</strong> - ${work.type}</p>`;
    });

    gallerySection.insertAdjacentHTML('beforeend', htmlContent);
}


function toggleTheme() {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}


function saveFormData(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Store data as a JSON string
    localStorage.setItem("contactForm", JSON.stringify({ name, email, message }));

    // Create feedback message
    const mainElement = document.querySelector("main");
    const existingFeedback = document.querySelector(".form-feedback");

    // Remove old feedback if user submits twice
    if (existingFeedback) existingFeedback.remove();

    const output = document.createElement("p");
    output.className = "form-feedback";
    output.style.color = "green";
    output.style.marginTop = "1rem";
    output.textContent = `Thank you, ${name}! Your message has been saved locally.`;

    mainElement.appendChild(output);
}

/**
 * Main Initialization on DOM Content Loaded
 */
document.addEventListener("DOMContentLoaded", () => {

    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    //  Handle Gallery Page specific logic
    if (document.title.includes("Gallery")) {
        displayArtworks();
    }

    //  Handle About/Contact Page specific logic
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", saveFormData);

        // Pre-fill form if data exists in localStorage
        const savedData = JSON.parse(localStorage.getItem("contactForm"));
        if (savedData) {
            document.querySelector("#name").value = savedData.name || "";
            document.querySelector("#email").value = savedData.email || "";
        }
    }

    //  Dynamically add theme toggle button to footer
    const footer = document.querySelector("footer");
    if (footer) {
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "🌓 Toggle Theme";
        toggleButton.style.display = "block";
        toggleButton.style.marginTop = "10px";
        toggleButton.addEventListener("click", toggleTheme);
        footer.appendChild(toggleButton);
    }
});