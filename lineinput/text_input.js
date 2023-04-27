
const inputbox = document.querySelector('.input__container')
const input = inputbox.querySelector(".text__input")
const input__placeholder = inputbox.querySelector(".input__placeholder")

input.onfocus = () => {
	input__placeholder.style = "transform: scale(0.80) translateY(-170%); color: var(--purple);"
}

input.onblur = () => {
	if (input.value <= 0) {
		input__placeholder.style = ""
	} else {
		input__placeholder.style = "transform: scale(0.80) translateY(-170%); color: var(--shadow);"
	}
}

input__placeholder.onclick = () => {
	input.focus()
}