//THE TYPEWRITER CURSOR EFFECT
document.addEventListener('DOMContentLoaded', () => {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Hey there!     ", "Feel free to scroll down or just chat :)     "];
    const typingDelay = 100;
    const erasingDelay = 120;
    const newTextDelay = 0; 
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay);
        }
    }

    setTimeout(type, newTextDelay);
});

//BACKGROUND SCROLLING EFFECT
window.onscroll = function() {
    // Get the amount the page has been scrolled vertically
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Get the total height of the webpage (the sum of all sections)
    let documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the vertical scroll position for the background
    let verticalPosition = (scrollTop / documentHeight) * 100; // Move from 0% to 100% vertically

    // Update the background position to move vertically based on scroll
    document.body.style.backgroundPosition = `0 ${verticalPosition}%`;  // Vertical scroll effect
};


// JavaScript to handle the modal popup
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Show the respective modal when "Read More" is clicked
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Close the modal when the close button is clicked
    closeButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});
