const togglesBtn = document.querySelectorAll('.faq-toggle')

togglesBtn.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
