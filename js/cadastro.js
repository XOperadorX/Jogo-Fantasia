// ======================================
// Crônicas de Aetheria
// Arquivo: js/cadastro.js
// ======================================


document
.getElementById("formCadastro")
.addEventListener("submit", function(event){


    // impede erro HTTP 405
    event.preventDefault();



    let nome =
    document.getElementById("nome").value;



    let usuario =
    document.getElementById("usuario").value;



    let email =
    document.getElementById("email").value;



    let senha =
    document.getElementById("senha").value;



    let confirmarSenha =
    document.getElementById("confirmarSenha").value;




    if(senha !== confirmarSenha){


        document.getElementById("mensagem").innerHTML =
        "❌ As senhas não são iguais!";


        return;

    }




    let conta = {


        nome:nome,


        usuario:usuario,


        email:email,


        senha:senha,


        ouro:500,


        nivel:1,


        personagem:null


    };




    localStorage.setItem(

        "usuario",

        JSON.stringify(conta)

    );




    document.getElementById("mensagem").innerHTML =

    "✅ Conta criada! Criando personagem...";




    setTimeout(function(){


        window.location.href =
        "criar-personagem.html";


    },1500);



});
