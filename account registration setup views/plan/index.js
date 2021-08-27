const planArrows = document.querySelectorAll('.plan-arrow')
const workoutArrows = document.querySelectorAll('.workout-arrow')
const inputs = document.querySelectorAll('input')
const continueButton = document.getElementById('continue')

planArrows.forEach(arrow => {
    const children = Array.from(arrow.parentElement.parentElement.children);
    arrow.addEventListener('click' , e => {
        arrow.classList.toggle('rotate-absolute')
        
        children.forEach((workout, index) => {
            if (index > 0) {
                workout.classList.toggle('show')
            }
        })
        
    })
})

workoutArrows.forEach(arrow => {
    const children = Array.from(arrow.parentElement.parentElement.children);

    arrow.addEventListener('click' , e => {
        arrow.classList.toggle('rotate')

        
        
        children.forEach((workout, index) => {
            if (index > 0) {
                workout.classList.toggle('show')
            }
        })
    })
})

inputs.forEach(input => {
    input.addEventListener('click', () => {
        if (input.checked) {
            continueButton.classList.remove('disabled')
            continueButton.disabled = false
        } else {
            continueButton.classList.add('disabled')
            continueButton.disabled = true
        }
    })
})




