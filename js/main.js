// VARIABLE & CONSTANT DECLARATIONS

const navBar = document.querySelector('nav#navigation.flex-rw');

const carouselContainer = document.querySelectorAll('#carousel-container');
const carouselNav = document.querySelectorAll('#carousel-navigation');
const carouselDots = document.querySelectorAll('.carousel-dot');

Array.from(carouselDots).forEach((dot) => dot.addEventListener('click', carouselHandler));

// EVENT LISTENERS

window.addEventListener('scroll', alterPadding);
// window.addEventListener('scroll', slideNavBar);

// FUNCTIONS

function carouselHandler (e) {

    if (e.target.className == 'active') return;

        e.target.classList.add('active');
        e.target.previousElementSibling.classList.remove('active');
        e.target.nextElementSibling.classList.remove('active');
      
}

function alterPadding () {

    if (window.scrollY >= 200) {

        navBar.style.padding = 0;

    } else {

        navBar.style.padding = '10px';
        navBar.style.paddingLeft = 0;
        navBar.style.paddingRight = 0;

    }

}

// function slideNavBar () {

//     if (window.scrollY >= 500) {
//         navBar.style.transform = 'translateY(-70px)';
//     } 
    
//     else {
//         navBar.style.transform = 'translateY(50px)';
//     }
// }


