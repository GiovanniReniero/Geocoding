


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

export {printData}
