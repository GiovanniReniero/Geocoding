import {printMap} from "./printMap.js"

export function gatherNamendCoords (array){
  // console.log(array[0].long)
  const long = array[0].long  
  const lat = array[0].lat
  printMap(long, lat)  
}