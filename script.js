
 let refrigerante = 35.97
 let macarrao = 27.96
 let ervilha = 20.97
 let arroz = 68.97
 let feijao = 23.78
 let vinho = prompt(`Digite o valor do vinho`)
 let quantidadevinho = prompt(`Quantas unidades?`)
 let total = vinho * quantidadevinho

console.log(refrigerante+macarrao+ervilha+arroz+feijao)

if(total % 2 == 0){
  console.log(`Você pagará somente a metade da compra, e seu amigo a metade mais o vinho.`)
    
}
else{  
  console.log(`Vocês vao dividir o total da compra, incluindo o vinho.`)  
   
}  


