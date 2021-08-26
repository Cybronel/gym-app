const validation = document.getElementById('valid')
const inputTags = document.querySelectorAll('.number')
const radioTags = document.querySelectorAll('.sex > input')
const selectTags = document.querySelectorAll('select') 
const lables = document.querySelectorAll('h2')
const radioLabels =  document.querySelectorAll('.form-label')

const continueBtn = document.getElementById('continue')
const calcBtn = document.getElementById('calc')

const weightUnit = document.getElementById('weight-unit')
const heightUnit = document.getElementById('height-unit')

const maleOption = document.getElementById('male')
const femaleOption = document.getElementById('female')

const ageNum = document.getElementById('age')
const weightNum = document.getElementById('weight')
const heightNum = document.getElementById('height')

const result = document.getElementById('result')

const alert = document.querySelector('.alert')
const exitAlert = document.querySelector('.exit-alert')

function disableInputs() {
    inputTags.forEach(input => input.disabled = true)
    radioTags.forEach(radio => radio.disabled = true)
    selectTags.forEach(select => select.disabled = true)

    calcBtn.disabled = true

    lables.forEach(label => label.classList.add('disabled'))
    radioLabels.forEach(label => label.classList.add('disabled'))

    continueBtn.disabled = false
    continueBtn.classList.remove('disabled')
}

function enableInputs() {
    inputTags.forEach(input => input.disabled = false)
    radioTags.forEach(radio => radio.disabled = false)
    selectTags.forEach(select => select.disabled = false)

    calcBtn.disabled = false

    lables.forEach(label => label.classList.remove('disabled'))
    radioLabels.forEach(label => label.classList.remove('disabled'))

    continueBtn.disabled = true
    continueBtn.classList.add('disabled')
}

function calcCalories(weight, height, age) {
    if (heightUnit.options[heightUnit.selectedIndex].value === 'cm') {
        height = height / 2.54
    }

    if (weightUnit.value === 'kg') {
        weight = weight * 2.20462262
    }

    if (maleOption.checked) {
        return (65 + (6.2 * weight) + (12.7 * height) - (6.8 * age)).toFixed(0)
    } else if (femaleOption.checked) {
        return (655 + (4.3 * weight) + (4.3 * height) - (4.7 * age)).toFixed(0)
    }
}

validation.addEventListener('click', () => {
    calcBtn.classList.toggle('disabled')

    if (validation.checked) {
        disableInputs()
        result.innerHTML = '-'
    } else {
        enableInputs()
    }
})

calcBtn.addEventListener('click', () => {
    const noGender = !maleOption.checked && !femaleOption.checked

    if (!weightNum.value || !heightNum.value || !ageNum.value || noGender) {
        alert.style.display = 'flex'
    } else {
        calcCalories(weightNum.value, heightNum.value, ageNum.value) === undefined ? result.innerHTML = '-' : result.innerHTML = calcCalories(weightNum.value, heightNum.value, ageNum.value)
     
        continueBtn.disabled = false
        continueBtn.classList.remove('disabled')
    }
})

exitAlert.addEventListener('click', () => {
    alert.style.display = 'none'
})

