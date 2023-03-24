const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
    }
];
const containerThumbnailEl = document.querySelector(".container_thumbnail")
const containerImgBackground = document.querySelector(".my_container")
const titleMovieEl = document.querySelector(".title_movie")
const descriptionEl = document.querySelector(".description")
const btnLeft = document.querySelector(".btn_left")
const btnRight = document.querySelector(".btn_right")
let counterActive = 0;
const stopBtnEl = document.querySelector(".stop_btn")
const playBtnEl = document.querySelector(".play_btn")
const reverseBtnEl = document.querySelector(".reverse_btn")


// create images, info  and thumbnails element in DOM 
createThumbnailAndBackground(containerThumbnailEl, images, containerImgBackground);

//create Variable of Array background and thumbnail
const totalBackground = document.querySelectorAll(".img_background")
const totalThumbnails = document.querySelectorAll(".thumbnail")

//I make the thumbnails clickable
clickThumbnail();

// add autoplay since opening the page
let variableAutoplayFunction = setInterval(turnToTheRight, 8000);

//create media buttons to control autoplay

//add stop button
stopBtnEl.addEventListener("click", (e) => {
    stopBtnEl.classList.add("light_press")
    stopBtnEl.nextElementSibling.classList.remove("light_press")
    clearInterval(variableAutoplayFunction)
})

// add play button 
playBtnEl.addEventListener("click", (e) => {
    playBtnEl.previousElementSibling.classList.remove("light_press")
    playBtnEl.classList.add("light_press")
    clearInterval(variableAutoplayFunction)

    if (reverseBtnEl.classList.contains("light_press")) {
        variableAutoplayFunction = setInterval(turnToTheLeft, 8000)
    } else {
        variableAutoplayFunction = setInterval(turnToTheRight, 8000);
    }
})

// add reverse button 
let direction = true;
reverseBtnEl.addEventListener("click", function () {
    reverseBtnEl.classList.toggle("light_press")
    direction = !direction;
    clearInterval(variableAutoplayFunction)
    if (!stopBtnEl.classList.contains("light_press")) {
        if (direction == false) {
            variableAutoplayFunction = setInterval(turnToTheLeft, 8000)
        } else {
            variableAutoplayFunction = setInterval(turnToTheRight, 8000)
        }
    }
})

// add event listener to button left and right
btnRight.addEventListener("click", () => turnToTheRight())

btnLeft.addEventListener("click", () => turnToTheLeft())


// -------FUNCTION

/**
 * Create thumbnails and Main Img for layout
 * @param {object} containerThumbnailEl Dom object container_thumbnail
 * @param {array} images array of object with info of images
 * @param {object} containerImgBackground Dom object container_thumbnail
 */
function createThumbnailAndBackground(containerThumbnailEl, images, containerImgBackground) {
    images.forEach((object, index) => {

        // create Thumbnails
        let classshadowEl = index == counterActive ? "shadow" : "";
        let SingleElementThumbNail = `
            <div class="thumbnail p-2 ${classshadowEl}"> 
                <img src="./assets/${object.image}" alt="Thumbnail_${object.title}">
            </div>`
        containerThumbnailEl.insertAdjacentHTML("beforeend", SingleElementThumbNail)

        // create Background
        let classEl = index == counterActive ? "active" : "";
        let SingleElementBackground = `<img src="./assets/${object.image}" class=" ${classEl} img_background" alt="${object.title}">`
        containerImgBackground.insertAdjacentHTML("beforeend", SingleElementBackground)

        // add description main img 
        if (index == counterActive) {
            titleMovieEl.innerHTML = object.title;
            descriptionEl.innerText = object.text;
        }
    })
}

/**
 * add possibility of click thumbNails 
 */
function clickThumbnail() {
    totalThumbnails.forEach((element, index) => {
        element.addEventListener("click", function () {
            // update number of counterActive 
            counterActive = index;
            // change the illuminated thumbnail
            let thumbnailWithShadow = document.querySelector(".shadow")
            thumbnailWithShadow.classList.remove("shadow")
            this.classList.add("shadow")
            // change the image background
            let BackgroundlWithActive = document.querySelector(".active")
            BackgroundlWithActive.classList.remove("active")
            totalBackground[index].classList.add("active")  //perchè?
            // change description
            titleMovieEl.innerHTML = images[index].title;
            descriptionEl.innerText = images[index].text;

        })

    })
}

/**
 * create function for turn to right
 */
function turnToTheRight() {
    // reset active 
    let current_background = totalBackground[counterActive]
    current_background.classList.remove("active")
    //reset shadow on thumbnail
    let current_thumbanail = totalThumbnails[counterActive]
    current_thumbanail.classList.remove("shadow")
    // counterActive = counterActive > totalBackground.length - 2 ? 0 : counterActive++;
    // condition of loop 
    if (counterActive > totalBackground.length - 2) {
        counterActive = 0;
    } else {
        counterActive++
    }

    // new img 
    let new_current_background = totalBackground[counterActive]
    new_current_background.classList.add("active")
    // new thumbnail
    let new_current_thumbanail = totalThumbnails[counterActive]
    new_current_thumbanail.classList.add("shadow")
    // new description 
    titleMovieEl.innerHTML = images[counterActive].title;
    descriptionEl.innerText = images[counterActive].text;
}

/**
 * create function for turn to left
 */
function turnToTheLeft() {
    // reset active 
    let current_background = totalBackground[counterActive]
    current_background.classList.remove("active")

    //reset shadow on thumbnail
    let current_thumbanail = totalThumbnails[counterActive]
    current_thumbanail.classList.remove("shadow")

    // condiction for loop 
    if (counterActive <= 0) {
        counterActive = totalBackground.length - 1;
    } else {
        counterActive--
    }

    // new img 
    let new_current_background = totalBackground[counterActive]
    new_current_background.classList.add("active")

    // new thumbnail
    let new_current_thumbanail = totalThumbnails[counterActive]
    new_current_thumbanail.classList.add("shadow")

    // new description 
    titleMovieEl.innerHTML = images[counterActive].title;
    descriptionEl.innerText = images[counterActive].text;
}










