
let upButton = document.querySelector('.up-button')

window.onscroll = function () {
	if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  }
};