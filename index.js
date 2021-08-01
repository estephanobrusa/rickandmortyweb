import getAllCharater from "./getCharacter.js";
import searchFilter from "./filter.js";

const d=document;


d.addEventListener("DOMContentLoaded",e=>{
  getAllCharater();
  searchFilter(".card-filter",".card");

  
})


//let buttonRandomSearch=document.querySelector("btn-random");



//buttonRandomSearch.addEventListener("click",getImgRandom());


