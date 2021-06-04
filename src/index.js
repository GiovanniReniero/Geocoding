import {hitSubmit} from "./app/utilities/hitSubmit.js"
import {urlBuilder} from "./app/utilities/urlBuilder.js"
import "./style.css"

console.log("Whelahhh, Nicaragua, Paraguai, Uruguai... vai Giovai, vai!!!!")

const userEntry = document.querySelector("form")
userEntry.addEventListener("submit", hitSubmit)

urlBuilder("Roma")

// 2) Nice to have would be to choose which place to see on map from options provided by mapbox
// 3) Implement places of interest around chosen location as an extra
// 4) Offer different styles of map to the end user (satelite and 3d buildings etc.)