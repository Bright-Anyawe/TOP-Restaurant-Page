import { mainContainer } from "./page-load.js"
// let container = document.querySelector('#content')
let menu = document.querySelector('.menupage');
let h1 = document.createElement('h1');

let breakFastTitleEl = document.createElement('h2');
let fBFContainer = document.createElement('div');
fBFContainer.classList.add('fBFContainer')
let fBreakFastText = document.createElement('p');
let fBreakFastImage = document.createElement('p');
fBreakFastImage.classList.add('fBreakFastImage')
let fImage = document.createElement('img');

let sBFContainer = document.createElement('div');
let sBreakFastText = document.createElement('p');
let sBreakFastImage = document.createElement('p');
sBreakFastImage.classList.add('sBreakFastImage')
let sImage = document.createElement('img');

let tBFContainer = document.createElement('div');
let tBreakFastText = document.createElement('p');
let tBreakFastImage = document.createElement('p');
tBreakFastImage.classList.add('tBreakFastImage')
let tImage = document.createElement('img');

let lunchTitleEl = document.createElement('h2');
let fLunchContainer = document.createElement('div');
fLunchContainer.classList.add('fLContainer')
let fLunchText = document.createElement('p');
let fLunchImageEl = document.createElement('p');
fLunchImageEl.classList.add('fLImage')
let fLImage = document.createElement('img');

let sLunchContainer = document.createElement('div');
let sLunchText = document.createElement('p');
let sLunchImageEl = document.createElement('p');
sLunchImageEl.classList.add('sLunchImageEl')
let sLImage = document.createElement('img');

let tLunchContainer = document.createElement('div');
let tLunchText = document.createElement('p');
let tLunchImageEl = document.createElement('p');
tLunchImageEl.classList.add('tLunchImageEl')
let tLImage = document.createElement('img');

let dessertTitleEl = document.createElement('h2');
let fDessertContainer = document.createElement('div');
fDessertContainer.classList.add('fDContainer')
let fDessertText = document.createElement('p');
let fDessertImageEl = document.createElement('p');
fDessertImageEl.classList.add('fDImage')
let fDImage = document.createElement('img');

let sDessertContainer = document.createElement('div');
sDessertContainer.classList.add('sDContainer')
let sDessertText = document.createElement('p');
let sDessertImageEl = document.createElement('p');
sDessertImageEl.classList.add('sDImage')
let sDImage = document.createElement('img');

let tDessertContainer = document.createElement('div');
tDessertContainer.classList.add('tDContainer')
let tDessertText = document.createElement('p');
let tDessertImageEl = document.createElement('p');
tDessertImageEl.classList.add('tDImage')
let tDImage = document.createElement('img');

let beverageTitleEl = document.createElement('h2');
let fBeverageContainer = document.createElement('div');
fBeverageContainer.classList.add('fBContainer')
let fBeverageText = document.createElement('p');
let fBeverageImageEl = document.createElement('p');
fBeverageImageEl.classList.add('fDImage')
let fBImage = document.createElement('img');

let sBeverageContainer = document.createElement('div');
sBeverageContainer.classList.add('sBContainer')
let sBeverageText = document.createElement('p');
let sBeverageImageEl = document.createElement('p');
sBeverageImageEl.classList.add('sBImage')
let sBImage = document.createElement('img');

let tBeverageContainer = document.createElement('div');
tBeverageContainer.classList.add('sBContainer')
let tBeverageText = document.createElement('p');
let tBeverageImageEl = document.createElement('p');
tBeverageImageEl.classList.add('sBImage')
let tBImage = document.createElement('img');

