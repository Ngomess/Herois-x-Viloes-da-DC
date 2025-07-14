let herois = ["", "", ""];
let viloes = ["", "", ""];

let forcaHerois = 0;
let forcaViloes = 0;

alert("O array Heróis contém: " + herois.join(" ")); 
// Use join para formatar a saída

for (let i = 0; i < 3; i++) {
    let escolhaHeroi = prompt("Digite o nome do seu herói " + (i + 1));
    herois[i] = escolhaHeroi;
    forcaHerois += Math.floor(Math.random() * 10) + 1;
  //mesmo que "forcaheroi = forcaheroi + math"
}

console.log("Agora, o array Heróis contém: " + herois);

let viloesPossiveis = ["Darkseid", "Coringa", "Nekron", "Brainiac","Adão Negro","Duas Caras","Charada","Flash-Reverso","Hera-Venenosa","Sinestro"];

for (let i = 0; i < 3; i++) {
    let indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length);
    viloes[i] = viloesPossiveis[indiceAleatorio];
    forcaViloes += Math.floor(Math.random() * 10) + 1;
}

console.log("Vilões sorteados: " + viloes);

if (forcaHerois > forcaViloes) {
    alert("Seu time é muito forte! Você ganhou a luta! Sua força foi " + forcaHerois);
} else if (forcaHerois < forcaViloes) {
    alert("Você perdeu! Seu time é fraco! Eles ganharam com a força de " + forcaViloes);
} else {
    alert("Os dois times têm a mesma força, vocês empataram!");
}