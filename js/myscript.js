// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
// Categoria selezionata dall'utente (offerta)
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.



var element = document.getElementById("submit");
element.addEventListener('click',
 function() {
   var name = document.getElementById('name').value;
   console.log('questo è il nome prelevato dal dom ' + name);
   var km = document.getElementById('km').value;
   console.log('questi sono i km prelevati dal dom ' + km);
   var age= document.getElementById('age').value;
   console.log('questi sono gli anni prelevati dal dom ' + age)
} );
