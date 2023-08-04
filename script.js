
const studentsArray = [
    { no: 1, name: 'Harry', surname: 'Miller' },
    { no: 2, name: 'Patricia', surname: 'Edwards' },
    { no: 3, name: 'Scott', surname: 'Campbell' },
    { no: 4, name: 'Tammy', surname: 'Patrick' },
    { no: 5, name: 'Quentin', surname: 'Fairclough' },
    { no: 6, name: 'Geraldine', surname: 'Vardy' },
    { no: 7, name: 'Jeffrey', surname: 'Vardy' },
    { no: 8, name: 'Tiffany', surname: 'Abraham' },
    { no: 9, name: 'Jason', surname: 'Jacks' },
    { no: 10, name: 'Melissa', surname: 'Gimley' }
]


const orderedList = document.getElementById('students')

studentsArray.forEach((item, i) => {
    orderedList.innerHTML += `<li id="${i}">${item.name}</li>`
})

let randomNumber = null

function chooseItem() {
    if (randomNumber !== null) {
        const person = document.getElementById(`${randomNumber}`)
        person.classList.remove('marked')

    }
    randomNumber = Math.floor(Math.random() * 10)
    const person = document.getElementById(`${randomNumber}`)
    console.log(randomNumber)
    person.classList.add('marked')

}
