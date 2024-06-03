import { mainContainer } from "./page-load";
const ContactInfoContainer = document.createElement('section');
ContactInfoContainer.classList.add('ContactInfoContainer');
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
const mapImg = document.createElement('img');
mapImg.classList.add('mapImg');


function getContact() {
    document.body.style.backgroundImage = "url('../Images/Bg-6th.jpg')";
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat"
    

    mainContainer.textContent = "";
    h1.textContent = 'Working Hours';
    breakfastEl.textContent = 'BreakFast:  Monday - Saturday, 6:30am - 10:00am';
    lunchEl.textContent = 'Lunch:  Sunday - Saturday, 12:00pm - 3:30pm';
    supperEl.textContent = 'Dinner:   Sunday - Saturday, 5:00pm - 10:30pm'
    dessertEl.textContent = 'Dessert:   Sunday - Saturday, 4:00pm - 11:pm';
    locationEl.textContent = 'THE PEPPERS GOIL FILLING STATION, OPP.BLOWCHEM INDUSTRIES, Ghana, Kpone Barrier Rd, Tema';

    contactNumber.textContent = 'Number: 059-417-2522';
    contactEmail.textContent = "Email: brightanyawe@gmail.com";

    directionEl.textContent = 'Get direction: ';
    mapImg.setAttribute('src', '../Images/Map-for-pepper-restaurant.png');    
    
contactInfo.appendChild(h1);
contactInfo.appendChild(breakfastEl);
contactInfo.appendChild(lunchEl);
contactInfo.appendChild(supperEl);
contactInfo.appendChild(dessertEl);
contactInfo.appendChild(contactNumber);
contactInfo.appendChild(contactEmail);
contactInfo.appendChild(locationEl);

// asideEl.appendChild(contactDetailsEl);

mapEl.appendChild(directionEl);
mapEl.appendChild(mapImg);
ContactInfoContainer.appendChild(contactInfo);
ContactInfoContainer.appendChild(mapEl);
mainContainer.appendChild(ContactInfoContainer);

}
contactUsBtn.addEventListener('click', getContact);