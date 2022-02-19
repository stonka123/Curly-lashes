burgerBtn = document.querySelector('.hamburger')
navItems = document.querySelector('.nav__items')
navItem = document.querySelectorAll('.nav__items--item')
navBarLogo = document.querySelector('.nav__top-logo')
navTop = document.querySelector('.nav__top')
darkTop = document.querySelector('.nav__top--darkness')
main = document.querySelector('.main')
footer = document.querySelector('.footer__text-year')
formBtn = document.querySelector('.form__btn')
popup = document.querySelector('.popup')
popupBtn = document.querySelector('.popup__btn')
// form
formName = document.querySelector('#form__name')
formTel = document.querySelector('#form__tel')
formArea = document.querySelector('#form__area')

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

// form
// 1 sprawdzenie czy pola sa wypelnione
// 2 blad wyswietli ktore jest puste
// 3 wyswietlenie bledu i skasowanie bledu

// pokazuje bledy - input przechowuje input a msg naszego placeholdera

//sprawdzamy kazdy input cyz ma blad


const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.form__error')
	formBox.classList.add('error')
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkNumber = input => {
	const re = new RegExp('[0-9]')
	if (re.test(formTel.value) && formTel.value.length === 9) {
		clearError(formTel)
	} else {
		showError(formTel)
	}
}
const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form')
	let errorCount = 0
	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add('show-popup')
	}
}

const closePopup = () => {
	popup.classList.remove('show-popup')
}

window.addEventListener('scroll', handleObserve)
burgerBtn.addEventListener('click', showNav)
formBtn.addEventListener('click', e => {
	e.preventDefault() //anty f5 aby nie wysylalo
	checkForm([formName, formTel, formArea]) //robimy tablice aby pobrac all inputy
	checkNumber()
	checkErrors()
})

popupBtn.addEventListener('click', e => {
	closePopup()
	
})
