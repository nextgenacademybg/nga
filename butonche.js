document.addEventListener("DOMContentLoaded", function () {
    var menuto = document.getElementById("menuto");
    var stranici = document.getElementById("stranici");

    // Check if both elements exist
    if (menuto && stranici) {
        // Toggle the visibility of the menu
        menuto.addEventListener("click", function () {
            stranici.classList.toggle("show");
        });
    }
});

// Define the scrollToTop function globally




