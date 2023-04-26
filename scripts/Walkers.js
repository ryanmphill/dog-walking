import { getWalkers } from "./database.js"  // Changed getWalker to getWalkers

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li>${walker.name}</li>` //Changed fullName to name
    }

    walkerHTML += "</ul>"
    return walkerHTML // Added return statement

}

