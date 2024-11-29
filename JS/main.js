/* ********************** SHOW MENU ********************** */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Show Menu when the navToggle button is clicked
if (navToggle) {
    navToggle.addEventListener('click', () => {
        // Add the 'show-menu' class to the menu to make it visible
        navMenu.classList.add('show-menu')
    })
}

// Hide Menu when the navClose button is clicked
if (navClose) {
    navClose.addEventListener('click', () => {
        // Remove the 'show-menu' class to hide the menu
        navMenu.classList.remove('show-menu')
    })
}


/* ********************** REMOVE MENU ON MOBILE ********************** */
const navLink = document.querySelectorAll('.nav__link');

// Function to remove the menu when any nav link is clicked
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When any navigation link is clicked, remove the 'show-menu' class to hide the menu
    navMenu.classList.remove('show-menu');
}

// Add click event listener to each navigation link to trigger the linkAction function
navLink.forEach(link => link.addEventListener('click', linkAction));


/* ********************** Show Go To Top Button ********************** */
// Function to show the Go To Top button
window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll position is higher than 350px from the top, show the scroll-up button
    if(window.scrollY >= 350)
        scrollUp.classList.add('show-scroll');          // Add the 'show-scroll' class to display the Go To Top button
    else
        scrollUp.classList.remove('show-scroll');       // Remove the 'show-scroll' class to hide the Go To Top button
});


/* ********************** SCROLL REVEAL ANIMATION ********************** */
const scrollUp = ScrollReveal({
    origin: 'top',          // The animation will start from the top of the element
    distance: '60px',       // The element will move 60px during the reveal animation
    duration: 2500,         // The animation will take 2500ms to complete
    delay: 300,             // The animation will start after 300ms
});

// Reveal specific elements when they come into view with the ScrollReveal configuration
scrollUp.reveal(`.home__data, .footer`)
scrollUp.reveal(`.home__burger`, {delay: 1200, distance: '100px', duration: 1500})
scrollUp.reveal(`.home__dish`, {delay: 500, distance: '100px', origin: 'bottom'})
scrollUp.reveal(`.home__ingredient`, {delay: 1600, interval: 100})

scrollUp.reveal(`.recipe__img, .delivery__img, .contact__image`, {origin: 'left'})
scrollUp.reveal(`.recipe__data, .delivery__data, .contact__data`, {origin: 'right'})

scrollUp.reveal(`.popular__card`, {interval: 100})