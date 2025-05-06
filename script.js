// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', () => {
	nav.classList.toggle('active')
	hamburger.classList.toggle('active')
})

// Smooth Scroll and Active Section Detection
document.querySelectorAll('.nav li').forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault()

		// Remove active class from all items
		document.querySelectorAll('.nav li').forEach((item) => {
			item.classList.remove('active')
		})

		// Add active class to clicked item
		link.classList.add('active')

		// Section mapping
		const sectionMap = {
			HOME: 'hero',
			'About Me': 'about',
			Skill: 'mystack',
			'Contact Me': 'contact',
		}

		const targetSection = sectionMap[link.textContent]

		if (targetSection) {
			const section = document.getElementById(targetSection)
			if (section) {
				// Calculate scroll position with offset
				const yOffset = -60 // Match your nav height
				const y =
					section.getBoundingClientRect().top + window.pageYOffset + yOffset

				window.scrollTo({
					top: y,
					behavior: 'smooth',
				})
			}
		}

		// Close mobile menu
		if (window.innerWidth <= 768) {
			nav.classList.remove('active')
			hamburger.classList.remove('active')
		}
	})
})

// Scroll Spy for Active Navigation
window.addEventListener('scroll', () => {
	const sections = document.querySelectorAll('section')
	const navLinks = document.querySelectorAll('.nav li')

	sections.forEach((section) => {
		const rect = section.getBoundingClientRect()
		if (rect.top <= 100 && rect.bottom >= 100) {
			const id = section.getAttribute('id')
			navLinks.forEach((link) => {
				link.classList.remove('active')
				if (link.textContent === getKeyByValue(sectionMap, id)) {
					link.classList.add('active')
				}
			})
		}
	})
})

// Helper function for scroll spy
function getKeyByValue(object, value) {
	return Object.keys(object).find((key) => object[key] === value)
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
	const nav = document.querySelector('nav')
	nav.style.backgroundColor =
		window.scrollY > 50 ? 'rgba(5, 40, 82, 0.98)' : 'rgba(5, 40, 82, 0.95)'
})
