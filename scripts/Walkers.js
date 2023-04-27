import { getWalkers } from "./database.js"  // Changed getWalker to getWalkers

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const whatWasClickedOn = clickEvent.target    
        /* Target picks out element that was clicked on. 'dataset' is a propety of 
        that element that uses DOMStringMap to store all the data attributes 
        as an object. */
        if (whatWasClickedOn.dataset.type === 'walker') {
            window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
        }
        
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
        data-city="${walker.city}"
        data-type="walker"
        >${walker.name}</li>` //Changed fullName to name
    }

    walkerHTML += "</ul>"
    return walkerHTML // Added return statement

}

