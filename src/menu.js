import { mainContainer } from "./page-load.js"
// let container = document.querySelector('#content')
const headerNav = document.querySelector('.header-nav');
let menu = document.querySelector('.menupage');
const menuContent = document.createElement('div');
menuContent.classList.add('menuContent');
let h1 = document.createElement('h1');

let breakFastTitleEl = document.createElement('h2');
let fBFContainer = document.createElement('div');
fBFContainer.classList.add('fBFContainer')
let fBreakFastText = document.createElement('p');
let fBreakFastImageEl = document.createElement('p');
fBreakFastImageEl.classList.add('fBreakFastImageEl')
let fImage = document.createElement('img');

let sBFContainer = document.createElement('div');
let sBreakFastText = document.createElement('p');
let sBreakFastImage = document.createElement('p');
sBreakFastImage.classList.add('sBreakFastImage')
let sImage = document.createElement('img');

let tBFContainer = document.createElement('div');
tBFContainer.classList.add('tBFContainer');
let tBreakFastText = document.createElement('p');
tBreakFastText.classList.add('tBreakFastText')
let tBreakFastImage = document.createElement('p');
tBreakFastImage.classList.add('tBreakFastImage')
let tImage = document.createElement('img');

let lunchTitleEl = document.createElement('h2');
lunchTitleEl.classList.add('lunchTitleEl');
let fLunchContainer = document.createElement('div');
fLunchContainer.classList.add('fLunchContainer')
let fLunchText = document.createElement('p');
fLunchText.classList.add('fLunchText')
let fLunchImageEl = document.createElement('p');
fLunchImageEl.classList.add('fLImage')
let fLImage = document.createElement('img');

let sLunchContainer = document.createElement('div');
let sLunchText = document.createElement('p');
sLunchText.classList.add('sLunchText')
let sLunchImageEl = document.createElement('p');
sLunchImageEl.classList.add('sLunchImageEl')
let sLImage = document.createElement('img');

let tLunchContainer = document.createElement('div');
let tLunchText = document.createElement('p');
tLunchText.classList.add('tLunchText');
let tLunchImageEl = document.createElement('p');
tLunchImageEl.classList.add('tLunchImageEl');
let tLImage = document.createElement('img');

let dessertTitleEl = document.createElement('h2');
dessertTitleEl.classList.add('dessertTitleEl');
let fDessertContainer = document.createElement('div');
fDessertContainer.classList.add('fDessertContainer');
let fDessertText = document.createElement('p');
fDessertText.classList.add('fDessertText');
let fDessertImageEl = document.createElement('p');
fDessertImageEl.classList.add('fDImage')
let fDImage = document.createElement('img');

let sDessertContainer = document.createElement('div');
sDessertContainer.classList.add('sDContainer')
let sDessertText = document.createElement('p');
sDessertText.classList.add('sDessertText');
let sDessertImageEl = document.createElement('p');
sDessertImageEl.classList.add('sDImage')
let sDImage = document.createElement('img');

let tDessertContainer = document.createElement('div');
tDessertContainer.classList.add('tDEssertContainer')
let tDessertText = document.createElement('p');
tDessertText.classList.add('tDessertText')
let tDessertImageEl = document.createElement('p');
tDessertImageEl.classList.add('tDImage')
let tDImage = document.createElement('img');

let beverageTitleEl = document.createElement('h2');
beverageTitleEl.classList.add('beverageTitleEl')
let fBeverageContainer = document.createElement('div');
fBeverageContainer.classList.add('fBeverageContainer')
let fBeverageText = document.createElement('p');
fBeverageText.classList.add('fBeverageText')
let fBeverageImageEl = document.createElement('p');
fBeverageImageEl.classList.add('fDImage')
let fBImage = document.createElement('img');

let sBeverageContainer = document.createElement('div');
let sBeverageText = document.createElement('p');
sBeverageText.classList.add('sBeverageText');
let sBeverageImageEl = document.createElement('p');
let sBImage = document.createElement('img');

let tBeverageContainer = document.createElement('div');
let tBeverageText = document.createElement('p');
tBeverageText.classList.add('tBeverageText')
let tBeverageImageEl = document.createElement('p');
tBeverageImageEl.classList.add('sBImage')
let tBImage = document.createElement('img');

