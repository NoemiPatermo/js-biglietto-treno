//chiedi all'utente quanti km vuole percorrere
//chiedi all'utente la sua data di nascita
var x = prompt('quanti km intendi percorrere?');
var year = prompt('inserire il tuo anno di nascita');

//calcola l'età del passeggero
var age = 2021 - parseInt(year);
// (typeof) year è stringa


//calcola il prezzo base del biglietto
var prezzo = x * 0.21;

//prezzo biglietto per minorenni(sconto - prezzo)
var scontoMinorenni = prezzo / 100 * 20;
var prezzoMinorenni = prezzo - scontoMinorenni;

//prezzo biglietto per over(sconto - prezzo)
var scontoOver = prezzo / 100 * 40;
var prezzoOver = prezzo - scontoOver;

//mostra il risultato(se sei minorenne se sei over e se sei nel range di else come età)
if(age < 18 ){
    document.getElementById('output').innerHTML = "Totale importo: " + Math.round(prezzoMinorenni) + " € ";
}else{ if (age > 65){
    document.getElementById('output').innerHTML = "Totale importo: " + Math.round(prezzoOver) + " € ";
}else{
    document.getElementById('output').innerHTML = "Totale importo: " + Math.round(prezzo) +  " € ";
}

}
//JS MATH giusto per impararli 
//math.floor (rounds down)
//math.round (return the nearest integer)
//math.ceil (rounds up)
//math.trunc (return the integer part)
