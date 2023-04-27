
const switchbox = document.querySelector('.switch__container')
const switch__input = switchbox.querySelector('.switch__input')
const slider = switchbox.querySelector('.slider')

switch__input.onchange = () => {
	slider.classList.toggle("checked")
	if (switch__input.checked) {
		switchbox.style = "border-color: var(--purple);"
	} else {
		switchbox.style = ""
	}
}