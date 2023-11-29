const params = new URLSearchParams(window.location.search)

const id = params.get("id")
const desc = params.get("desc")
const preco = params.get("preco")
const qtd = params.get("qtd")
const categoria = params.get("categoria")

var descricao = descricao;
var pre = pre;
var quatidade = quatidade;
var cate = cate;


document.querySelector("#edit").addEventListener("click",()=>{
    fetch(`http://localhost:3000/produtos/alterar/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },            
        body: JSON.stringify({
            "desc" : document.querySelector("#desc").value,
            "preco": document.querySelector("#preco").value,
            "qtd": document.querySelector("#qtd").value,
            "categoria": document.querySelector("#categoria").value,
        })
        }).then((resposta)=>{
            if(resposta.status != 200){
                console.log(resposta.json())
        }
    })
})