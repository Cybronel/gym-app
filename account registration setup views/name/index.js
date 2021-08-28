const input = document.querySelector('#name')
const btn = document.querySelector('#finish')


function isEmpty(str) {
    return !str.trim().length;
}

input.addEventListener('input', () => {
    if (isEmpty(input.value)) {
        btn.classList.add('disabled')
        btn.disabled = true
    } else {
        btn.classList.remove('disabled')
        btn.disabled = false
    }
})