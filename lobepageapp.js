const hamburger = document.querySelector('.hamIcon')
const navLinks = document.querySelector('.navLinks')
const crossIcon = document.querySelector('.crossMark')
const navactive = document.querySelector('.navactive')
hamburger.addEventListener('click', () => {
    // hamburger.classList.toggle('hide')
    crossIcon.style.display = 'block'

    navLinks.classList.add('navactive')
    hamburger.style.display = 'none'
})
crossIcon.addEventListener('click', () =>{
    navLinks.classList.remove('navactive')
    hamburger.style.display = 'block'
    crossIcon.style.display = 'none'
})