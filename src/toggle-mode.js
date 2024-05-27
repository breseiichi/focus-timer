const toggleMode = document.querySelector('#toggle-mode')
const bgPage = document.querySelector('.light-mode')
const btnLight = document.querySelector('.ph-sun')
const btnDark = document.querySelector('.ph-moon')

toggleMode.addEventListener('click', (event) => {
  toClick()
})

function toClick() {
  bgPage.classList.toggle('dark-mode')

  btnLight.classList.toggle('hide')
  btnDark.classList.toggle('hide')
}