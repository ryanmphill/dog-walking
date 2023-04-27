import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const walkerId = clickTarget.dataset.walkerForeignKey //The DOMStringMap converts the additional dashes in walker-foreign-key to snake case within the dataset object

        // Find the whole walker object based on the walkerId from above
        if (clickTarget.dataset.type === 'pet') {
            for (const walker of walkers) {
                if (walkerId === `${walker.id}`) { //Remember that walkerId (from the dataset) is stored as a string. You can use 'parseInt' to turn into string, or use a template literal.
                    window.alert(`This pet is being walked by ${walker.name}`)
                    
                }
            }
        }  
    } 
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"
    //The DOMStringMap converts the additional dashes in walker-foreign-key to snake case within the dataset object
    for (const pet of pets) {
        petHTML += `<li data-walker-foreign-key="${pet.walkerId}"
        data-type="pet" 
        >${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

