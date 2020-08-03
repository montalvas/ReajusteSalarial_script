
var botao = document.querySelector("input");
botao.addEventListener("click", clicar);



function clicar(){
    var usuario = window.prompt("Qual o nome do usuario?");

    var sal = window.prompt(`Qual o salário de ${usuario}?`);

    if (sal.indexOf(",") != -1){
        sal = sal.replace(",",".");
    }

    var salario = Number(sal);

    var aum = window.prompt(`O salário de ${usuario} vai ser reajustado em qual porcentagem?`);

    if (aum.indexOf(",") != -1){
        aum = aum.replace(",", ".");
    }

    var aumento = salario * (Number(aum) / 100);

    var total = salario + aumento;

    var res = document.querySelector("div.res");
    
    res.innerHTML = `<strong>${usuario} recebeu um aumento salarial!</strong>`;

    var p1 = document.createElement("p");
    p1.innerHTML = `O salário atual era ${salario.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
    res.appendChild(p1);

    var p2 = document.createElement("p");
    p2.innerHTML = `Com um aumento de ${aum}%, o salário vai aumentar ${aumento.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} no próximo mês`;
    res.appendChild(p2);

    var p3 = document.createElement("p");
    p3.innerHTML = `E a partir daí, ${usuario} vai passar a ganhar ${total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
    res.appendChild(p3);
    
}