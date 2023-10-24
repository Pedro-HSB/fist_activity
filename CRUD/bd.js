function local() {
    let dados = [{
        "id": null,
        "nome": "cleito",
        "senha": "senha",
        "email": "teste@gmail.com",
        "telefone": 910203454,
        "cpf": 12345695123,
        "data_nascimento": "10/02/2022"
    },

    {
        "id": null,
        "nome": "cleitin",
        "senha": "senhaa",
        "email": "teste2@gmail.com",
        "telefone": 910203454,
        "cpf": 12345695123,
        "data_nascimento": "10/02/2022"
    },

    {
        "id": null,
        "nome": "cleitao",
        "senha": "senha0",
        "email": "teste3@gmail.com",
        "telefone": 910203454,
        "cpf": 12345695123,
        "data_nascimento": "10/02/2022"
    }
    ]
    let n = JSON.stringify(dados);
    localStorage.setItem("tds", n);
    adicionar()
    return dados
}

function logon() {
    const dados = JSON.parse(localStorage.getItem("tds"))
    let login = document.querySelector("#inputlogin").value
    let senha = document.querySelector("#inputsenha").value

    for (let i = 0; dados.length > i; i++) {
        if (dados[i] == null) {
            alert("Verificando")
            //  alert("encontrou: " + dados[i].nome + ":" + i)
        } else {
            if (login == dados[i].nome && senha == dados[i].senha) {
                console.log("conectado")
                let n = JSON.stringify(dados[i]);
                sessionStorage.setItem("user", n)
                login()
                break
            }
        }
    }
}
//SessionStore getItem
function logado() {
    let dados = JSON.parse(sessionStorage.getItem("user"))
    let nome = dados.nome
    document.getElementById("nome").innerHTML = "Bem vindo " + nome
    return nome
}
//SessionStore remove Item
function logaout() {
    sessionStorage.removeItem("user")
    let url = "localStorage.html"
    window.open(url)
    window.close()
}



function adicionar() {
    var ClienteArray = JSON.parse(localStorage.getItem("tds"))
    let email = document.querySelector("#inputemail").value
    let senha = document.querySelector("#inputsenha").value
    let nome = document.querySelector("#inputnome").value
    let data_nascimento = document.querySelector("#inputdata_nascimento").value
    let cpf = document.querySelector("#inputcpf").value
    let telefone = document.querySelector("#inputtelefone").value
    let user = { id: Date.now(), email: email, senha: senha, nome: nome, data_nascimento: data_nascimento, cpf: cpf, telefone: telefone }
    ClienteArray.push(user)
    localStorage.setItem("tds", JSON.stringify(ClienteArray))
    redi()
}
function redi() {
    window.location.href = "./crud.html";
    //alert("Registro adicionado.")
    //window.location.replace("./crud.html");
}
function login() {
    window.location.href = "./login.html";
    //alert("Registro adicionado.")
    //window.location.replace("./crud.html");
}
function buscar() {
    var dados = JSON.parse(localStorage.getItem("tds"))
    let login = document.querySelector("#inputlogin").value

    for (let i = 0; dados.length > i; i++) {
        if (dados[i] == null && dados[i] != login) {
            alert("Verificando")
        } else {
            if (login == dados[i].nome) {
                document.querySelector("#inputlogin").value = dados[i].nome
                document.querySelector("#inputsenha").value = dados[i].senha
                break
            }
        }
    }
}

function tabela() {
    var dados = JSON.parse(localStorage.getItem("tds"))
    for (let i = 0; dados.length > i; i++) {
        document.querySelector("#inputusuario").innerHTML = dados[i].nome
        document.querySelector("#inputpass").innerHTML = dados[i].senha
    }
}

function atualizar() {
    var dados = JSON.parse(localStorage.getItem("tds"))
    localStorage.removeItem("tds")
    let login = document.querySelector("#inputlogin").value
    let senha = document.querySelector("#inputsenha").value

    for (let i = 0; dados.length > i; i++) {
        if (id == dados[i].id) {
            let user = { id: id, nome: login, senha: senha }
            dados[i] = user
            localStorage.setItem("tds", JSON.stringify(dados))
            alert("Atualizado!")
            break
        }
    }
}

function apagarItemVetor() {
    let login = document.querySelector("#inputlogin").value
    var dados = JSON.parse(localStorage.getItem("tds"))
    localStorage.removeItem("tds")

    for (let i = 0; dados.length > i; i++) {
        if (dados[i] == null) {
            alert("Verificando")
        } else {
            if (id == dados[i].id && login == dados[i].nome) {
                delete dados[i]
                break;
            }
        }
    }
    localStorage.setItem("tds", JSON.stringify(dados))
}

function apagaTudo() {
    localStorage.removeItem("tds")
}

function limpar() {
    document.querySelector("#inputlogin").value = ""
    document.querySelector("#inputsenha").value = ""
}