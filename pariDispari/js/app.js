/* 
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer
*/

//raccogliere gli input dell'utente se sceglie pari o dispari

let selectValue = document.getElementById("oddEven").value;
const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", function () {

    /*
    while( selectValue != "pari" || selectValue != "dispari" ){
        document.getElementById("oddEven").classList.add("is-invalid");
        document.getElementById("validation-select").classList.add("text-danger");
        document.getElementById("validation-select").innerHTML =`Devi scegliere o pari o dispari`;
    }
    document.getElementById("oddEven").classList.remove("is-invalid");
    document.getElementById("oddEven").classList.add("is-valid");
    document.getElementById("validation-select").classList.remove("text-danger"); 
    */

    let numUser = document.getElementById("insertNumber").value;

    //Comtrolliamo che l'utente abbia inserito un numero valido
    let boolNum = true;
    if (numUser < 1 || numUser > 5) {
        alert("Devi inserire un numero valido!")
        boolNum = false;
        document.getElementById("oddEven").value= "";
        document.getElementById("insertNumber").value = "";
        

    }

    if (boolNum) {

        //generiamo un numero casuale per il computer

        const numComputer = numeroCasualeMinMax(1, 5);

        //sommiamo i due valori
        const somma = sommaValori(numUser, numComputer);



        //funzione per creare un numero casuale tra min e max

        function numeroCasualeMinMax(min, max) {
            const num = Math.floor((Math.random() * (max - min) + 1) - min);
            return num;
        }

        //funzione che somma due valori

        function sommaValori(num1, num2) {
            const som = num1 + num2;
            return som;
        }

        //stabiliamo se la somma è pari o dispari

        const pariDispari = verificaPariDispari(somma);

        function verificaPariDispari(somma) {
            if (somma % 2 === 0) {
                return true;
            }
            else {
                return false;
            }
        }

        if (pariDispari && selectValue == "pari") {
            alert("Complimenti! L'utente ha vinto")
        } else {
            alert("Complimenti! Il Computer ha vinto")
        }
    }


    return;
})


