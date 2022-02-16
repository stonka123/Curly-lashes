burgerBtn = document.querySelector('.hamburger')
navItems = document.querySelector('.nav__items')
navItem = document.querySelectorAll('.nav__items--item')
navBarLogo = document.querySelector('.nav__top-logo')
navTop = document.querySelector('.nav__top')
main = document.querySelector('.main')

const showNav = () => {
	burgerBtn.classList.toggle('is-active')
	navItems.classList.toggle('nav__items--active')
	navItem.forEach(el => {
		el.addEventListener('click', () => {
			navItems.classList.remove('nav__items--active')
			navBarLogo.style.color = 'rgb(233, 230, 225)'
			burgerBtn.classList.remove('is-active')
		})
	})
	checkNav()
}

const checkNav = () => {
	if (navItems.classList.contains('nav__items--active')) {
		navBarLogo.style.color = 'black'
	} else {
		navBarLogo.style.color = 'rgb(233, 230, 225)'
	}
}

const handleObserve = () => {
	const scrollY = window.scrollY
	if (main.classList.contains('main') && main.offsetTop <= scrollY + 18) {
		navTop.classList.add('nav__top--darkness')
	} else {
		navTop.classList.remove('nav__top--darkness')
	}
}
window.addEventListener('scroll', handleObserve)
burgerBtn.addEventListener('click', showNav)
