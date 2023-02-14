const animals = ['CACHORRO', 'GATO', 'TUBARÃO', 'CAVALO'];
const teeth = [42, 30, 3000, 44];
const quantidadeDentes = 44; // ENTRADA DE DADOS

function solucao() {
const found = teeth.find(element => element === quantidadeDentes);
if (found === quantidadeDentes) {
result = teeth.indexOf(found);
console.log(animals[result]);}
}
const event = solucao(); 
