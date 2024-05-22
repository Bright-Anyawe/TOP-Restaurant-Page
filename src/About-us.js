import { mainContainer } from "./page-load.js"

const aboutUsBtn = document.querySelector('.aboutUs');
const hero = document.createElement('div');
hero.classList.add('hero')
const sectionEl = document.createElement('div');
sectionEl.classList.add('sectionEl')
let storyTitle = document.createElement('h1');
storyTitle.classList.add('storyTitle')
let storyEl = document.createElement('p');
storyEl.classList.add('storyEl')
let sectionH1 = document.createElement('h1');

let sectionText = document.createElement('p');
sectionText.classList.add('sectionText')
let orderEl = document.createElement('a');
orderEl.setAttribute('href', '#')

aboutUsBtn.addEventListener('click', function displayAboutUs() {
    document.body.style.backgroundImage = "url('../Images/food-with-black-background.jpg')";
    mainContainer.textContent = '';

    storyTitle.textContent = 'Our Story';
    storyEl.textContent = `"At Pepper-some restaurant, we believe the best dishes are the ones that remind you of childhood.
 A portion of great food should make you feel like you are wrapped in a warm net.
At our location in Kpone-barrier or online, you will find the best dishes you didn't know you craved:
 extra-creamy mac and cheese, hot chicken , special jollof like your mama makes, and many more.
Forget about the daily stress and come dine with us. After tasting any of our menu items, you will never
 want to leave!"`
 
 
    sectionH1.textContent = 'From The Kitchen';
    sectionText.textContent = `Ghanaian local dishes including plantain and stew, jollof rice, Abomu, Akple and okro soup among others. if there's 
    a pacticular kind of food you crave, find the perfect time to come in and discover the new way to love it.` 
    orderEl.textContent = 'Click To Order Now';

    hero.appendChild(storyTitle);
    hero.appendChild(storyEl);
    sectionEl.appendChild(sectionH1);
    sectionEl.appendChild(sectionText);
    sectionEl.appendChild(orderEl);
    mainContainer.appendChild(hero);
    mainContainer.appendChild(sectionEl);
}


);
// export default { displayAboutUs };
