// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
// Categoria selezionata dall'utente (offerta)
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.


// PRELEVO I DATI DELL'UTENTE DAL DOM
var element = document.getElementById("submit");
element.addEventListener('click',
 function() {
   var name = document.getElementById('name').value;
   console.log('questo è il nome prelevato dal dom ' + name);
   var km = document.getElementById('km').value;
   console.log('questi sono i km prelevati dal dom ' + km);
   var age= document.getElementById('age').value;
   console.log('questi sono gli anni prelevati dal dom ' + age);

   // STABILISCO prezzi e sconto
   var prezzo = 0.21;
   console.log('prezzo per km ' + prezzo);
   var prezzoNormale = km * prezzo;
   console.log('prezzo per tutti ' + prezzoNormale);
   var scontoMinori = (prezzoNormale * 20) / 100;
   console.log('sconto minori ' + scontoMinori);
   var scontoOver = (prezzoNormale * 40) / 100;
   console.log('sconto over 65 ' + scontoOver);

   // GESTISCO GLI SCONTI
   if (age < 18) {
     var prezzoParziale = (prezzoNormale - scontoMinori);
     console.log('prezzo minori ' + prezzoParziale);
   } else if (age > 65) {
     var prezzoParziale = (prezzoNormale - scontoOver);
     console.log('prezzo Over 65 ' + prezzoParziale);
   }
   else {
     prezzoParziale;
     console.log('prezzo normale ' + prezzoParziale);
   }

   // PREZZO ARROTONDATO
   var prezzoFinale =  Math.round(prezzoParziale * 100)/100 + " €";
   console.log('prezzo finale ' + prezzoFinale);

   // STAMPO SUL DOM

} );
