const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display success message
    successMessage.style.display = "block";

    // Clear form fields
    form.reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);

    // Display submitted details (optional)
    console.log("Submitted Details:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);
});
