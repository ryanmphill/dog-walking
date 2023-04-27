import { getWalkers } from "./database.js" // Added an 's' to 'getWalkers'

const walkers = getWalkers()  // Added an 's' to 'getWalkers'

document.addEventListener(
    "click",
    (clickEvent) => {
        const cityTarget = clickEvent.target
        if (cityTarget.dataset.type === 'city') {
            window.alert(`${cityTarget.dataset.walkerName} is servicing this city`)
        }
        
    }
)

export const CityList = () => {
    let citiesHTML = "<ul>"  // changed to unordered list

    for (const walker of walkers) {
        citiesHTML += `<li data-walker-name="${walker.name}"
        data-type="city"
        >${walker.city}</li>` // Changed currentWalker to walker
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