function getMenu() {
   mainContainer.textContent = '';
   document.body.style.backgroundImage = "url('../Images/bg-light-brown.jpg')";
   document.body.style.backgroundSize = "100%"

   h1.textContent = 'Menu';
   h1.style.color = 'White';
   h1.classList.add('menu');
   mainContainer.style.color = 'white';
   menuContent.appendChild(h1);
   mainContainer.appendChild(menuContent);

   function getBreakFast() {
      let breakFastContainer = document.createElement('div');
      breakFastContainer.classList.add('breakFastContainer');
      breakFastTitleEl.textContent = 'BreakFast dishes'
      breakFastTitleEl.classList.add('breakFastTitleEl')

      fImage.setAttribute('src', '../Images/breakfast.jpg');
      fImage.setAttribute("height", "300");
      fImage.setAttribute("width", "300");
      fBreakFastText.textContent = `Breakfast is often called 'the most important meal of the day',
      and for good reason.It replenishes your supply of glucose to boost your energy levels and alertness,
        Come at pepper-some, for your healthy breakfast
     `
     fBreakFastText.classList.add('fBreakFastText')

      fBreakFastImageEl.appendChild(fImage);
      fBFContainer.appendChild(fBreakFastImageEl);
      fBFContainer.appendChild(fBreakFastText)

      menuContent.appendChild(breakFastTitleEl);
      mainContainer.appendChild(menuContent);   
      breakFastContainer.appendChild(fBFContainer);

      sBreakFastText.textContent = `Individuals who consistently consume breakfast are often less likely
  to be obese and develop type 2 diabetes than those who don't. For this reason,
  Pepper-some has prepared a delectable breakfast only for you.
 `
 sBreakFastText.classList.add('sBreakFastText');

      sImage.setAttribute('src', '../Images/loaded-pancake-breakfast.jpg');
      sImage.setAttribute("height", "300");
      sImage.setAttribute("width", "300");

      sBreakFastImage.appendChild(sImage);
      sBFContainer.appendChild(sBreakFastImage);
      sBFContainer.appendChild(sBreakFastText)
      breakFastContainer.appendChild(sBFContainer);


      tBreakFastText.textContent = `Studies have indicated that when breakfast meals are easily
     prepared and available at home, schoolchildren are more likely to consume it. This is 
     why Pepper-some requests that you get your child our delectable and nutritious breakfasts.
   `
      tImage.setAttribute('src', '../Images/breakfast-2.jpg');
      tImage.setAttribute("height", "300");
      tImage.setAttribute("width", "300");

      tBreakFastImage.appendChild(tImage);
      tBFContainer.appendChild(tBreakFastImage);
      tBFContainer.appendChild(tBreakFastText)
      breakFastContainer.appendChild(tBFContainer);
      menuContent.appendChild(breakFastContainer);
      mainContainer.appendChild(menuContent);

   }
   getBreakFast();

   function getLunch() {
      const lunchContainer = document.createElement('div');
      lunchContainer.classList.add('lunchContainer')
      lunchTitleEl.textContent = 'Lunch dishes';
      fLunchText.textContent = `As Virginia Woolf once observed, "One cannot think well,
     love well, or sleep well, if one has not dined well." Lunch provides a period of refreshment and sustenance.
    Having said that, Pepper-some has already prepared a delicious meal for you.`;

      fLImage.setAttribute('src', '../Images/rice-with-kontomire.jpg');
      fLImage.setAttribute("height", "300");
      fLImage.setAttribute("width", "300");

      fLunchImageEl.appendChild(fLImage);
      fLunchImageEl.appendChild(fLunchText)
      fLunchContainer.appendChild(fLunchImageEl);

      menuContent.appendChild(lunchTitleEl);
mainContainer.appendChild(menuContent)
      lunchContainer.appendChild(fLunchContainer);

      sLunchText.textContent = `"People are the center of cooking.
     It's possible that food is the one item that unites people
      from different backgrounds." – Guy Fieri. Visit Pepper-some Restaurant to enjoy a 
    delicious and nutritious waakye that has been made by our skilled chefs.
 `
      sLImage.setAttribute('src', '../Images/beans-plantain.jpg');
      sLImage.setAttribute("height", "300");
      sLImage.setAttribute("width", "300");

      sLunchImageEl.appendChild(sLImage);
      sLunchContainer.appendChild(sLunchImageEl);
      sLunchContainer.appendChild(sLunchText);
      lunchContainer.appendChild(sLunchContainer);


      tLunchText.textContent = `"Food is more than just a source of energy. 
    It's an encounter." – Guy Fieri. You won't regret visiting Yottanet;
     we're here to help. Come experience it for yourself.
 `
      tLImage.setAttribute('src', '../Images/Ghanaian-joffof-rice.jpg');
      tLImage.setAttribute("height", "300");
      tLImage.setAttribute("width", "300");

      tLunchImageEl.appendChild(tLImage);
      tLunchContainer.appendChild(tLunchImageEl);
      tLunchContainer.appendChild(tLunchText)
      lunchContainer.appendChild(tLunchContainer);
      menuContent.appendChild(lunchContainer);
      mainContainer.appendChild(menuContent);
   }
   getLunch();

   function getDessert() {
      const dessertContainer = document.createElement('div');
      dessertContainer.classList.add('dessertContainer');
      dessertTitleEl.textContent = 'Dessert dishes';
      fDessertText.textContent = `"When words cannot express how much you love someone, food can." 
    - Wolfelt, Alan D. We offer you this mouthwatering dish of Ghanaian 
    kelewele here on Pepper-some. Feel free to try it for dessert.
    `;

      fDImage.setAttribute('src', '../Images/Kelewele.jpg');
      fDImage.setAttribute("height", "300");
      fDImage.setAttribute("width", "300");

      fDessertImageEl.appendChild(fDImage);
      fDessertImageEl.appendChild(fDessertText);
      fDessertContainer.appendChild(fDessertImageEl);

      menuContent.appendChild(dessertTitleEl);
      mainContainer.appendChild(menuContent);
      dessertContainer.appendChild(fDessertContainer);

      sDessertText.textContent = `This is what happens when you try our sandwich,
     which is thoughtfully prepared by our skilled chefs @ Pepper-some restaurant,"
      said the smiling person holding a sandwich in one hand."
    `
      sDImage.setAttribute('src', '../Images/sausage-egg-sandwish.jpg');
      sDImage.setAttribute("height", "300");
      sDImage.setAttribute("width", "300");

      sDessertImageEl.appendChild(sDImage);
      sDessertContainer.appendChild(sDessertImageEl);
      sDessertContainer.appendChild(sDessertText);
      dessertContainer.appendChild(sDessertContainer);

      tDessertText.textContent = ` @Pepper-some restaurant, don't mind the surface, mind the engine(nutrient)"
      "
    `
      tDImage.setAttribute('src', '../Images/dessert-2.jpg');
      tDImage.setAttribute("height", "300");
      tDImage.setAttribute("width", "300");

      tDessertImageEl.appendChild(tDImage);
      tDessertContainer.appendChild(tDessertImageEl);
      tDessertContainer.appendChild(tDessertText);
      dessertContainer.appendChild(tDessertContainer);
      menuContent.appendChild(dessertContainer);
      mainContainer.appendChild(menuContent);
   }
   getDessert();

   function getBeverage() {
      let beverageContainer = document.createElement('div');
      beverageContainer.classList.add('beverageContainer');
      beverageTitleEl.textContent = 'Beverages';
      fBeverageText.textContent = `"Beer is proof that God loves us and wants us to be happy." - Benjamin Franklin
      Come and have a time with us and you will never regret coming to Pepper-some restaurant.
      `;

      fBImage.setAttribute('src', '../Images/white-beverage.jpg');
      fBImage.setAttribute("height", "300");
      fBImage.setAttribute("width", "300");

      fBeverageImageEl.appendChild(fBImage);
      fBeverageImageEl.appendChild(fBeverageText);
      fBeverageContainer.appendChild(fBeverageImageEl);

      menuContent.appendChild(beverageTitleEl);
      mainContainer.appendChild(menuContent);
      beverageContainer.appendChild(fBeverageContainer);

      sBeverageText.textContent = `"What whiskey will not cure, there is no cure for." - Irish Proverb
@ Pepper-some restaurant we provide our client with healthy for their cure, don't sit there for your sickness to overwhelm you.
      `
      sBImage.setAttribute('src', '../Images/chocolate-beverage.jpg');
      sBImage.setAttribute("height", "300");
      sBImage.setAttribute("width", "300");

      sBeverageImageEl.appendChild(sBImage);
      sBeverageContainer.appendChild(sBeverageImageEl);
      sBeverageContainer.appendChild(sBeverageText);
      beverageContainer.appendChild(sBeverageContainer);

      tBeverageText.textContent = ` "I drink to forget I drink." - Joe E. Lewis
Come, Pepper-some has made arrangement for you to forget your all stressful days. We Dey For You
      `
      tBImage.setAttribute('src', '../Images/red-ice-beverage.jpg');
      tBImage.setAttribute("height", "300");
      tBImage.setAttribute("width", "300");

      tBeverageImageEl.appendChild(tBImage);
      tBeverageContainer.appendChild(tBeverageImageEl);
      tBeverageContainer.appendChild(tBeverageText);
      beverageContainer.appendChild(tBeverageContainer);
      menuContent.appendChild(beverageContainer);
      mainContainer.appendChild(menuContent);

   }
   getBeverage();

   headerNav.style.color = 'white';

}
menu.addEventListener('click', getMenu);
export default { getMenu };