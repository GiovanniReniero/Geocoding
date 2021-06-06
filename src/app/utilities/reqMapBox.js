import {printData} from "./printData.js"
import {printData2} from "./printData.js"
import axios from 'axios'

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


// below the reqmapbox that should only return one location for printData, investigate this and get it to work in order to avoid continuyouse multiple search results.Cosider reducing initial search results to a maximum of 3.

const reqMapBox2 = (url) => {
  axios.get(url)
  .then(({data}) => {
    let posti = (data.features)
    console.log("Here we are inside reqMapBox2", posti)
    
    printData(posti)
  })
  .catch((error) => {
    console.log("ERROR!", error)
  })
} 

export {reqMapBox, reqMapBox2}