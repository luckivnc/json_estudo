function enviar(){
 let nom = document.getElementById('nome').value
 let comp = document.getElementById('componente').value
 let qnt = document.getElementById('quantidade').value

 const medicamento ={
    nome: nom, 
    componente: comp, 
    quantidade: qnt
}

 localStorage.setItem('medicamento',JSON.stringify(medicamento))
}