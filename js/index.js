const startbtn = document.getElementById("new-game");
var canplay = false;
var lettercontainer = document.getElementById("letter-container")
var errori = 0;
startbtn.addEventListener("click", () =>{
    canplay = true;
    startbtn.innerText = "RESTART";

    startbtn.addEventListener("click",() => {
        if(startbtn.innerText == "RESTART"){
            location.reload();
        }
    });
});
const listparole = [
    "casa",
    "chiavetta",
    "telecomando",
    "cane",
    "gatto",
    "telefono",
    "banana",
    "pallacanestro",
    "tastiera",
    "pallone",
    "spiaggia",
    "bottone",
    "lacci",
    "bara",
    "finestra",
    "torre",
    "cavallo",
    "regina",
    "ordine",
    "delfino",
    "mamma",
    "papa"
];
var arraycaratteri;
let tabcontainer = document.getElementById("tabcontainer");
var indiceCasuale = Math.floor(Math.random() * listparole.length+1);
const parola = listparole[indiceCasuale];
arraycaratteri = parola.split("");
var arraytab;
function caricaparola(){
    
    
    for(let i=65; i<91; i++){
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
    
        button.addEventListener("click",()=>{
            clkbtn(button.innerText);
        });
        lettercontainer.append(button);
    }
    for(let i=0; i<arraycaratteri.length; i++){
        tabcontainer.innerHTML += `<span class="lowtab">_ </span>`;
    }

    
    arraytab = document.querySelectorAll(".lowtab");
}


/* for(let i=65; i<95; i++){
    let button = document.createElement("button");
    button.classList.add("letters");
    button.innerText = String.fromCharCode(i);

    button.addEventListener("click",()=>{
        let arraycaratteri = parola.split("");
    });
} */
let trovata=false;
var contletter=0;
let t= "";
var imgcontainer = document.getElementById("imgcontainer");
function clkbtn(text){
    trovata=false;
    for(let i=0; i<parola.length; i++){
        t = arraycaratteri[i];
        if(t.toUpperCase() == text){
            trovata = true;
            break;
        }
    }
    let x = "";
    if(trovata){       
        for(let i=0; i<parola.length; i++){
            
            x = arraycaratteri[i];
            if(x.toUpperCase() == text){
                contletter++;
                arraytab[i].innerHTML = text;
            }
        }
    }else{
        errori++;
        if(errori!=5){
            imgcontainer.classList.remove("img"+`${errori-1}`)
            imgcontainer.classList.add("img"+`${errori}`);
        }
    }
}