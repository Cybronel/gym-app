const twoWeekPrograms = document.querySelector('.plan-list-2')
const threeWeekPrograms = document.querySelector('.plan-list-3')

const URL = 'http://localhost:3000/plans'

async function getData()  {
    const response = await fetch(URL)
    const data = await response.json()

    return data
}

document.addEventListener("DOMContentLoaded", async () => {

    let fetchedPlans = []

    try {
        fetchedPlans = (await getData()).plans
    } catch (e) {
        console.log('Error!')
        console.log(e)
    }

    fetchedPlans.forEach(plan => {

        const planDiv = document.createElement('div')
        planDiv.classList.add('plan')
        planDiv.innerHTML = `
        <div class="plan-title">
            <input type="radio" id="full-body" name="plan" value="full-body">
            <label class="plan-name" for="upper-lower">${plan.name}</label>
            <img src="assets/chevron_down.svg" alt="" class="plan-arrow">
        </div>
        `

        if (plan.workouts.length === 3) {
            threeWeekPrograms.appendChild(planDiv)
        } else if (plan.workouts.length === 2) {
            twoWeekPrograms.appendChild(planDiv)
        }

        plan.workouts.forEach(workout => {

            const workoutDiv = document.createElement('div')
            workoutDiv.classList.add('workout')

            workoutDiv.innerHTML = `
            <div class="workout-title">
                <p class="workout-name">${workout.name}</p>
                <img src="assets/chevron_down.svg" alt="" class="workout-arrow">
            </div>
            `
            const exercisesDiv = document.createElement('div')
            exercisesDiv.classList.add('exercises')

            workoutDiv.appendChild(exercisesDiv)
            planDiv.appendChild(workoutDiv)

            workout.exercises.forEach( exercise => {

                const exercisePara = document.createElement('p')
                exercisePara.classList.add('exercise')
                exercisePara.innerHTML = `${exercise}`

                exercisesDiv.appendChild(exercisePara)

            })
        })
   
    })

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

})






