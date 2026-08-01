/* ==========================================
   Crônicas de Aetheria
   Arquivo: js/perfil.js
========================================== */

// Carrega os dados do personagem no perfil

document.addEventListener("DOMContentLoaded", function(){

    // Busca usuário salvo

    let usuario = JSON.parse(
        localStorage.getItem("usuario")
    );


    if(!usuario){

        alert(
            "⚠️ Nenhum jogador encontrado. Faça o cadastro primeiro."
        );

        window.location.href="cadastro.html";

        return;

    }


    // Busca personagem criado

    let personagem = usuario.personagem;


    if(!personagem){

        alert(
            "🧙 Você ainda não criou um personagem."
        );

        window.location.href="criar-personagem.html";

        return;

    }



    // Preenche informações do perfil

    document.getElementById("nomePersonagem").innerHTML =
    personagem.nome;


    document.getElementById("idade").innerHTML =
    personagem.idade + " anos";


    document.getElementById("genero").innerHTML =
    personagem.genero;


    document.getElementById("raca").innerHTML =
    personagem.raca;


    document.getElementById("classe").innerHTML =
    personagem.classe;


    document.getElementById("elemento").innerHTML =
    personagem.elemento;


    document.getElementById("aparencia").innerHTML =
    personagem.aparencia;


    document.getElementById("historia").innerHTML =
    personagem.historia;



    // Atributos

    document.getElementById("nivel").innerHTML =
    personagem.nivel;


    document.getElementById("hp").innerHTML =
    personagem.hp + " / " + personagem.hpMax;


    document.getElementById("mp").innerHTML =
    personagem.mp + " / " + personagem.mpMax;


    document.getElementById("ataque").innerHTML =
    personagem.ataque;


    document.getElementById("defesa").innerHTML =
    personagem.defesa;


    document.getElementById("velocidade").innerHTML =
    personagem.velocidade;


    document.getElementById("arma").innerHTML =
    personagem.arma;


});