function getMenu() {
   mainContainer.textContent = '';
   document.body.style.backgroundImage = "url('../Images/chef-image-background.jpg')";
   h1.textContent = 'Your Menu';
    

function getBreakFast() {
    breakFastTitleEl.textContent = 'BreakFast dishes'
    fBreakFastText.textContent = `Breakfast is often called 'the most important meal of the day',
     and for good reason. As the name suggests, breakfast breaks the overnight fasting period.
      It replenishes your supply of glucose to boost your energy levels and alertness,
       while also providing other essential nutrients required for good health. Come at yottanet, for your healthy breakfast
    `
    fImage.setAttribute('src', '../Images/breakfast.jpg');
    fImage.setAttribute("height", "300");
    fImage.setAttribute("width", "300");

    fBreakFastImage.appendChild(fImage);
    fBFContainer.appendChild(fBreakFastText)
    fBFContainer.appendChild(fBreakFastImage);

    mainContainer.appendChild(h1);
    mainContainer.appendChild(breakFastTitleEl);
    mainContainer.appendChild(fBFContainer);

 sBreakFastText.textContent = `Individuals who consistently consume breakfast are often less likely
  to be obese and develop type 2 diabetes than those who don't. For this reason,
   Yottanet has prepared a delectable breakfast only for you.
 `
    sImage.setAttribute('src', '../Images/loaded-pancake-breakfast.jpg');
    sImage.setAttribute("height", "300");
    sImage.setAttribute("width", "300");

    sBreakFastImage.appendChild(sImage);
    sBFContainer.appendChild(sBreakFastImage);
    sBFContainer.appendChild(sBreakFastText)
    mainContainer.appendChild(sBFContainer);


    tBreakFastText.textContent = `Studies have indicated that when breakfast meals are easily
     prepared and available at home, schoolchildren are more likely to consume it. This is 
     why Yottanet requests that you get your child one of our delectable and nutritious breakfasts.
   `
      tImage.setAttribute('src', '../Images/breakfast-2.jpg');
      tImage.setAttribute("height", "300");
      tImage.setAttribute("width", "300");
  
      tBreakFastImage.appendChild(tImage);
      tBFContainer.appendChild(tBreakFastImage);
      tBFContainer.appendChild(tBreakFastText)
      mainContainer.appendChild(tBFContainer);
   
}
getBreakFast();

   function getLunch() {
    lunchTitleEl.textContent = 'Lunch dishes';
    fLunchText.textContent = `Lunch is that time of day, a sacrosanct break in which we replenish
     our bodies and clear our brains. As Virginia Woolf once observed, "One cannot think well,
     love well, or sleep well, if one has not dined well." Lunch provides a period of refreshment and sustenance.
    Having said that, Yottanet has already prepared a delicious meal  for you.`;

    fLImage.setAttribute('src', '../Images/rice-with-kontomire.jpg');
    fLImage.setAttribute("height", "300");
    fLImage.setAttribute("width", "300");

    fLunchImageEl.appendChild(fLImage);
    fLunchImageEl.appendChild(fLunchText)
    fLunchContainer.appendChild(fLunchImageEl);

    mainContainer.appendChild(lunchTitleEl);
    mainContainer.appendChild(fLunchContainer);

    sLunchText.textContent = `"People are the center of cooking.
     It's possible that food is the one item that unites people
      from different backgrounds. Everywhere in the world, people
       join together for food, regardless of culture." – Guy Fieri. 
    What are you waiting for? Visit Yottanet Restaurant to enjoy a 
    delicious and nutritious waakye that has been professionally made by our skilled chef.
 `
    sLImage.setAttribute('src', '../Images/beans-plantain.jpg');
    sLImage.setAttribute("height", "300");
    sLImage.setAttribute("width", "300");

    sLunchImageEl.appendChild(sLImage);
    sLunchContainer.appendChild(sLunchImageEl);
    sLunchContainer.appendChild(sLunchText);
    mainContainer.appendChild(sLunchContainer);

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
    mainContainer.appendChild(tLunchContainer);
   }
   getLunch();

   function getDessert() {
    dessertTitleEl.textContent = 'Dessert dishes';
    fDessertText.textContent = `"When words cannot express how much you love someone, food can." 
    - Wolfelt, Alan D. We are pleased to offer you this mouthwatering dish of Ghanaian 
    kelewele here on Yottanet. Please feel free to try it for dessert.
    `;

    fDImage.setAttribute('src', '../Images/Kelewele.jpg');
    fDImage.setAttribute("height", "300");
    fDImage.setAttribute("width", "300");

    fDessertImageEl.appendChild(fDImage);
    fDessertImageEl.appendChild(fDessertText);
    fDessertContainer.appendChild(fDessertImageEl);

    mainContainer.appendChild(dessertTitleEl);
    mainContainer.appendChild(fDessertContainer);    

    sDessertText.textContent = `This is what happens when you try our sandwich,
     which is thoughtfully prepared by our professional chefs @yottanet restaurant,"
      said the smiling person holding a sandwich in one hand."
    `
    sDImage.setAttribute('src', '../Images/sausage-egg-sandwish.jpg');
    sDImage.setAttribute("height", "300");
    sDImage.setAttribute("width", "300");

    sDessertImageEl.appendChild(sDImage);
    sDessertContainer.appendChild(sDessertImageEl);
    sDessertContainer.appendChild(sDessertText);
    mainContainer.appendChild(sDessertContainer);

    tDessertText.textContent = `This is what happens when you try our sandwich,
     which is thoughtfully prepared by our professional chefs @yottanet restaurant,"
      said the smiling person holding a sandwich in one hand."
    `
    tDImage.setAttribute('src', '../Images/dessert-2.jpg');
    tDImage.setAttribute("height", "300");
    tDImage.setAttribute("width", "300");

    tDessertImageEl.appendChild(tDImage);
    tDessertContainer.appendChild(tDessertImageEl);
    tDessertContainer.appendChild(tDessertText);
    mainContainer.appendChild(tDessertContainer);

    

   }
   getDessert();

   function getBeverage() {
    beverageTitleEl.textContent = 'Beverage dishes';
    fBeverageText.textContent = ``;

    fBImage.setAttribute('src', '../Images/white-beverage.jpg');
    fBImage.setAttribute("height", "300");
    fBImage.setAttribute("width", "300");

    fBeverageImageEl.appendChild(fBImage);
    fBeverageImageEl.appendChild(fBeverageText);
    fBeverageContainer.appendChild(fBeverageImageEl);

    mainContainer.appendChild(beverageTitleEl);
    mainContainer.appendChild(fBeverageContainer);  

    sBeverageText.textContent = ` `
    sBImage.setAttribute('src', '../Images/chocolate-beverage.jpg');
    sBImage.setAttribute("height", "300");
    sBImage.setAttribute("width", "300");

    sBeverageImageEl.appendChild(sBImage);
    sBeverageContainer.appendChild(sBeverageImageEl);
    sBeverageContainer.appendChild(sBeverageText);
    mainContainer.appendChild(sBeverageContainer);

    tBeverageText.textContent = ` `
    tBImage.setAttribute('src', '../Images/red-ice-beverage.jpg');
    tBImage.setAttribute("height", "300");
    tBImage.setAttribute("width", "300");

    tBeverageImageEl.appendChild(tBImage);
    tBeverageContainer.appendChild(tBeverageImageEl);
    tBeverageContainer.appendChild(tBeverageText);
    mainContainer.appendChild(tBeverageContainer); 
   }
   getBeverage();

}
menu.addEventListener('click', getMenu);
export default { getMenu };