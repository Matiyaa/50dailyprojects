const search = document.querySelector('.search')
const btm = document.querySelector('.btn')
const input = document.querySelector('.input')

btm.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})