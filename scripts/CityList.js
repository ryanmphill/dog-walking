import { getWalkers } from "./database.js" // Added an 's' to 'getWalkers'

const walkers = getWalkers()  // Added an 's' to 'getWalkers'


export const CityList = () => {
    let citiesHTML = "<ul>"  // changed to unordered list

    for (const walker of walkers) {
        citiesHTML += `<li>${walker.city}</li>` // Changed currentWalker to walker
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

