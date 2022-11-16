// ITERATION 1

function updateSubtotal(product) {
  //single input calculation test for iteration 1
  //console.log('Calculating subtotal, yey!')
  if(product != null)
 { const price = product.children.item(1)
  const quantity = product.children.item(2)
  const subtotal = product.children.item(3)
  subtotal.innerText = parseFloat(price.firstElementChild.innerText) * parseFloat(quantity.firstElementChild.value)
  return subtotal.innerText}
/*   const price = parseFloat(document.querySelector(".price span").innerText)
  const quantity = parseFloat(document.querySelector(".quantity input").value)
  const subtotal = document.querySelector(".subtotal span")
  subtotal.innerText = price*quantity 
  return subtotal */

}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product")
  for(let i in products){updateSubtotal(products.item(i))}
  const subtotals = document.getElementsByClassName("subtotal")
  console.log(subtotals)
  //subtotals is a HTMLcollection element, not an array, we can't use reduce() here
  let sum = 0
  if(subtotals.length != 0){
    for(let i in subtotals){
      sum+= parseFloat(subtotals.item(i).lastChild.textContent)
    }
  }
  // ITERATION 3
  const total = document.getElementById('total-value').firstElementChild
  total.innerText = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const product = target.parentNode.parentNode 
  console.log(product)
  product.remove()
  calculateAll()
}

// ITERATION 5

function createProduct(event) {
 // get the current target so that we can get the values
 const newProductName = document.getElementById('new-product-name').value
 const newProductPrice = document.getElementById('new-product-price').value
 // deep clone the first product
 const firstProduct = document.querySelector('.product')
 /* const newProduct = firstProduct.cloneNode(true) */
 const newProduct = newTr()
 console.log(newProduct)
 newProduct.children.item(0).firstElementChild.innerText = newProductName
 newProduct.children.item(1).firstElementChild.innerText = newProductPrice
 newProduct.children.item(4).firstElementChild.addEventListener('click', removeProduct)
 const parent= document.querySelector("tbody")
 parent.appendChild(newProduct) 
}

function newTr(){
  const newProduct = document.createElement("tr")
  newProduct.className = "product"
  const name = newProduct.appendChild(document.createElement("td"))
  const price = newProduct.appendChild(document.createElement("td"))
  const quantity = newProduct.appendChild(document.createElement("td"))
  const subtotal = newProduct.appendChild(document.createElement("td"))
  const action = newProduct.appendChild(document.createElement("td"))
  name.className = "name"
  name.appendChild(document.createElement("span"))
  name.firstElementChild.innerText = "new product"
  price.className = "price"
  price.innerHTML = "$"
  price.appendChild(document.createElement("span"))
  price.firstElementChild.innerText = "20.00"
  quantity.className = "quantity"
  quantity.appendChild(document.createElement("input"))
  quantity.firstElementChild.type = "number"
  quantity.firstElementChild.value = "0"
  quantity.firstElementChild.min = "0"
  quantity.firstElementChild.Placeholder = "Quantity"
  subtotal.className = "subtotal"
  subtotal.innerHTML="$"
  subtotal.appendChild(document.createElement("span"))
  action.className = "action"
  action.appendChild(document.createElement("button"))
  action.firstElementChild.className = "btn btn-remove"
  action.firstElementChild.innerHTML = "Remove"
  return newProduct
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.getElementsByClassName("btn-remove");
  for(let btn of removeBtn){
    btn.addEventListener('click', removeProduct)
  }
  const creatBtn = document.getElementById("create")
  creatBtn.addEventListener('click',createProduct)
});
