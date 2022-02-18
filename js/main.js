burgerBtn = document.querySelector('.hamburger')
navItems = document.querySelector('.nav__items')
navItem = document.querySelectorAll('.nav__items--item')
navBarLogo = document.querySelector('.nav__top-logo')
navTop = document.querySelector('.nav__top')
darkTop = document.querySelector('.nav__top--darkness')
main = document.querySelector('.main')
footer = document.querySelector('.footer__text-year')

const showNav = () => {
	burgerBtn.classList.toggle('is-active')
	navItems.classList.toggle('nav__items--active')
	navTop.classList.remove('nav__top--darkness')
	document.body.classList.toggle('sticky-body')
	navItem.forEach(el => {
		el.addEventListener('click', () => {
			navItems.classList.remove('nav__items--active')
			navBarLogo.style.color = 'rgb(233, 230, 225)'
			burgerBtn.classList.remove('is-active')
			document.body.classList.remove('sticky-body')
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
	if (main.classList.contains('main') && main.offsetTop <= scrollY + 70) {
		navTop.classList.add('nav__top--darkness')
	} else {
		navTop.classList.remove('nav__top--darkness')
	}
	darkBarCheck()
}

const darkBarCheck = () => {
	if (navItems.classList.contains('nav__items--active')) {
		navTop.classList.remove('nav__top--darkness')
	}
}

const checkYear = () => {
	footer.textContent = new Date().getFullYear()
}
checkYear()

window.addEventListener('scroll', handleObserve)
burgerBtn.addEventListener('click', showNav)
