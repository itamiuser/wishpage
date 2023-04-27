
const rangesliderbox = document.querySelector('.rangeslider__container')
const rangeslider = rangesliderbox.querySelector('.rangeslider')
const percent = rangesliderbox.querySelector('span').querySelector('.percent')

rangeslider.oninput = () => {
	percent.textContent = rangeslider.value + "%"
}