import {hitSubmit} from "./app/utilities/hitSubmit.js"
import {urlBuilder} from "./app/utilities/urlBuilder.js"
import "./style.css"

console.log("Hi from the index of J an S")

const userEntry = document.querySelector("form")
userEntry.addEventListener("submit", hitSubmit)

urlBuilder("Roma")


// 4) Offer different styles of map to the end user (satelite and 3d buildings etc.)