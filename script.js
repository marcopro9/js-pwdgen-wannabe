var ilTuoNome = prompt('Qual è il tuo nome?');
var ilTuoCognome = prompt('Qual è il tuo cognome?');
var colorePreferito = prompt('Qual è il tuo colore preferito?');
var iTuoiDati = 'Ciao ' + ilTuoNome + " " + ilTuoCognome + ' il tuo colore preferito è ' + colorePreferito + " 19";
document.getElementById('risultato').innerHTML = iTuoiDati;
