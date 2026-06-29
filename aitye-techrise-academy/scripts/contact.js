const contact = document.querySelector("#contact");

if (contact) {
    contact.addEventListener("submit", (event) => {
        event.preventDefault();

        const Data = {
            name: document.querySelector("#name")?.value || "",
            email: document.querySelector("#email")?.value || "",
            message: document.querySelector("#message")?.value || ""
        };

        localStorage.setItem(
            "contactSubmission",
            JSON.stringify(formData)
        );

        alert("Thank you! Your message has been received.");

        contact.reset();
    });
}