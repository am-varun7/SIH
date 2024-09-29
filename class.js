function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function runDemo() {
    const uploadImage = document.getElementById('uploadImage');
    const uploadVideo = document.getElementById('uploadVideo');
    const output = document.getElementById('output');
    const resultsContainer = document.getElementById('resultsContainer');
    const uploadedMedia = document.getElementById('uploadedMedia');
    
    uploadedMedia.innerHTML = ''; // Clear previous uploads

    if (uploadImage.files.length > 0) {
        const imageFile = uploadImage.files[0];
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(imageFile);
        imageElement.style.width = '50%';  // Set width to 20px
        imageElement.style.height = '25%'; // Set height to 20px
        uploadedMedia.appendChild(imageElement);
        resultsContainer.style.display = 'block';
    } else if (uploadVideo.files.length > 0) {
        const videoFile = uploadVideo.files[0];
        const videoElement = document.createElement('video');
        videoElement.src = URL.createObjectURL(videoFile);
        videoElement.controls = true;
        uploadedMedia.appendChild(videoElement);
        resultsContainer.style.display = 'block';
    } else {
        alert('Please upload an image or a video.');
        resultsContainer.style.display = 'none';
    }
}


function showActivityTimelines() {
    alert("Displaying Activity Timelines...");
}

function showEngagementScoring() {
    alert("Displaying Engagement Scoring...");
}

function showHeatmaps() {
    alert("Displaying Heatmaps for Interaction...");
}

function showAnomalyDetection() {
    alert("Displaying Anomaly Detection...");
}

window.onload = function() {
    // Show Home page by default
    navigateTo('home');
};
