//Crie um array com objetos representando produtos(Nome, preço)
// e mostre o nome do produto mais caro.let produtos =
    { nome: "Notebook", preco: 3500 }
    { nome: "Celular", preco: 2500 }
    { nome: "Fone de Ouvido", preco: 200 }
    { nome: "Monitor", preco: 1200 }

// Variáveis para armazenar o produto mais caro
let maisCaro = produtos[0];

for (let i = 1; i < produtos.length; i++) {//length retorna o tamanho, quantos elementos ou de caracteres.
    if (produtos[i].preco > maisCaro.preco) {
        maisCaro = produtos[i];
    }
}

console.log("O produto mais caro é:", maisCaro.nome);