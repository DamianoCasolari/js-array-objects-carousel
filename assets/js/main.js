const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const containerThumbnailEl = document.querySelector(".container_thumbnail")
const containerImgBackground = document.querySelector(".my_container")
const titleMovieEl = document.querySelector(".title_movie")
const descriptionEl = document.querySelector(".description")
const btnLeft = document.querySelector(".btn_left")
const btnRight = document.querySelector(".btn_right")
let counterActive = 0;
let arrayElementBackGroud = []
let arrayElementThumbnail = []

createThumbnailAndBackground(containerThumbnailEl, images, containerImgBackground);


// -------FUNZIONI 

/**
 * Create thumbnails and Main Img
 * @param {object} containerThumbnailEl Dom object container_thumbnail
 * @param {array} images array of object with info of images
 * @param {object} containerImgBackground Dom object container_thumbnail
 */
function createThumbnailAndBackground(containerThumbnailEl, images, containerImgBackground) {
    images.forEach((object, index) => {

        // create Thumbnails
        let classshadowEl = index == counterActive ? "shadow" : "";
        let SingleElementThumbNail = `<div class="thumbnail p-2 ${classshadowEl}"> 
                <img src="./assets/${object.image}" alt="Thumbnail_${object.title}">
            </div>`
        containerThumbnailEl.innerHTML += SingleElementThumbNail;
        // create Background
        let classEl = index == counterActive ? "active" : "";
        let SingleElementBackground = `<img src="./assets/img/01.webp" class=" ${classEl} img_background" alt="${object.title}">`
        containerImgBackground.insertAdjacentHTML("beforeend", SingleElementBackground)

        // add description main img 
        if (index == counterActive) {
            titleMovieEl.innerHTML = object.title;
            descriptionEl.innerHtml = object.text;
        }
    })
}

function BtnRight(){
    
}










