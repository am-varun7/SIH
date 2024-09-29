// Open or close the sidebar
function toggleNav() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.style.width === "250px") {
        closeNav();
    } else {
        openNav();
    }
}

// Open Sidebar
function openNav() {
    document.querySelector(".sidebar").style.width = "250px";
    document.querySelector(".main-content").style.marginLeft = "250px"; // Adjust main content
}

// Close Sidebar
function closeNav() {
    document.querySelector(".sidebar").style.width = "0";
    document.querySelector(".main-content").style.marginLeft = "0"; // Reset main content margin
}

// Recording Functions (For demonstration, they won't actually record audio)
function startRecording() {
    document.getElementById("recordingStatus").textContent = "Recording Status: Recording...";
}

function stopRecording() {
    document.getElementById("recordingStatus").textContent = "Recording Status: Stopped";
}

// Process Input from Text or Recording (for demo purposes, it just displays the text)
function processInput() {
    const textInput = document.getElementById("textInput").value;
    if (textInput.trim() === "") {
        document.getElementById("output").textContent = "Please enter text.";
    } else {
        document.getElementById("output").textContent = "Processed Output: " + "Section 67";
    }
}

// Login Modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        alert("Login successful!");
        closeLoginModal();
    } else {
        alert("Please enter both username and password.");
    }
}

// Logout Function
function logout() {
    alert("Logged out successfully.");
}

// Feedback Modal
function openFeedbackModal() {
    document.getElementById("feedbackModal").style.display = "block";
}

function closeFeedbackModal() {
    document.getElementById("feedbackModal").style.display = "none";
}

function submitFeedback() {
    const feedback = document.getElementById("feedbackInput").value;
    if (feedback.trim() !== "") {
        alert("Feedback submitted: " + feedback);
        closeFeedbackModal();
    } else {
        alert("Please enter your feedback.");
    }
}

// About Us (for demo purposes)
function showAboutUs() {
    alert("We are an AI-driven company focused on simplifying human tasks.");
}

// History (for demo purposes)
function showHistory() {
    alert("History feature is under development.");
}
