import { mainContainer } from "./page-load";
const contactUsBtn = document.querySelector('.contact')

function getContact() {
    document.body.style.backgroundImage = "url('../Images/avocado-video-overlay-413x500.png.webp')";
    mainContainer.textContent = "";
    console.log('Hi, get our contact')

}
contactUsBtn.addEventListener('click', getContact);