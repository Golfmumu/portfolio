// scroll
const navBar = document.querySelector('.nav-bar')
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight || scrollHeight == navHeight){
        navBar.classList.add('fixed-nav')
    } else {
        navBar.classList.remove('fixed-nav')
    }
})

// show nav-list
const openBtn = document.querySelector('.toggle-open')
const closeBtn = document.querySelector('.close-list')
const navList = document.querySelector('.nav-list')

openBtn.addEventListener('click', () => {
    navList.classList.add('show-nav-list')
})
closeBtn.addEventListener('click', () => {
    navList.classList.remove('show-nav-list')
})

