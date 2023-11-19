const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav_ = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
    nav_.forEach(navEl => navEl.classList.add('visible'));
})

closeBtn.addEventListener('click', () => {
    nav_.forEach(navEl => navEl.classList.remove('visible'));
})

