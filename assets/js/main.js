document.addEventListener('DOMContentLoaded', function () {
    
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default jump behavior

            const targetId = this.getAttribute('href').substring(1); // Get the section ID (e.g., "home")
            const targetSection = document.getElementById(targetId); // Find the target section

            if (targetSection) {
                // Calculate the target position with an offset (e.g., 50 pixels)
                const offset = 60; // Adjust this value as needed
                const targetPosition = targetSection.offsetTop + offset;

                // Smoothly scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0; // Start at the first item
const itemWidth = document.querySelector('.carousel-item').offsetWidth;
const totalItems = 3; // Fixed number of items

// Initialize the position to start from the first item
track.style.transform = 'translateX(80px)';

function moveToIndex(index) {
    // Ensue the index stays within bounds
    if (index < 0 || index >= totalItems) {
        return; // Do nothing if the index is out of bounds
    }

    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = 'translateX(' + (-index * (itemWidth + 10)) + 'px)';
    currentIndex = index;
}

function checkPosition() {
    // This function is no longer needed for bounds checking
    // as we are handling it in moveToIndex
}

prevButton.addEventListener('click', () => {
    moveToIndex(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    moveToIndex(currentIndex + 1);
});


    track.addEventListener('transitionend', checkPosition);
});