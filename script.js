let matn = document.getElementById("area")
let select = document.getElementById("select")
let button = document.getElementById("btn")

let til = document.querySelector(".til").value


function gapir(e) {
    
    console.log(matn.value);
    
     if(matn.value.trim() === ""){
        alert("iltimos matn kiriting")
        return
     } 
    const ovozSozlamasi = new SpeechSynthesisUtterance(matn.value);

    ovozSozlamasi.lang = til.value
    window.speechSynthesis.speak(ovozSozlamasi)
}


btn.addEventListener("click", gapir)