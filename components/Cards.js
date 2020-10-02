// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
placement = document.querySelector('.cards-container')
function artMaker(obj){
    const card = document.createElement('div')
        card.classList.add('card')

    const headline = document.createElement('div')
        headline.classList.add('headline')
        headline.textContent= `${obj}`

    const author = document.createElement('div')
        author.classList.add('author')
    const imageContainer = document.createElement('div')
        imageContainer.classList.add('img-container')

    const image = document.createElement('img')
        image.src = 'obj.authorPhoto'

        const span = document.createElement('span')
        span.textContent = `By ${obj}`

    card.append(headline)
    card.append(author)
    card.append(imageContainer)
    imageContainer.appendChild(image)
    card.append(span)

    card.addEventListener('click', ()=> {
        console.log(obj.headline)
    })

    return card
}
console.log(artMaker())


axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {

    const item = res.data.articles.bootstrap
    const query =res.data.articles.jquery
    const tech = res.data.articles.technology
item.forEach(element => {
    const boot = artMaker(element.authorName, element.authorPhoto, element.headline)
    console.log(boot)
    placement.append(boot)
})
query.forEach(element => {
    const boot1 = artMaker(element.authorName, element.authorPhoto, element.headline)
    console.log(boot1)
    placement.append(boot1)
})
tech.forEach(element => {
    const boot2 = artMaker(element.authorName, element.authorPhoto, element.headline)
    console.log(boot2)
    placement.append(boot2)
})

}).catch(err =>{
    debugger
    console.log(err)
    
}) 