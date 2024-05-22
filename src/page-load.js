const mainContainer = document.querySelector('#content');
const textContainer = document.createElement('div');
textContainer.classList.add('textContainer')
const h1 = document.createElement('h1');
h1.classList.add('initial-headText');
const paragraph = document.createElement('p');
paragraph.classList.add('textparagraph')
const homePage = document.querySelector('.homepage');


function displayFirstPageLoad() {
  document.body.style.backgroundImage = "url('../Images/group-of-served-foods.jpg')";
  document.body.style.backgroundSize = "100%";
      mainContainer.textContent = '';

    h1.textContent = 'Your Needs Are Our Top Priority. Experience The Difference Tasty Lunch @ Yottanet Restaurant, ';
    paragraph.textContent = `Here at Yottanet, Welcome. Our goal is to serve our patrons with excellent and nourishing meals.
We specialize in exquisite cuisine that is made with love and inventiveness and is inspired
 by the amazing flavors of Yottanet. We're really proud of enhancing your favorite recipes
  with nutritious ingredients. Come taste Yottanet cuisine prepared our way.`;
  
  textContainer.appendChild(h1);
  textContainer.appendChild(paragraph);
  mainContainer.appendChild(textContainer);

}
displayFirstPageLoad()
homePage.addEventListener('click', displayFirstPageLoad);
export default {displayFirstPageLoad};
export {mainContainer}