burgerBtn = document.querySelector('.hamburger')
navItems = document.querySelector('.nav__items')

const showNav = () => {
	burgerBtn.classList.toggle('is-active')
	navItems.classList.toggle('nav__items--active')
}
burgerBtn.addEventListener('click', showNav)
