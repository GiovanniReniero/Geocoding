import {urlBuilder} from "./urlBuilder.js"

const hitSubmit = (event) => {
  event.preventDefault()
  const findChoice = document.querySelector("#luogo")
  const choice = findChoice.value
  urlBuilder(choice)
}

export {hitSubmit}