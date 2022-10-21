const atacante = prompt('digite nome do personagem1')
const poderDeAtaque = prompt('digite poder de atk')

const defensor = prompt('digite nome do personagem2')
let pontosDeVida = prompt("qual pontos de vida possui?")
const poderDeDefesa = prompt("digite poder de defesa")
const possuiEscudo = prompt("ele possui um escudo?")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não"){
    danoCausado = poderDeAtaque - poderDeDefesa
}else if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}


pontosDeVida -= danoCausado


alert(atacante + " Causou " + danoCausado + " pontos de dano em " + defensor)
alert(
    atacante + "\n poder de ataque: " + poderDeAtaque + "\n\n" + 
    defensor + "\nPontos de vida: " +pontosDeVida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui esudo: " + possuiEscudo
)

 