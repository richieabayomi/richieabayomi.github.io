// for side nav function
const navbtn = document.querySelector('.nav-btn');
navbtn.addEventListener('click',() => {
    document.querySelector('nav').classList.add('activenav')
});

const navclose = document.querySelector('.nav-close');
navclose.addEventListener('click',() => {
    document.querySelector('nav').classList.remove('activenav')
});

