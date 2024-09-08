var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
// Form elements
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var educationInput = document.getElementById("education");
var workExperienceInput = document.getElementById("work-experience");
var skillsInput = document.getElementById("skills");
var profilePicInput = document.getElementById("profile-pic");
// Display elements
var displayName = document.getElementById("display-name");
var displayEmail = document.getElementById("display-email");
var displayPhone = document.getElementById("display-phone");
var displayEducation = document.getElementById("display-education");
var displayWorkExperience = document.getElementById("display-work-experience");
var displaySkills = document.getElementById("display-skills");
var displayProfilePic = document.getElementById("display-profile-pic");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get values from form inputs
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var education = educationInput.value;
    var workExperience = workExperienceInput.value;
    var skills = skillsInput.value.split(","); // Multiple skills separated by commas
    // Display Profile Picture
    var file = profilePicInput.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        displayProfilePic.src = e.target.result;
    };
    reader.readAsDataURL(file);
    // Populate resume display
    displayName.textContent = name;
    displayEmail.textContent = "Email: ".concat(email);
    displayPhone.textContent = "Phone: ".concat(phone);
    displayEducation.textContent = education;
    displayWorkExperience.textContent = workExperience;
    // Display skills
    displaySkills.innerHTML = "";
    skills.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });
    // Show resume section
    resumeDisplay.style.display = "block";
});
