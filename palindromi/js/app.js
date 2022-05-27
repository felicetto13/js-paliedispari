/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//chiediamo all'utente tramite input di inserire una parola palindroma
//salviamo l'input in una variabile

const word = document.querySelector("[name='insertWord']");
const submitBtn = document.getElementById("submitBtn");




submitBtn.addEventListener("click", function () {
    let wordValue = word.value;
    const re = /^[a-z].+$\gi/;
    let boolVerifica = false;
    while (!boolVerifica){
        if (re.test(wordValue)){
            console.log(re.test(wordValue))
            document.getElementById("insertWord").classList.add("is-valid");
            document.getElementById("validation").innerHTML = `Valore inserito corretto`;
            document.getElementById("validation").classList.add("text-success");
            boolVerifica=true;
        } else {
            document.getElementById("insertWord").classList.add("is-invalid");
            document.getElementById("validation").innerHTML = `Devi inserire solo caratteri alfabetici`;
            document.getElementById("validation").classList.add("text-danger");
            return;
        }
    }
    const bool = verificaParolaPalindroma(wordValue);
    if (bool) {
        document.body.innerHTML =
            `
    <div class="container py-4 text-center">
        <h1 class="text-success">La parola <strong>"${wordValue}"</strong> è palindroma</h1>
    </div>
    `
    } else {
        document.body.innerHTML =
            `
    <div class="container py-4 text-center">
        <h1 class="text-danger">La parola <strong>"${wordValue}"</strong> non è palindroma</h1>
    </div>
    `
    }
})


//verifico il valore ritornato e in base ad esso mostro a video se la parola è palindroma o no


//creo funzione che verifichi i dati inseriti dall'utente

/* function verificaParole(parola){
    let parolaVerificata = false
    

        
    }
    document.getElementById("insertWord").classList.add("is-valid");
    document.getElementById("validation").innerHTML = `Valore inserito corretto`;
        document.getElementById("validation").classList.add("text-success");
}
 */

//creo una funzione che mi permetterà di verificare se la parola sarà palindroma o meno



function verificaParolaPalindroma(parola) {
    let parolaScomposta = parola.split('');
    let parolaInversa = parolaScomposta.reverse();
    parolaInversa = parolaInversa.join('');

    if (parola == parolaInversa) {
        return true;
    } else {
        return false;
    }
}
