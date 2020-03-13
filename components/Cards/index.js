// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(object) {
    
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          authorContainer = document.createElement('div'),
          imgContainer = document.createElement('div'),
          img = document.createElement('img'),
          author = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container')

    card.append(headline);
    card.append(authorContainer);
    authorContainer.append(imgContainer);
    imgContainer.append(img);
    authorContainer.append(author);

    headline.textContent = object.headline;
    img.src = object.authorPhoto;
    author.textContent = object.authorName;
          
    return card;
}


    axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
        
    var articlesArr =  Object.values(response.data.articles);
            articlesArr.forEach(item => {
                item.forEach(article => {
                    document.querySelector('.cards-container').append(createCard(article));
                // console.log(item);
                })
             })
    })
.catch(error => {
    console.log('the data was not returned', error)
  })

