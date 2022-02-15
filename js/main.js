burgerBtn = document.querySelector('.hamburger')
navItems = document.querySelector('.nav__items')
navBarLogo = document.querySelector('.nav__top-logo')

const showNav = () => {
	burgerBtn.classList.toggle('is-active')
	navItems.classList.toggle('nav__items--active')
	checkNav()
}

const checkNav = () => {
	if (navItems.classList.contains('nav__items--active')) {
		navBarLogo.style.color = 'black'
	} else {
		navBarLogo.style.color = 'rgb(233, 230, 225)'
	}
}

burgerBtn.addEventListener('click', showNav)
