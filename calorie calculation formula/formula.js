
function calcCalories(gender, weight, height, age) {
    const lbs = weight
    const inches = height

    if (gender === 'male') {
        return (65 + (6.2 * lbs) + (12.7 * inches) - (6.8 * age)).toFixed(0)
    } else {
        return (655 + (4.3 * lbs) + (4.3 * inches) - (4.7 * age)).toFixed(0)
    }
}

const calories = calcCalories('male', 191.8, 70.8, 16)
console.log(`${calories} Calories`)