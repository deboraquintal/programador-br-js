var nota1 = 8.0;
var nota2 = 9.0;

var media = (nota1 + nota2) / 2;

var conceito = ""

if(media >= 8) {
    conceito = "ótimo";
}
else if(media >= 6.5) {
    conceito = "bom";
} else {
    conceito = "regular";
}

conceito = "mais ou menos"; //forçando outra opção... pra conseguir dar o erro do default

console.log(media);
console.log(conceito);

switch(conceito) {
    case "ótimo":
        console.log("parabéns, você é um ótimo aluno");
        break;

    case "bom":
        console.log("você está quase perfeito");
        break;

    case "regular":
        console.log("estude mais um pouco");
        break;

    default:
        console.log("houve algum erro");
        break;
}