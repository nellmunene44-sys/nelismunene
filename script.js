/* ============================================================
   GLOBAL SCRIPT FILE
   Used across all pages (index.html, blog.html, etc.)
   Author: Nelis Munene Website
============================================================ */

/* ============================================================
   1. FOOTER YEAR (AUTO-UPDATE)
   Keeps copyright year current
============================================================ */
(function updateFooterYear() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
})();

/* ============================================================
   2. FAQ ACCORDION (HOME PAGE)
   Handles expandable FAQ items safely
============================================================ */
(function accordionHandler() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    // Exit gracefully if no accordion exists on the page
    if (!accordionHeaders.length) return;

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;

            // Close all other accordion items
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove("active");
                    otherHeader.nextElementSibling.style.display = "none";
                }
            });

            // Toggle current accordion item
            header.classList.toggle("active");

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
})();

/* ============================================================
   3. SMOOTH SCROLL FOR INTERNAL LINKS (OPTIONAL ENHANCEMENT)
   Improves UX for anchor-based navigation
============================================================ */
(function smoothScroll() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
})();

/* ============================================================
   4. BASIC FORM SUBMISSION HANDLING (FRONT-END ONLY)
   Prevents page reload and provides UX feedback
============================================================ */
(function formHandler() {
    const forms = document.querySelectorAll("form");

    if (!forms.length) return;

    forms.forEach(form => {
        form.addEventListener("submit", event => {
            event.preventDefault();

            // Simple confirmation feedback (can be replaced with backend later)
            alert(
                "Thank you for reaching out. Your message has been received, and I will respond promptly."
            );

            // Reset form after submission
            form.reset();
        });
    });
})();

/* ============================================================
   CONTACT PAGE JAVASCRIPT
   Handles WhatsApp redirection logic
============================================================ */

/* ============================================================
   CONTACT PAGE WHATSAPP BUTTON LOGIC
   Ensures valid WhatsApp URL with prefilled message
============================================================ */
(function whatsappHandler() {
    const whatsappInput = document.getElementById("whatsappNumber");
    const whatsappButton = document.querySelector(".whatsapp-btn");

    if (!whatsappInput || !whatsappButton) return;

    whatsappButton.addEventListener("click", event => {
        event.preventDefault();

        const userNumber = whatsappInput.value.trim();
        if (userNumber === "") {
            alert("Please enter your WhatsApp number before proceeding.");
            return;
        }

        // Your WhatsApp number in international format WITHOUT '+'
        const businessNumber = "254704096155";

        // Prefilled message
        const message = encodeURIComponent(
            "Hello Nelis, I would like professional academic writing assistance. My WhatsApp number is: " + userNumber
        );

        // Construct valid WhatsApp URL
        const whatsappURL = `https://wa.me/${businessNumber}?text=${message}`;

        window.open(whatsappURL, "_blank");
    });
})();


/* ============================================================
   SAMPLES PAGE JS
   Handles Preview Button click
============================================================ */

(function samplePreviewHandler() {
    const previewButtons = document.querySelectorAll(".preview-btn");

    if (!previewButtons.length) return;

    previewButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            alert(
                "Sample preview is restricted for confidentiality.\n" +
                "Please request similar work via the 'Request Similar Work' button."
            );
        });
    });
})();


document.querySelectorAll(".preview-btn").forEach(btn => {
    btn.addEventListener("click", function(e){
        const href = this.getAttribute("href");
        if(href === "#") {
            e.preventDefault();
            alert("Sample preview is restricted. Please request similar work via the 'Request Similar Work' button.");
        }
    });
});






<script>
document.addEventListener("DOMContentLoaded", function () {

    const grid = document.querySelector(".samples-grid");
    if (!grid) {
        console.warn("samples-grid not found");
        return;
    }

    const cards = Array.from(grid.querySelectorAll(".sample-card"));

    const searchInput = document.getElementById("searchInput");
    const disciplineFilter = document.getElementById("disciplineFilter");
    const citationFilter = document.getElementById("citationFilter");

    function safeLower(value) {
        return (value || "").toString().toLowerCase().trim();
    }

    function filterSamples() {
        const searchValue = searchInput ? safeLower(searchInput.value) : "";
        const disciplineValue = disciplineFilter ? disciplineFilter.value : "";
        const citationValue = citationFilter ? citationFilter.value : "";

        let visibleCount = 0;

        cards.forEach(card => {
            const title = safeLower(card.dataset.title);
            const discipline = safeLower(card.dataset.discipline);
            const citation = safeLower(card.dataset.citation);
            const textContent = safeLower(card.textContent);

            const matchesSearch =
                !searchValue ||
                title.includes(searchValue) ||
                discipline.includes(searchValue) ||
                citation.includes(searchValue) ||
                textContent.includes(searchValue);

            const matchesDiscipline =
                !disciplineValue || card.dataset.discipline === disciplineValue;

            const matchesCitation =
                !citationValue || card.dataset.citation === citationValue;

            const shouldShow = matchesSearch && matchesDiscipline && matchesCitation;

            if (shouldShow) {
                card.classList.remove("is-hidden");
                visibleCount++;
            } else {
                card.classList.add("is-hidden");
            }
        });

        handleNoResults(visibleCount);
    }

    function handleNoResults(count) {
        let noResults = grid.querySelector(".no-results");

        if (count === 0) {
            if (!noResults) {
                noResults = document.createElement("div");
                noResults.className = "no-results";
                noResults.textContent = "No samples found matching your criteria.";
                grid.appendChild(noResults);
            }
        } else if (noResults) {
            noResults.remove();
        }
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterSamples);
    }

    if (disciplineFilter) {
        disciplineFilter.addEventListener("change", filterSamples);
    }

    if (citationFilter) {
        citationFilter.addEventListener("change", filterSamples);
    }

});
</script>


