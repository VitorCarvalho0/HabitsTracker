let newHabit = document.querySelector('#txth')
let btnAdd = document.querySelector('#btnAdd')
let lhabito = document.querySelector('#listHabits')
let lista = []

btnAdd.addEventListener('click', addHabit)

function addHabit() {
    if (newHabit.value.trim() === '') return

    lista.push(newHabit.value)

    lhabito.innerHTML = ''

    for (let habit of lista) {
        lhabito.innerHTML += `
        <p>
            <input type="checkbox" class="habit-check"> ${habit}
        </p>`
    }

    newHabit.value = ''
    updateProgressBar()
}

function updateProgressBar() {
    const checkboxes = document.querySelectorAll('.habit-check')
    const total = checkboxes.length
    let checked = 0

    checkboxes.forEach(cb => {
        if (cb.checked) checked++
        cb.addEventListener('change', updateProgressBar)
    })

    let progress = 0
    if (total > 0) {
        progress = Math.round((checked / total) * 100)
    }

    document.querySelector('#ProgressBar').value = progress
}
