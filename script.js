// 1. Use document.querySelector to store the <div> in a variable called "box"
let box = document.querySelector('#box')

// 2. Call the .onclick method on the variable from step one
box.onclick = makeBig

// 3. Assign the .onclick method to a function called makeBig that increases the height and width of the <div> to 600px each (hint: use .style.height and .style.width)
function makeBig(){
  if (box.style.width === '600px') {
    box.style.width = '250px'
    box.style.height = '250px'
    box.innerHTML = 'I am not box 📦'
  }else{
    box.style.width = '600px'
    box.style.height = '600px'
    box.innerHTML = 'I am box 📦'
  }
}
