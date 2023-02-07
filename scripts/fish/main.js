// import { getFish } from './database.js'
import { FishList } from './fishList.js'
// const allFish = getFish()
// console.log(allFish)
// for (const fish of allFish) {
//     console.log(fish)
// }
// FishList()

// console.log(getFish)


// Import the FishList function from the correct module
// import {workspace/martins-aquarium/scripts/FishList.js} from ''

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".Martin-fishList")


parentHTMLElement.innerHTML = FishList()