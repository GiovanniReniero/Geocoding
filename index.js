console.log ("Vai Giovanni!!! Fino a qui ci arrivi")
//API key = pk.eyJ1IjoiZ2lvcmVuIiwiYSI6ImNrb3F4b2piMjB6djIyeW51MXRrNDlibnAifQ.Xrh4UH-0RwRGCRPRxl-EpA

function printData (posti) {
  console.log(posti)
  const section = document.querySelector("section")
  section.innerHTML=""
  for (let element of posti){
    const name = element.place_name
    const nome = document.createElement("h2")
    nome.innerText = name
    section.appendChild(nome)
    const coord = element.center
    const longLat = document.createElement("h3")
    longLat.innerText = coord
    section.appendChild(longLat)
  }
}

const reqMapBox = (url) => {
  axios.get(url)
  .then(({data}) => {
    let posti = (data.features)
    printData(posti)
  })
  .catch((error) => {
    console.log("ERROR!", error)
  })
} 

function urlBuilder (choice) {
  
  let token = "pk.eyJ1IjoiZ2lvcmVuIiwiYSI6ImNrb3F4b2piMjB6djIyeW51MXRrNDlibnAifQ.Xrh4UH-0RwRGCRPRxl-EpA"
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${choice}.json?access_token=${token}`

  reqMapBox(url)
} 

const hitSubmit = (event) => {
  event.preventDefault()
  const findChoice = document.querySelector("#luogo")
  const choice = findChoice.value
  urlBuilder(choice)
}

const userEntry = document.querySelector("form")
userEntry.addEventListener("submit", hitSubmit)

