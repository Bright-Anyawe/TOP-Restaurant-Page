const mainContainer = document.querySelector('#content');
const h1 = document.createElement('h1');

function displayFirstPageLoad() {
      const paragraph = document.createElement('p');
    h1.textContent = '@ Yottanet Restaurant, Your Needs Are Our Top Priority. Experience The Difference Tasty Lunch ';
    paragraph.textContent = `Here at Yottanet, Welcome. Our goal is to serve our patrons with excellent and nourishing meals.
We specialize in exquisite cuisine that is made with love and inventiveness and is inspired
 by the amazing flavors of Yottanet. We're really proud of enhancing your favorite recipes
  with nutritious ingredients. Come taste Yottanet cuisine prepared our way.`;
  mainContainer.appendChild(h1);
  mainContainer.appendChild(paragraph);

}
displayFirstPageLoad()
export default {displayFirstPageLoad};
export {mainContainer}