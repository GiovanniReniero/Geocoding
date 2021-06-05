 import {gatherNamendCoords} from "./gatherNamendCoords"
 import {dealEventBis} from "./dealEventBis"

 const section = document.querySelector(".immetti")
 let brk = document.createElement("br")
 let btn = document.createElement("button")
 btn.setAttribute("type", "submit")
 btn.innerText = "Select"
 
 
 function generateRadio (results) {
   console.log("Rodger from inside generateRadio", results.length) 
   section.innerHTML = ""
   const pleaseChoose = document.createElement("h4")
   pleaseChoose.innerText = "Select an option"
   section.appendChild(pleaseChoose)
   
   for(let i=0; i<results.length; i++) {
     let radioButton = document.createElement("input")
     radioButton.setAttribute("type", "radio")
     radioButton.setAttribute("name", "option")
     radioButton.setAttribute("value", `${results[i].name},${results[i].long},${results[i].lat}`)
     let radioLabel = document.createElement("label")
     radioLabel.setAttribute("for", `${results[i].long}`)
     radioButton.setAttribute("id", `${results[i].long}`)
     radioLabel.innerText = `${results[i].name}`
     section.appendChild(radioButton)
     section.appendChild(radioLabel)
     section.append(brk)
  }
  section.appendChild(btn)
  btn.addEventListener("click", dealEventBis)
}

function generateChoice(results){
  console.log("ciao from inside generateChoice")
  console.log(results)
  console.log(results.length)
  if (results.length > 1) {
    generateRadio(results)
  } 
  else {
    const nome = document.createElement("h2")
    nome.innerText = results[0].name
    section.appendChild(nome)
    const longitude = document.createElement("h3")
    const latitude = document.createElement("h3")
    longitude.innerText = `Long: ${results[0].long}`
    latitude.innerText = `Lat: ${results[0].lat}`
    section.appendChild(longitude)
    section.appendChild(latitude)
    gatherNamendCoords(results)
  }
}

function printData (posti) {
  console.log("Ciao from inside prinData")
  console.log(posti)
  section.innerHTML=""
  const results = []  
  for (let element of posti){
      if (element.place_type.includes("place")) {
        const keyVal={}
        const name = element.place_name
        const coord = element.center
        keyVal["name"]=name
        keyVal["long"]=coord[0]
        keyVal["lat"]=coord[1]
        results.push(keyVal)
        console.log(results)
      }
    }
  generateChoice(results)
  }

export { printData }
