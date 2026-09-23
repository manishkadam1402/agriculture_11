document.getElementById("regForm").addEventListener("submit", function (event) {
    let isValid = true;
 
    // Clear previous errors
    document.querySelectorAll(".error").forEach(function (el) {
        el.textContent = "";
    });
    document.querySelectorAll("input, select").forEach(function (el) {
        el.classList.remove("invalid");
    });
 
    function showError(fieldId, message) {
        document.getElementById(fieldId + "Error").textContent = message;
        document.getElementById(fieldId).classList.add("invalid");
        isValid = false;
    }
 
    // Name: required, letters and spaces only
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        showError("name", "Name is required.");
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        showError("name", "Name must contain letters and spaces only.");
    }
 
    // Mobile: required, 10 digits
    const mobile = document.getElementById("mobile").value.trim();
    if (mobile === "") {
        showError("mobile", "Mobile number is required.");
    } else if (!/^[0-9]{10}$/.test(mobile)) {
        showError("mobile", "Enter a valid 10-digit mobile number.");
    }
 
    // Email: required, valid format
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        showError("email", "Email is required.");
    } else if (!emailPattern.test(email)) {
        showError("email", "Enter a valid email address.");
    }
 
    // Plot ID: required
    const plotid = document.getElementById("plotid").value.trim();
    if (plotid === "") {
        showError("plotid", "Plot ID is required.");
    }
 
    // Village: required
    const village = document.getElementById("village").value.trim();
    if (village === "") {
        showError("village", "Village is required.");
    }
 
    // Soil Moisture: required, 0-100
    const moisture = document.getElementById("moisture").value.trim();
    if (moisture === "") {
        showError("moisture", "Soil moisture is required.");
    } else if (isNaN(moisture) || moisture < 0 || moisture > 100) {
        showError("moisture", "Enter a value between 0 and 100.");
    }
 
    // Crop Stage: required
    const cropstage = document.getElementById("cropstage").value;
    if (cropstage === "") {
        showError("cropstage", "Please select a crop stage.");
    }
 
    // Soil Type: required
    const soiltype = document.getElementById("soiltype").value.trim();
    if (soiltype === "") {
        showError("soiltype", "Soil type is required.");
    }
 
    // Irrigation Method: required
    const irrigation = document.getElementById("irrigation").value;
    if (irrigation === "") {
        showError("irrigation", "Please select an irrigation method.");
    }
 
    // Registration Date: required, cannot be in the future
    const dateValue = document.getElementById("date").value;
    if (dateValue === "") {
        showError("date", "Registration date is required.");
    } else {
        const enteredDate = new Date(dateValue);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (enteredDate > today) {
            showError("date", "Registration date cannot be in the future.");
        }
    }
 
    // Stop submission if invalid
    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault(); // demo mode: no backend
        
        // Show success modal with blur effect
        showSuccessModal();
        
        // Reset form after 1 second
        setTimeout(function() {
            document.getElementById("regForm").reset();
        }, 500);
    }
});
 
// Function to show success modal
function showSuccessModal() {
    // Add blur effect to background
    document.body.classList.add("blur-background");
    
    // Show the modal with animation
    const modal = document.getElementById("successModal");
    modal.classList.add("show");
}
 
// Function to close success modal
function closeSuccessModal() {
    // Remove blur effect from background
    document.body.classList.remove("blur-background");
    
    // Hide the modal
    const modal = document.getElementById("successModal");
    modal.classList.remove("show");
}
 
// Optional: Close modal when clicking outside of it
document.getElementById("successModal").addEventListener("click", function (event) {
    if (event.target === this) {
        closeSuccessModal();
    }
});
 
// Optional: Close modal with Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeSuccessModal();
    }
});