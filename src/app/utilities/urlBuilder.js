import {reqMapBox} from "./reqMapBox.js"

let token = "pk.eyJ1IjoiZ2lvcmVuIiwiYSI6ImNrb3F4b2piMjB6djIyeW51MXRrNDlibnAifQ.Xrh4UH-0RwRGCRPRxl-EpA"

function urlBuilder (choice) {
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${choice}.json?access_token=${token}`
  reqMapBox(url)
}

const urlBuilder2 = (choice) => {
  console.log("hello from inside urlBuilder2", choice)
  let proximity = choice.slice(-6)
  let name = choice[0]
  proximity.unshift(name) // Created an array with Name and coordinates of desired location
  console.log(proximity)
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${proximity[0]}.json?access_token=${token}&proximity=${proximity[1]},${proximity[2]}&limit=1&bbox=${proximity[3]}, ${proximity[4]}, ${proximity[5]}, ${proximity[6]}`
  // console.log(url)
  reqMapBox(url) 
}

export { urlBuilder, urlBuilder2 }

