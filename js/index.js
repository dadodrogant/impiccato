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
var perflenght = parola.length;

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
var checkarray = [];
for(let i in arraycaratteri){
    checkarray.push(" ");
}
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
        let ok = true;
        if(trovata){     
            btn.style.backgroundColor = "#1b7d35b0"  
            for(let i=0; i<parola.length; i++){
                ok = true;
                x = arraycaratteri[i];
                if(x.toUpperCase() == text){
                    contletter++;
                    arraytab[i].innerHTML = text;
                    
                    for(let u =0; u<parola.length; u++){
                        if(checkarray[u]==" "){
                            
                            if(arraycaratteri[u].toUpperCase()==text){
                                checkarray[u]=text;                                
                            }
                            
                        }                     
                    }
                    
                }

                for(let y in checkarray){
                    if(checkarray[y]==" "){
                        ok = false;
                    }
                }
                
            }
            if(ok==true)
                winf("YOU WIN");
        }else{
            btn.style.backgroundColor = "#a32520b0"
            errori++;
            imgcontainer.classList.remove("img"+`${errori-1}`)
                imgcontainer.classList.add("img"+`${errori}`);
            if(errori==4){           
                winf("YOU LOSE")
            }
        }
    }
}

startbtn.addEventListener("click", () =>{
    canplay = true;
    startbtn.innerText = "RESTART";
    location.reload();
});

function winf(text){
    var mydiv = document.getElementById("windiv");
    mydiv.style.display = "flex";
    mydiv.style.justifyContent = "center";
    mydiv.style.alignItems = "center";
    mydiv.innerHTML = `<h1>${text}</h1>`;
    canplay = false;
}
