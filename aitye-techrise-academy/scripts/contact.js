onst contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = {
            name: document.querySelector("#name")?.value || "",
            email: document.querySelector("#email")?.value || "",
            message: document.querySelector("#message")?.value || ""
        };

        localStorage.setItem(
            "contactSubmission",
            JSON.stringify(formData)
        );

        alert("Thank you! Your message has been received.");

        contactForm.reset();
    });
}