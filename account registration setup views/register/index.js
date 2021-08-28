// submit is allowed only if:

// username exists
// password exists
// password >8 char
// password === repeat=password

const content = document.querySelector('.content')

function createAlert(message) {
    const alert = document.createElement('div')
    alert.classList.add('alert')
    content.appendChild(alert)

    alert.innerHTML = `
    <h2 class="alert-title">${message}</h2>
    <img src="assets/refresh.svg" alt="" class="exit-alert">
    `

    alert.addEventListener('click', () => {
        alert.remove()
    })
}

const username = document.querySelector('#username')
const password = document.querySelector('#password')
const passwordRepeat = document.querySelector('#password-repeat')
const inputs = document.querySelectorAll('input')

const btn = document.querySelector('#submit')

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (username.value && password.value && passwordRepeat.value) {
            btn.classList.remove('disabled')
        } else 
        btn.classList.add('disabled')
    })
})

btn.addEventListener('click', () => {
    if (!username.value || !password.value || !passwordRepeat.value) {
        createAlert('You need to complete all fields!')
    } else if (password.value.length < 7) {
        createAlert('Password is too short!')
    } else if (password.value !== passwordRepeat.value) {
        createAlert('Passwords must match!')
    }
})

