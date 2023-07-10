const open = document.getElementById('open')
const close = document.getElementById('close')
const cointainer = document.querySelector('.container')

open.addEventListener('click', () => cointainer.classList.add('show-nav'))
close.addEventListener('click', () => cointainer.classList.remove('show-nav'))