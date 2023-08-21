const startbtn = document.getElementById("new-game");
var canplay = true;
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
var indiceCasuale = Math.floor(Math.random() * listparole.length);
const parola = listparole[indiceCasuale];
arraycaratteri = parola.split("");
var arraytab;
function caricaparola(){
    
    
    for(let i=65; i<91; i++){
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
    
        button.addEventListener("click",()=>{
            
            clkbtn(button.innerText,button);
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

function clkbtn(text,btn){
    if(canplay){    
        let btnarray = document.querySelectorAll(".letters");
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
            btn.style.backgroundColor = "#1b7d35b0"  
            for(let i=0; i<parola.length; i++){
                
                x = arraycaratteri[i];
                if(x.toUpperCase() == text){
                    contletter++;
                    arraytab[i].innerHTML = text;
                }
            }
        }else{
            btn.style.backgroundColor = "#a32520b0"
            errori++;
            imgcontainer.classList.remove("img"+`${errori-1}`)
                imgcontainer.classList.add("img"+`${errori}`);
            if(errori==4){           
                var mydiv = document.getElementById("windiv");
                mydiv.style.display = "flex";
                mydiv.style.justifyContent = "center";
                mydiv.style.alignItems = "center";
                mydiv.innerHTML = `<h1>YOU LOSE</h1>`;
                canplay = false;
            }
        }
    }
}

startbtn.addEventListener("click", () =>{
    canplay = true;
    startbtn.innerText = "RESTART";
    location.reload();
});
