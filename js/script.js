//chiedi quanti km vuoi percorrere

var x = prompt('quanti km intendi percorrere?');
var y = prompt('qual è la tua età?');

//calcola prezzo totale del biglietto
var prezzo = x * 0.21;

//prezzo biglietto per minorenni(sconto - prezzo)
var scontoMinorenni = prezzo / 100 * 20;
var prezzoMinorenni = prezzo - scontoMinorenni;

//prezzo biglietto per over(sconto - prezzo)
var scontoOver = prezzo / 100 * 40;
var prezzoOver = prezzo - scontoOver;

//mostra il risultato(se sei minorenne se sei over e se sei nel range di else come età)
if(y < 18 ){
    document.getElementById('output').innerHTML = "Totale importo: " + prezzoMinorenni + " € ";
}else{ if (y > 65){
    document.getElementById('output').innerHTML = "Totale importo: " + prezzoOver + " € ";
}else{
    document.getElementById('output').innerHTML = "Totale importo: " +  prezzo +  " € ";
}

}