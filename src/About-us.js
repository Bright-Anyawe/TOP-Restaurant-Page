const aboutUsBtn = document.querySelector('.aboutUs');
const hero = document.createElement('div');
const sectionEl = document.createElement('div');

function aboutUs() {
    let h1 = document.createElement('h1');
    let storyEl = document.createElement('p');
    let sectionH1 = document.createElement('h1');
    let sectionText = document.createElement('p');
    let orderEl = document.createElement('h2');

    h1.textContent = 'Our Story';
    storyEl.textContent = `"At Blanket Food, we believe the best dishes are the ones that remind you of childhood.
 A portion of great food should make you feel like you are wrapped in a warm blanket.
At our location in Boston or online, you will find the best dishes you didn't know you craved:
 extra-creamy mac and cheese, hot chicken casserole, fried dumplings like your mama makes, and many more.
Forget about the daily stress and come relax with us. After tasting any of our menu items, you will never
 want to leave!"`

    sectionH1.textContent = 'From The Kitchen';
    sectionText.textContent = `plantain and stew, jollof rice, sandwich. if there's 
    a pacticular kind of food you crave, find the perfect time to come in and discover the new way to love it.` 
    orderEl.textContent = 'Click To Order Now';



}