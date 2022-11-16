// ITERATION 1

function updateSubtotal(product) {
  //single input calculation test for iteration 1
  //console.log('Calculating subtotal, yey!')
  const price = product.children.item(1)
  const quantity = product.children.item(2)
  const subtotal = product.children.item(3)
  subtotal.innerText = parseFloat(price.firstElementChild.innerText) * parseFloat(quantity.firstElementChild.value)
  return subtotal.innerText

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
  //subtotals is a HTMLcollection element, not an array, we can't use reduce() here
  let sum = 0
  for(let i in subtotals) sum+= parseFloat(subtotals.item(i).lastChild.textContent)

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
 const newProduct = firstProduct.cloneNode(true)
 console.log(newProduct)
 newProduct.children.item(0).firstElementChild.innerText = newProductName
 newProduct.children.item(1).firstElementChild.innerText = newProductPrice

 const parent= document.querySelector("tbody")
 parent.appendChild(newProduct) 

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
