const menuBar = document.querySelector('.menu-bar');
const crossBar =  document.querySelector('.cross-bar');
const navLinks = document.querySelector('.nav-links');

menuBar.addEventListener('click' , () => {
    navLinks.classList.add('nav-animation');
})


crossBar.addEventListener('click' , () => {
    navLinks.classList.remove('nav-animation');
})