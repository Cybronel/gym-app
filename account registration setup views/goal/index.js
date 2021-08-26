const cards = document.querySelectorAll('.goal')

cards.forEach(card => {
    card.addEventListener('click', e => {
        e.preventDefault
        console.log(e.target)
        document.querySelectorAll('button').forEach(btn => {
            if (e.target === btn) {
                return
            } else {
                card.classList.toggle('active')
            }
        })
    })
})

console.log(document.querySelector('button'))