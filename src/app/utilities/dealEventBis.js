import {urlBuilder2} from "./urlBuilder"

const dealEventBis = (event)=>{
  event.preventDefault()
  console.log("Ciao from inside dealEventBis")
  let dinko =  document.getElementsByName("option")
  console.log(dinko)
  for (let radio of dinko) {
    if (radio.checked){
      let values = radio.value.split(",")
      console.log(values)
      //send the values off to prindata that will only accept an object?
      urlBuilder2(values)
    }
  }
}

export { dealEventBis }