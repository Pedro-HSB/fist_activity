function banco() {
    const dados = [{
        "id": null,
        "nome": "cleito",
        "login": "cleito",
        "senha": "senha",
        "email": "teste@gmail.com",
        "cpf": 12345695123
    },

    {
        "id": null,
        "nome": "cleitin",
        "login": "cleitin",
        "senha": "senhaa",
        "email": "teste2@gmail.com",
        "cpf": 12345695123
    },

    {
        "id": null,
        "nome": "cleitao",
        "login": "cleitao",
        "senha": "senha0",
        "email": "teste3@gmail.com",
        "cpf": 12345695123
    }]
    let ds = JSON.stringify(dados)

    localStorage.setItem("bd", ds)
}

function criar() {
    const dados = JSON.parse(localStorage.getItem("bd"))
    let id = document.querySelector("#id").value
    let lg = document.querySelector("#Login").value
    let sn = document.querySelector("#senha").value
    let nm = document.querySelector("#Nome").value
    let cpf = document.querySelector("#cpf").value
    let email = document.querySelector("#email").value

    let data = { id: Date.now(),id:id, login: lg, senha: sn,nome:nm,email:email,cpf:cpf }

    dados.push(data)

    const ds = JSON.stringify(dados)

    localStorage.setItem("bd", ds)

    limpar()
}

function ler() {
    const dados = JSON.parse(localStorage.getItem("bd"))

    let nm = document.querySelector("#Login").value

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].Login == nm) {
            console.log(dados[i].id + ":" + dados[i].Login + ":" + dados[i].senha)

            document.querySelector("#id").value = dados[i].id
            document.querySelector("#Login").value = dados[i].Login
            document.querySelector("#senha").value = dados[i].senha
            document.querySelector("#Nome").value = dados[i].nome
            document.querySelector("#cpf").value = dados[i].cpf
            document.querySelector("#email").value = dados[i].email
        }
    }
}

function atualizar() {
    var dados = JSON.parse(localStorage.getItem("bd"))
    let login = document.querySelector("#Login").value
    let senha = document.querySelector("#senha").value
    let nome = document.querySelector("#Nome").value
    let cpf = document.querySelector("#cpf").value
    let email = document.querySelector("#email").value

    

    for (let i = 0; i < dados.length; i++) {
        if (login == dados[i].Login) {
            dados[i].Login = login
            dados[i].senha = senha
            dados[i].nome = nome
            dados[i].cpf = cpf
            dados[i].email = email
            localStorage.setItem("bd", JSON.stringify(dados));
            alert("Atualizado!");
            limpar()
            break;
        }
    }
}

function apagar() {
    var dados = JSON.parse(localStorage.getItem("bd"));
    let login = document.querySelector("#Login").value;

    for (let i = 0; i < dados.length; i++) {
        if (dados[i] && login === dados[i].Login) {
            dados.splice(i, 1);
            alert("Deletado")
            limpar()
            break;

        }
    }

    localStorage.setItem("bd", JSON.stringify(dados));
}

function limpar(){
    document.querySelector("#id").value = ""
    document.querySelector("#Login").value = ""
    document.querySelector("#senha").value = "" 
    document.querySelector("#Nome").value = "" 
    document.querySelector("#cpf").value = "" 
    document.querySelector("#email").value = "" 
  }