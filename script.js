document.getElementById('followButton').addEventListener('click', function() {
    // Redirect to SoundCloud page for following (replace with your SoundCloud URL)
    window.open('https://soundcloud.com/achraf', '_blank');

    // Simulate follow verification
    setTimeout(function() {
        document.getElementById('downloadSection').classList.remove('hidden');
    }, 2000); // Simulating time for user to follow
});
