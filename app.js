const burger = document.getElementById('burger')
const header = document.getElementById('header-mobile')
burger.addEventListener('click', () => {
    header.classList.toggle('header-mobile-active')
})
