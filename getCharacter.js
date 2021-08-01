const API_URL="https://rickandmortyapi.com/";
const url_personaggi="api/character/";
const url_page="?page=";
let character=[];
const d=document;


function inserthtml(){
const $section_cards=d.querySelector(".cards");
let $template=d.getElementById("template-card").content;
const $fragment=d.createDocumentFragment();

character.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.image);
    $template.querySelector("figcaption").textContent=el.name;  
    //console.log($template.querySelector("figcaption").textContent=el.name);
    
    let $clone=d.importNode($template,true);
    $fragment.appendChild($clone);
});

$section_cards.appendChild($fragment);

}

export default async function getAllCharater(){
    let i=1;
    let cond;

    try {
        do {       
            let request= await fetch(`${API_URL}${url_personaggi}${url_page}${i}`);
            let res=await request.json();
            (res.info.next!=null)?cond=true:cond=false;
            
            for (const el of res.results) {
                character.push({id:el.id,name:el.name,status:el.status,image:el.image});                      
            }       
            i++;
        } while (cond);

       /* for (const el of character) {
            console.log(el)                      
        }    */
        
        inserthtml();
        
        
    } catch (error) {
        console.log("error: "+error);
    }
    
    
}



