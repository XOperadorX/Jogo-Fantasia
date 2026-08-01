/* ==========================================
   Crônicas de Aetheria
   Arquivo: js/cadastro.js
========================================== */

// Sistema simples de cadastro usando localStorage

document.addEventListener("DOMContentLoaded", function(){

    const formulario = document.querySelector("form");


    if(formulario){

        formulario.addEventListener("submit", function(event){

            event.preventDefault();


            let nome = document.getElementById("nome").value;

            let usuario = document.getElementById("usuario").value;

            let email = document.getElementById("email").value;

            let senha = document.getElementById("senha").value;

            let confirmarSenha =
            document.getElementById("confirmarSenha").value;



            // Verifica se as senhas são iguais

            if(senha !== confirmarSenha){

                alert(
                    "❌ As senhas não são iguais!"
                );

                return;

            }



            // Cria objeto do jogador

            let jogador = {

                nome:nome,

                usuario:usuario,

                email:email,

                senha:senha,

                nivel:1,

                experiencia:0,

                ouro:500,

                personagem:null

            };



            // Salva cadastro

            localStorage.setItem(
                "usuario",
                JSON.stringify(jogador)
            );



            alert(
                "🧙 Conta criada com sucesso!"
            );



            // Vai para criação do personagem

            window.location.href =
            "criar-personagem.html";


        });

    }


});
