const btn = document.querySelector(".btn")
const items = document.querySelectorAll(".items")
const shopping = document.querySelector(".shopping")
const shoppingg = document.querySelector(".tables")
const cards = document.querySelector(".cards")
const fragment = document.createDocumentFragment()
const template = document.querySelector("template").content
const finalTotal = document.querySelector("body > div.shopping > div:nth-child(4) > h4:nth-child(5)")
const prices = document.querySelectorAll(".card h4")

btn.addEventListener("click", ()=>{
  items.forEach(element =>{
    element.classList.toggle("show")
  })
})

function addProducts(productName, classN, price){
  template.querySelector(".table").classList.add(classN)
  template.querySelector(".amount").textContent = "1"
  template.querySelector(".number").textContent ++
  template.querySelector(".item").textContent = productName
  template.querySelector(".total").textContent = price
  const clone = template.cloneNode(true)
  fragment.appendChild(clone)
  shoppingg.appendChild(fragment)
  template.querySelector(".table").classList.remove(classN)
}

cards.addEventListener("click", (e)=>{
  console.log(e)
  if(e.target.className == "add"){
    e.path[0].disabled = true
    e.path[1].children[4].disabled = false
    addProducts(e.path[1].children[1].outerText, e.path[1].id,e.path[1].children[2].textContent)
  }
  if(e.target.className == "delete"){
    e.path[1].children[3].disabled = false
    e.path[0].disabled = true
    document.querySelector(`div .${e.path[1].id}`).remove()
  }
})

shopping.addEventListener("click", (e)=>{
  for(i of e.path[2].classList){
    if(i != "table"){
      classA = i
      for(i of classA){
        if(isNaN(i) == false){
          a = i -1
        }
      }
    }
  }

  if(e.path[0].className.includes("add")){
    document.querySelector(`.${classA} .amount`).textContent ++
    let amount = e.path[2].children[2].textContent
    let total = prices[a].textContent * amount 
    document.querySelector(`.${classA} .total`).textContent = total
  }
  else if (e.path[0].className.includes("remove")){
    if(e.path[1].parentElement.children[2].textContent > 0){
      document.querySelector(`.${classA} .amount`).textContent --
      let amount = e.path[2].children[2].textContent
      let total = prices[a].textContent * amount 
      document.querySelector(`.${classA} .total`).textContent = total
    }
}})

