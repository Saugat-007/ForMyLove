// Auto-play background music when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Music banner will appear for user to click
    // Banner click will trigger the music
});

// Start music from banner
function startMusicBanner() {
    const bgm = document.getElementById('bgm');
    const banner = document.getElementById('musicBanner');
    
    bgm.volume = 0.5; // Set volume to 50%
    bgm.play().then(() => {
        // Hide banner after successful play
        banner.style.display = 'none';
    }).catch(function(error) {
        console.log('Autoplay prevented:', error);
    });
}

// Show heart message when heart button is clicked
function showHeart(message) {
    const heartMessage = document.getElementById('heartMessage');
    heartMessage.textContent = message;
    
    // Reset animation by removing and re-adding the class
    heartMessage.style.animation = 'none';
    setTimeout(() => {
        heartMessage.style.animation = 'popIn 0.5s ease';
    }, 10);
    
    // Create floating heart effect
    createFloatingHeart(message);
}

// Create a floating heart that rises up the screen
function createFloatingHeart(emoji) {
    const floatingHeart = document.createElement('div');
    floatingHeart.textContent = emoji.split(' ')[0]; // Get just the emoji
    floatingHeart.style.position = 'fixed';
    floatingHeart.style.left = Math.random() * 100 + '%';
    floatingHeart.style.top = '50%';
    floatingHeart.style.fontSize = '2em';
    floatingHeart.style.pointerEvents = 'none';
    floatingHeart.style.zIndex = '9999';
    floatingHeart.style.animation = 'floatUp 2s ease-in forwards';
    
    document.body.appendChild(floatingHeart);
    
    // Remove the element after animation
    setTimeout(() => floatingHeart.remove(), 2000);
}

// Add floatUp keyframes animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(1.5);
        }
    }
`;
document.head.appendChild(style);

// Play background music
function playBGM() {
    const bgm = document.getElementById('bgm');
    bgm.play();
}

// Pause background music
function pauseBGM() {
    const bgm = document.getElementById('bgm');
    bgm.pause();
}

// Change volume
function changeVolume(value) {
    const bgm = document.getElementById('bgm');
    bgm.volume = value / 100;
}

// Love counter functionality
let heartCount = 1;

function increaseHearts() {
    heartCount++;
    const counter = document.getElementById('loveCounter');
    
    // Create heart string
    let hearts = '';
    for (let i = 0; i < heartCount; i++) {
        hearts += '❤️';
    }
    
    counter.textContent = hearts;
    
    // Trigger heartBeat animation
    counter.style.animation = 'none';
    setTimeout(() => {
        counter.style.animation = 'heartBeat 0.6s ease';
    }, 10);
    
    // Show a message
    if (heartCount === 5) {
        showHeart('You mean everything to me! 💕');
    } else if (heartCount === 10) {
        showHeart('I Love You To The Moon And Back! 🌙');
    } else if (heartCount === 15) {
        showHeart('Forever and Always! 💑');
    }
}
