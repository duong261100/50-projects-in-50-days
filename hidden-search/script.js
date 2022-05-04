const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const searchInput = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  searchInput.focus()
})
