const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
    button.addEventListener('click', function() { 
        playDrumSound(this); 
    });
});


document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    const button = document.querySelector(`.${key}.drum`); 
    if (button) {
        playDrumSound(button);
    }
});

function playDrumSound(button) {
    const soundFile = button.getAttribute("data-sound");
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
}
