const d=document;

export default function searchFilter(input,selector){
    d.addEventListener("keyup",e=>{
        console.log(e.target.value);
       
        if(e.target.matches(input)){
           
            d.querySelectorAll(selector).forEach((el)=>{
               // console.log(el.textContent);
               
               if( el.querySelector("figcaption").textContent.toLowerCase().includes(e.target.value)){
               // console.log( el.querySelector("figcaption").textContent)
                
                el.classList.remove("filter")

               }else{
                el.classList.add("filter")
               }
            }
            );
        }
    })
}