import { mainContainer } from "./page-load";
const contactUsBtn = document.querySelector('.contact')
const asideEl = document.createElement('aside');
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
const directionEl = document.createElement('h2');
const iframeEl = document.createElement('iframe')

function getContact() {
    document.body.style.backgroundImage = "url('../Images/Bg-waiter-2.jpg')";
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat"

    mainContainer.textContent = "";
    h1.textContent = 'working Hours';
    breakfastEl.textContent = 'BreakFast: Monday - Saturday, 6:30am - 10:00am';
    lunchEl.textContent = 'Lunch: Sunday - Saturday, 12:00pm - 3:30pm';
    supperEl.textContent = 'Dinner: Sunday - Saturday, 5:00pm - 10:30pm'
    dessertEl.textContent = 'Dessert: Sunday - Saturday, 4:00pm - 11:pm';
    locationEl.textContent = 'THE PEPPERS GOIL FILLING STATION, OPP.BLOWCHEM INDUSTRIES, Ghana, Kpone Barrier Rd, Tema';

    contactNumber.textContent = 'Number: 0594172522';
    contactEmail.textContent = "Email: brightanyawe@gmail.com";

    // directionEl.textContent = 'Get direction: ';
    // iframeEl.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73390.26065986295!2d-0.039885810538683064!3d5.695495188669766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10207f840f66ae07%3A0x197e2842ab1198ea!2sNEW%20PEPPER&#39;S%20-%20Multi-Cuisine%20Restaurant!5e0!3m2!1sen!2sgh!4v1716281899859!5m2!1sen!2sgh'); 
    
    // iframeEl.width = '600';
    // iframeEl.height = '450';
    // iframeEl.style.border = '0';
    // iframeEl.allowFullscreen = true;
    // iframeEl.loading = 'lazy';
    // iframeEl.referrerPolicy = 'no-referrer-when-downgrade';
    
asideEl.appendChild(h1);
asideEl.appendChild(breakfastEl);
asideEl.appendChild(lunchEl);
asideEl.appendChild(supperEl);
asideEl.appendChild(dessertEl);
asideEl.appendChild(locationEl);
contactDetailsEl.appendChild(contactNumber);
contactDetailsEl.appendChild(contactEmail);
// asideEl.appendChild(contactDetailsEl);

mapEl.appendChild(directionEl);
mapEl.appendChild(iframeEl);
mainContainer.appendChild(asideEl);
mainContainer.appendChild(mapEl)
    

}
contactUsBtn.addEventListener('click', getContact);