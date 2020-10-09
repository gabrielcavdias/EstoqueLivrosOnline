function novaCategoria(){
    let inputBox = document.getElementById('outra_cat')
    inputBox.style.setProperty('display','block')
}
function removeCategoria(){
    let inputBox = document.getElementById('outra_cat')
    inputBox.style.setProperty('display', 'none')
}
function criar(){
    let tbody = document.querySelector('tbody')
    if(name.value==''||preco.value==''||categoria_produto.value=='none'){
        window.alert("Não deixe campos vazios")
    }else{
        let vamoconcatenar = `
        <tr id="${ID_produto.value}">
            <td>${ID_produto.value}</td>
            <td>${nome.value}</td>`
        if(categoria_produto.value=="Outro"){
            vamoconcatenar+= `<td>${outra_cat.value}</td>`
        }else{
            vamoconcatenar+=` <td>${categoria_produto.value}</td>`
        }
        vamoconcatenar+=`
            <td>R$${preco.value}</td>
            <td><button onclick="editar()">Editar ✎</button></td>
            <td><button onclick="excluir()">Excluir &#128465;</button></td>
        </tr>
        `
        tbody.innerHTML+=vamoconcatenar

    }
    
}
function excluir(){
    event.currentTarget.parentElement.parentElement.remove()
}
function editar(){ 
    /*
    Current target = Botão de editar
    Parent Element = TD que o botão está contido
    1º previousSibling = Espaço vazio? 
    2º previousSibling = Preço
    3º previousSibling = Espaço Vazio?
    4º previousSibling = Categoria
    5º previousSibling = Espaço Vazio?
    6º previousSibling = Nome
    */
    let nome = event.currentTarget.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling
    let preco = event.currentTarget.parentElement.previousSibling.previousSibling
    let categoria = event.currentTarget.parentElement.previousSibling.previousSibling.previousSibling.previousSibling
    let retorno = abrirModal()
    nome.value = 'Teste'
    preco.value = 'teste'
    categoria.value = 'teste'
    let caixaModal = document.getElementById('ModalEditar')
    caixaModal.style.display= 'block'
}
function fechaModal(){
    let caixaModal = document.getElementById('ModalEditar')
    caixaModal.style.display= 'none'
}
function retornoModal(){
    let nome = document.getElementById('nome_editar')
    let preco = document.getElementById('preco_editar')
    let categoria = document.getElementById('cat_editar')
    let retorno = [nome.value,categoria.value,preco.value]
    nome.value = ''
    preco.value = ''
    categoria.value = 'none'
    return retorno
}