// clientX: 708
// clientY: 235

const buttonbox = document.querySelector('.button__container')
const button = buttonbox.querySelector('.button')

button.onpointerdown = (e) => {
	let x = e.clientX - e.target.offsetLeft
	let y = e.clientY - e.target.offsetTop

	let ripples = document.createElement('span')
	ripples.classList.add('ripples')
	ripples.style.left = x + "px"
	ripples.style.top = y + "px"
	
	button.appendChild(ripples)
	setTimeout(() => {
		ripples.remove()
	}, 700);

}