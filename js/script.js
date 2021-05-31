//chiedi quanti km vuoi percorrere
//usala come costante 
//var priceKm = 0.21


var x = prompt('quanti km intendi percorrere?');
var y = prompt('età del passeggero');

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
    document.getElementById('output').innerHTML = "Totale importo: " + (prezzoMinorenni).toFixed(2) + " € ";
}else{ if (y > 65){
    document.getElementById('output').innerHTML = "Totale importo: " + (prezzoOver).toFixed(2) + " € ";
}else{
    document.getElementById('output').innerHTML = "Totale importo: " + (prezzo).toFixed(2) +  " € ";
}

}
//oppure 
//if (y < 18){
    //var sconto = prezzo * scontoMinorenni/100;
    //var result = prezzo - sconto;
//} else if (y >= 65){
    //var sconto = prezzo * scontoover/100;
    //var result = prezzo - sconto;
//} else {
    //var result = prezzo;
//}