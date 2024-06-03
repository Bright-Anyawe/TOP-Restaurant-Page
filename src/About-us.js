import { mainContainer } from "./page-load.js"

const aboutUsBtn = document.querySelector('.aboutUs');
const aboutUsText = document.createElement('div');
aboutUsText.classList.add('aboutUsText');
const aboutUsHeroSection = document.createElement('div');
aboutUsHeroSection.classList.add('aboutUsHeroSection');
const aboutUsSectionEl = document.createElement('div');
aboutUsSectionEl.classList.add('aboutUsSectionEl')
let storyTitle = document.createElement('h1');
storyTitle.classList.add('storyTitle');
let storyEl = document.createElement('p');
storyEl.classList.add('storyEl')
let sectionH1 = document.createElement('h1');

let sectionText = document.createElement('p');
sectionText.classList.add('sectionText')
let orderEl = document.createElement('a');
orderEl.classList.add('orderEl')
orderEl.setAttribute('href', 'https://www.google.com/search?q=pepper+restaurant+near+me&sca_esv=69d501c9217a3f8b&sca_upv=1&sxsrf=ADLYWIK91neInRO2ECGHECg5kzjV_aN9KQ%3A1716407585564&ei=IU1OZtGIIoDRhbIP5d6AcA&oq=pepper+res&gs_lp=Egxnd3Mtd2l6LXNlcnAiCnBlcHBlciByZXMqAggAMgUQABiABDIFEAAYgAQyCxAuGIAEGMcBGK8BMgUQABiABDIREC4YgAQYxwEYmAUYmQUYrwEyBRAAGIAEMgUQABiABDIUEC4YgAQYxwEYmAUYmQUYngUYrwEyFBAuGIAEGMcBGJgFGJkFGJ4FGK8BMgUQABiABEjXf1DbF1jAPXACeASQAQCYAaIIoAGGN6oBCzMtMS4xLjIuNS4xuAEDyAEA-AEBmAIPoAK2O8ICBBAAGEfCAgoQABiwAxjWBBhHwgIKECMYgAQYJxiKBcICBBAjGCfCAhEQLhiABBiRAhjRAxjHARiKBcICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARiKBcICDhAAGIAEGLEDGIMBGIoFwgILEC4YgAQYsQMYgwHCAhQQLhiABBiRAhixAxjRAxjHARiKBcICChAuGIAEGEMYigXCAhAQLhiABBjRAxhDGMcBGIoFwgIIEC4YgAQYsQPCAiMQLhiABBiRAhixAxjRAxjHARiKBRiXBRjcBBjeBBjgBNgBAcICDhAuGIAEGJECGLEDGIoFwgIFEC4YgATCAgsQLhiABBjRAxjHAcICHRAuGIAEGJECGLEDGIoFGJcFGNwEGN4EGN8E2AEBmAMAiAYBkAYIugYGCAEQARgUkgcNNS4zLTEuMi40LjIuMaAHs-YB&sclient=gws-wiz-serp&lqi=ChlwZXBwZXIgcmVzdGF1cmFudCBuZWFyIG1lIgOQAQFIif-mz5mvgIAIWicQABABGAAYARgCGAMiGXBlcHBlciByZXN0YXVyYW50IG5lYXIgbWWSAQpyZXN0YXVyYW50mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU40YUhSaVVuaDNSUkFCqgFZEAEqFSIRcGVwcGVyIHJlc3RhdXJhbnQoADIfEAEiG8JPC0C6VJoEhnLqgA73iTlSqKZAoZFCd_6PAzIdEAIiGXBlcHBlciByZXN0YXVyYW50IG5lYXIgbWU#rlimm=1836949964816750826')

aboutUsBtn.addEventListener('click', function displayAboutUs() {
    document.body.style.backgroundImage = "url('../Images/Bg-4th.jpg')";
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

    aboutUsHeroSection.appendChild(storyTitle);
    aboutUsHeroSection.appendChild(storyEl);
    aboutUsSectionEl.appendChild(sectionH1);
    aboutUsSectionEl.appendChild(sectionText);
    aboutUsSectionEl.appendChild(orderEl);
    aboutUsText.appendChild(aboutUsHeroSection);
    aboutUsText.appendChild(aboutUsSectionEl);
    mainContainer.appendChild(aboutUsText)
}


);
// export default { displayAboutUs };
