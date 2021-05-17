import {printData} from "./printData.js"



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

export {reqMapBox}