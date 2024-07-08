document.addEventListener('DOMContentLoaded', function () {
	const searchNumberOne = document.querySelector('.search__number--one')
	const searchNumberTwo = document.querySelector('.search__number--two')
	const searchNumberThree = document.querySelector('.search__number--three')
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				incrementNumber(searchNumberOne, 4454, 1500)
				observer.unobserve(searchNumberOne)
			}
			if (entry.isIntersecting) {
				incrementNumber(searchNumberTwo, 454, 1500)
				observer.unobserve(searchNumberTwo)
			}

			if (entry.isIntersecting) {
				incrementNumber(searchNumberThree, 1547, 1500)
				observer.unobserve(searchNumberThree)
			}
		})
	})

	observer.observe(searchNumberOne)
	observer.observe(searchNumberTwo)
	observer.observe(searchNumberThree)
})

function incrementNumber(element, targetNumber, duration) {
	let currentNumber = 0
	const increment = targetNumber / (duration / 10) // Increment value per interval
	const interval = setInterval(() => {
		currentNumber += increment
		if (currentNumber >= targetNumber) {
			currentNumber = targetNumber
			clearInterval(interval)
		}
		element.textContent = Math.floor(currentNumber)
	}, 10) // Update every 10ms for smooth animation
}
