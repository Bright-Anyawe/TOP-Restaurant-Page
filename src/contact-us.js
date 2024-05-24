import { mainContainer } from "./page-load";
const container = document.createElement('section');
container.classList.add('container');
const contactUsBtn = document.querySelector('.contact')
const contactInfo = document.createElement('div');
contactInfo.classList.add('contactInfo');
const h1 = document.createElement('h1');
const breakfastEl = document.createElement('p');
const lunchEl = document.createElement('p');
const dessertEl = document.createElement('p');
const supperEl = document.createElement('p');
const locationEl = document.createElement('p');

const contactDetailsEl =document.createElement('div');
const contactNumber = document.createElement('p');
const contactEmail = document.createElement('p');

const mapEl = document.createElement('div');
mapEl.classList.add('mapEl')
const directionEl = document.createElement('h2');
const mapImg = document.createElement('img')


function getContact() {
    document.body.style.backgroundImage = "url('../Images/Bg-two-in-one.jpg')";
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat"

    mainContainer.textContent = "";
    h1.textContent = 'Working Hours';
    breakfastEl.textContent = 'BreakFast: Monday - Saturday, 6:30am - 10:00am';
    lunchEl.textContent = 'Lunch: Sunday - Saturday, 12:00pm - 3:30pm';
    supperEl.textContent = 'Dinner: Sunday - Saturday, 5:00pm - 10:30pm'
    dessertEl.textContent = 'Dessert: Sunday - Saturday, 4:00pm - 11:pm';
    locationEl.textContent = 'THE PEPPERS GOIL FILLING STATION, OPP.BLOWCHEM INDUSTRIES, Ghana, Kpone Barrier Rd, Tema';

    contactNumber.textContent = 'Number: 0594172522';
    contactEmail.textContent = "Email: brightanyawe@gmail.com";

    directionEl.textContent = 'Get direction: ';
    mapImg.setAttribute('src', '../Images/Map-for-pepper-restaurant.png');    
    
contactInfo.appendChild(h1);
contactInfo.appendChild(breakfastEl);
contactInfo.appendChild(lunchEl);
contactInfo.appendChild(supperEl);
contactInfo.appendChild(dessertEl);
contactInfo.appendChild(locationEl);
contactDetailsEl.appendChild(contactNumber);
contactDetailsEl.appendChild(contactEmail);

// asideEl.appendChild(contactDetailsEl);

mapEl.appendChild(directionEl);
mapEl.appendChild(mapImg);
container.appendChild(contactInfo);
container.appendChild(mapEl);
mainContainer.appendChild(container);

}
contactUsBtn.addEventListener('click', getContact);