const nameInput = document.getElementById('InputName')
const Save = document.getElementById('savebtn')
const Reset = document.getElementById('resetbtn')
let names = []
const key = 'name-memory'

class User {
    constructor(_name) {
      this.Name = _name
    }
}
  
Save.addEventListener('click', function() {
    if (nameInput.value){
        
        const nuovo = new User(
            nameInput.value
        )
        const nameRow = document.getElementById('savedName')
        const newCol = document.createElement('div')
        newCol.classList.add ('col', 'col-12', 'col-md-4')
        newCol.innerHTML = `
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">${nuovo.Name}</h5>
        </div>
        </div>   
        `
        nameRow.appendChild(newCol)
        names.push(nuovo)
        localStorage.setItem(key, JSON.stringify(names))
        nameInput.value = ''
    }
})

Reset.addEventListener('click', function () {
    nameInput.value = ''
    localStorage.removeItem(key)
  })

const memory = localStorage.getItem(key)
if (memory) {
  const savedContacts = JSON.parse(memory)
  contacts = savedContacts
  savedContacts.forEach((nuovo) => {
    const cardsRow = document.getElementById('savedName')
    const newCol = document.createElement('div')
    newCol.classList.add('col', 'col-12', 'col-md-4')
    newCol.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${nuovo.Name}</h5>
        </div>
      </div>
    `
    cardsRow.appendChild(newCol)
  })
}



