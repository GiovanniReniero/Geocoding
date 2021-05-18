import {gatherNamendCoords} from "./gatherNamendCoords.js"



// function gatherNamendCoords (array){
  // console.log(array)  
// }

function printData (posti) {
  console.log(posti)
  const section = document.querySelector("section")
  section.innerHTML=""
  const results = []  
  for (let element of posti){
      if (element.place_type[0] === "place"){
        const keyVal={}
        const name = element.place_name
        console.log(name)
        keyVal["name"]=name
        const nome = document.createElement("h2")
        nome.innerText = name
        section.appendChild(nome)
        const coord = element.center
        keyVal["long"]=coord[0]
        keyVal["lat"]=coord[1]
        results.push(keyVal)
        const longLat = document.createElement("h3")
        longLat.innerText = coord
        section.appendChild(longLat)
      }
    }
  gatherNamendCoords(results)
}

export { printData }
