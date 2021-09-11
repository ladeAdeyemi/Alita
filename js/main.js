// VARIABLE & CONSTANT DECLARATIONS

const navBar = document.querySelector('nav#navigation.flex-rw');

// EVENT LISTENERS

window.addEventListener('scroll', alterPadding);
// window.addEventListener('scroll', slideNavBar);

// FUNCTIONS

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