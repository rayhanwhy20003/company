const navbarnav = document.querySelector('.navbar-nav');
const navbar = document.querySelector('.navbar');
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarnav.classList.toggle('active');
};


const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !hamburger.contains(e.target)){
        navbarnav.classList.remove('active');
    }
})


