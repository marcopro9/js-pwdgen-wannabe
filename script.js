var ilTuoNome = prompt('Qual è il tuo nome?');
var ilTuoCognome = prompt('Qual è il tuo cognome?');
var colorePreferito = prompt('Qual è il tuo colore preferito?');
var passGen = ilTuoNome + ilTuoCognome + colorePreferito + "19";
document.getElementById('password').innerHTML = passGen;
