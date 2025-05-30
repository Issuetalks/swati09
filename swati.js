playButton.addEventListener("click", () => {
    bgMusic.play();
    playButton.textContent = "Music Playing...";
});
// Start muted (allowed by browsers)
bgMusic.muted = true;
bgMusic.play()
    .then(() => {
        // After play starts, try unmuting
        bgMusic.muted = false;
    })
    .catch(error => {
        // Show play button if failed
        playButton.style.display = "block";
    });