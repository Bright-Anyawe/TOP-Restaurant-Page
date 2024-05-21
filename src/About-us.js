import { mainContainer } from "./page-load.js"

const aboutUsBtn = document.querySelector('.aboutUs');
const hero = document.createElement('div');
const sectionEl = document.createElement('div');
let h1 = document.createElement('h1');
let storyEl = document.createElement('p');
let sectionH1 = document.createElement('h1');
let sectionText = document.createElement('p');
let orderEl = document.createElement('h2');


aboutUsBtn.addEventListener('click', function displayAboutUs() {
    document.body.style.backgroundImage = "url('../Images/food-with-black-background.jpg')";
    mainContainer.textContent = '';

    h1.textContent = 'Our Story';
    storyEl.textContent = `"At Yottanet Food, we believe the best dishes are the ones that remind you of childhood.
 A portion of great food should make you feel like you are wrapped in a warm net.
At our location in Kpong or online, you will find the best dishes you didn't know you craved:
 extra-creamy mac and cheese, hot chicken casserole, special jollof like your mama makes, and many more.
Forget about the daily stress and come relax with us. After tasting any of our menu items, you will never
 want to leave!"`
 
 
    sectionH1.textContent = 'From The Kitchen';
    sectionText.textContent = `plantain and stew, jollof rice, sandwich. if there's 
    a pacticular kind of food you crave, find the perfect time to come in and discover the new way to love it.` 
    orderEl.textContent = 'Click To Order Now';

    hero.appendChild(h1);
    hero.appendChild(storyEl);
    sectionEl.appendChild(sectionH1);
    sectionEl.appendChild(sectionText);
    sectionEl.appendChild(orderEl);
    mainContainer.appendChild(hero);
    mainContainer.appendChild(sectionEl);
}


);
// export default { displayAboutUs };
