const navbar = document.querySelector('.nav');
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};
function closeNav(){
    document.getElementById('nav-check').checked=false;
}
