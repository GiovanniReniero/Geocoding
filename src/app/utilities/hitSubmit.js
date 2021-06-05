import {urlBuilder} from "./urlBuilder.js"

const hitSubmit = (event) => {
  event.preventDefault()
  const findChoice = document.querySelector("#luogo")
  const choice = findChoice.value //choice gives the name of the location.
  urlBuilder(choice)
}

export {hitSubmit}