import {reqMapBox} from "./reqMapBox.js"


function urlBuilder (choice) {
  let token = "pk.eyJ1IjoiZ2lvcmVuIiwiYSI6ImNrb3F4b2piMjB6djIyeW51MXRrNDlibnAifQ.Xrh4UH-0RwRGCRPRxl-EpA"
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${choice}.json?access_token=${token}`
  reqMapBox(url)
}

export {urlBuilder}