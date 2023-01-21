const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
  const dayExist = nlwSetup.dayExists(today)


if (dayExist) {
  alert("Dia já inlcuso 🛑")
return
}

alert('Adicionado com sucesso 🍀')
nlwSetup.addDay(today)
}

function save () {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
