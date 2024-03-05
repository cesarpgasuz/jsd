const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveCard()
        card.classList.add('active')
    })
})

function removeActiveCard() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}