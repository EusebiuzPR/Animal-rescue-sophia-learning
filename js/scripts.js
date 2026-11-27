console.log("JavaScript Connected");


///////////////// Volunteer Selection //////////////////


const volunteerRole = document.getElementById("volunteer-role");

const volunteerDescription = document.getElementById("volunteer-description")



const volunteerOpportunities = {
    dogWalking: "Help our dogs stay active and healthy through daily walks.",
    catCare: "Provide care, attention, and comfort to our cats and kittens.",
    animalSocialization: "Help animals become comfortable around people.",
    administrative: "Support the shelter with organization and daily administrative tasks."
};

function updatedVolunteerDescription() {

    const selectedRole = volunteerRole.value;

    if (selectedRole) {
        volunteerDescription.textContent = 
        volunteerOpportunities[selectedRole]
    } else {
        volunteerDescription.textContent =
        "Select an opportunity to learn more"
        }
    };

    if (volunteerRole && volunteerDescription) {
        volunteerRole.addEventListener("change", updatedVolunteerDescription)
    };


    ///////////////// Form Validation ///////////////// 

const contactForm = document.querySelector(".form form");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const successMessage = document.getElementById("success-message");

const message = document.getElementById("message")

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();
        nameError.textContent = "";
        emailError.textContent = "";
        successMessage.textContent = "";


        if (fullName.value.trim() === "") {
            nameError.textContent = "Please enter your full name.";
            return;
        }

        if (email.value.trim() === "") {
            emailError.textContent = "Please enter your email."
            return;
        }

        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email address."
            return;
        }

            const userData = {
                fullName: fullName.value.trim(),
                email: email.value.trim(),
                message: message.value.trim()
            };

            localStorage.setItem("userData", JSON.stringify(userData));



        successMessage.textContent = "Your form was submitted successfully! Thank you for supporting our animals."

    });

};


// Data 

const savedData = localStorage.getItem("userData");

if (contactForm && fullName && email && message) {

    if (savedData !== null ) {
        const userData = JSON.parse(savedData);
    
        fullName.value = userData.fullName;
        email.value = userData.email;
        message.value = userData.message;
    };
};




