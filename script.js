const custo = document.getElementById("custo")
const frete = document.getElementById("frete")
//taxa aqui é  o preço do concorrente por enquanto, mais pra frente será mudado.
const taxa = document.getElementById("taxa")
const margem = document.getElementById("margem")

const calcbutton = document.getElementById("calcbutton")
calcbutton.addEventListener("click", function(e){
    e.preventDefault()
    const custoNumero = Number(custo.value)
    const freteNumero = Number(frete.value)
    const taxaNumero = Number(taxa.value)
    const margemNumero = Number(margem.value)
    const preco = custoNumero + freteNumero + margemNumero
    console.log(taxaNumero)
    console.log(preco)
    if(preco <= taxaNumero){
     console.log("Competitivo")
    }
    else{
     console.log("Acima do concorrente")
    }
})