/* ==========================================
   Crônicas de Aetheria
   Arquivo: js/jogo.js
========================================== */

// Sistema principal do jogo

document.addEventListener("DOMContentLoaded", function(){


    // Verifica se o jogador está logado

    let logado = localStorage.getItem("logado");


    if(logado !== "true"){

        alert(
            "⚠️ Você precisa fazer login para jogar!"
        );

        window.location.href="login.html";

        return;

    }



    // Carrega dados do jogador

    let usuario = JSON.parse(
        localStorage.getItem("usuario")
    );



    if(!usuario){

        alert(
            "❌ Dados do jogador não encontrados!"
        );

        window.location.href="cadastro.html";

        return;

    }



    // Mostra nome do jogador

    let nome = document.getElementById(
        "nomeJogador"
    );


    if(nome){

        nome.innerHTML = usuario.nome;

    }



    // Mostra dados do personagem

    if(usuario.personagem){


        let personagem = usuario.personagem;



        let nomePersonagem =
        document.getElementById("personagemNome");


        if(nomePersonagem){

            nomePersonagem.innerHTML =
            personagem.nome;

        }



        let nivel =
        document.getElementById("personagemNivel");


        if(nivel){

            nivel.innerHTML =
            personagem.nivel;

        }



        let vida =
        document.getElementById("personagemHP");


        if(vida){

            vida.innerHTML =
            personagem.hp +
            " / " +
            personagem.hpMax;

        }



        let mana =
        document.getElementById("personagemMP");


        if(mana){

            mana.innerHTML =
            personagem.mp +
            " / " +
            personagem.mpMax;

        }


    }



    // Sistema de logout

    let sair =
    document.getElementById("sair");


    if(sair){

        sair.addEventListener(
            "click",
            function(){

                localStorage.removeItem("logado");

                alert(
                    "🚪 Você saiu de Aetheria."
                );


                window.location.href =
                "index.html";


            }
        );

    }



});



/* ==========================================
   Funções do jogo
========================================== */


// Ganhar experiência

function ganharXP(valor){


    let usuario =
    JSON.parse(
        localStorage.getItem("usuario")
    );


    if(usuario && usuario.personagem){


        usuario.personagem.xp += valor;



        // Subir de nível

        if(usuario.personagem.xp >= 100){


            usuario.personagem.nivel++;

            usuario.personagem.xp = 0;


            usuario.personagem.hpMax += 20;

            usuario.personagem.mpMax += 10;

            usuario.personagem.ataque += 5;

            usuario.personagem.defesa += 3;


            alert(
                "⭐ Subiu para o nível " +
                usuario.personagem.nivel
            );


        }



        localStorage.setItem(

            "usuario",

            JSON.stringify(usuario)

        );


    }


}



// Adicionar ouro

function adicionarOuro(valor){


    let usuario =
    JSON.parse(
        localStorage.getItem("usuario")
    );


    if(usuario){


        usuario.ouro += valor;


        localStorage.setItem(

            "usuario",

            JSON.stringify(usuario)

        );


    }


}



// Gastar ouro

function gastarOuro(valor){


    let usuario =
    JSON.parse(
        localStorage.getItem("usuario")
    );


    if(usuario && usuario.ouro >= valor){


        usuario.ouro -= valor;


        localStorage.setItem(

            "usuario",

            JSON.stringify(usuario)

        );


        return true;


    }


    alert(
        "🪙 Ouro insuficiente!"
    );


    return false;


}
