// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
placement = document.querySelector('.header-container')
function Header() {
    const head = document.createElement('div')
    head.classList.add('header')
    
    const span = document.createElement('span')
    span.classList.add('date')
    span.textContent = 'MARCH 28, 2020'
    head.append(span)

    const h1 = document.createElement('h1')
    h1.textContent = 'Lambda Times'
    head.append(h1)

    const span2 = document.createElement('span')
    span2.classList.add('temp')
    span2.textContent = '98°'
    head.append(span2)

    placement.append(head)
    return head 
}
console.log(Header())