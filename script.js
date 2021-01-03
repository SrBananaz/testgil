const btn = document.querySelector(".btn")
const items = document.querySelectorAll(".items")
const shopping = document.querySelector(".shopping")
const tables = document.querySelector(".tables")
const cards = document.querySelector(".cards")
const fragment = document.createDocumentFragment()
const template = document.querySelector("template").content

btn.addEventListener("click", ()=>{
  items.forEach(element =>{
    element.classList.toggle("show")
})})

cards.addEventListener("click", (e)=>{
  if(e.target.className == "add"){
    e.target.disabled = true
    e.target.nextElementSibling.disabled = false
    addProducts(e.target.parentElement.children[1].textContent, e.target.parentElement.classList[0], e.target.parentElement.children[2].textContent)
    additionTotal()
  }
  else if(e.target.className == "delete"){
    e.target.disabled = true
    e.target.previousElementSibling.disabled = false
    document.querySelector(`div.tables div.${e.target.parentElement.classList[0]}`).remove()
    additionTotal()
  }
})

shopping.addEventListener("click", (e)=>{
  if(e.target.className.includes("add")){
    increaseOrDiminish("+", e)
  }
  else if (e.target.className.includes("remove") && e.target.parentElement.parentElement.children[2].textContent > 0){
    increaseOrDiminish("-", e)
}}) 

function addProducts(productName, classN, price){
  template.querySelector(".table").classList.add(classN)
  template.querySelector(".amount").textContent = "1"
  template.querySelector(".numberid").textContent = "#" + Math.floor((Math.random() * 10000) + 9000)
  template.querySelector(".item").textContent = productName
  template.querySelector(".total").textContent = price
  const clone = template.cloneNode(true)
  fragment.appendChild(clone)
  tables.appendChild(fragment)
  template.querySelector(".table").classList.remove(classN)
}

function increaseOrDiminish(value, e){
  let classA = e.target.parentElement.parentElement.classList[1]
  let price = document.querySelector(`.${classA} h4`).textContent
  if (value == "+"){
    document.querySelector(`.${classA} .amount`).textContent ++
  }
  else if(value == "-"){
    document.querySelector(`.${classA} .amount`).textContent --
  }
  let total = price * e.target.parentElement.parentElement.children[2].textContent
  document.querySelector(`.${classA} .total`).textContent = total
  additionTotal() 
}

function additionTotal(){
  let adittion = 0
  for(i of (document.querySelectorAll(".total"))){
    adittion += Number(i.textContent)
  }
  document.querySelector(".finalT").textContent = adittion
}


