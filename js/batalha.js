/* ==========================================
   Crônicas de Aetheria
   Arquivo: js/batalha.js
========================================== */

// Sistema de batalha RPG


let jogador;

let inimigo;



document.addEventListener("DOMContentLoaded", function(){


    iniciarBatalha();


});



/*
    Inicia uma batalha
*/

function iniciarBatalha(){


    let usuario =
    JSON.parse(
        localStorage.getItem("usuario")
    );


    if(!usuario || !usuario.personagem){


        alert(
            "⚠️ Personagem não encontrado!"
        );


        window.location.href =
        "criar-personagem.html";


        return;

    }



    jogador =
    usuario.personagem;



    // Cria inimigo aleatório

    let monstros = [


        {

            nome:"🐺 Lobo Selvagem",

            hp:60,

            ataque:12,

            defesa:5,

            xp:50,

            ouro:20

        },


        {

            nome:"👹 Goblin Sombrio",

            hp:80,

            ataque:15,

            defesa:8,

            xp:80,

            ouro:40

        },


        {

            nome:"🧟 Guerreiro Morto",

            hp:120,

            ataque:20,

            defesa:10,

            xp:120,

            ouro:70

        }


    ];



    inimigo =
    JSON.parse(
        JSON.stringify(
            monstros[
                Math.floor(
                    Math.random() *
                    monstros.length
                )
            ]
        )
    );



    atualizarTela();



}




/*
    Atualiza informações na tela
*/

function atualizarTela(){


    document.getElementById(
        "nomeJogador"
    ).innerHTML =
    jogador.nome;



    document.getElementById(
        "hpJogador"
    ).innerHTML =
    jogador.hp +
    " / " +
    jogador.hpMax;



    document.getElementById(
        "nomeInimigo"
    ).innerHTML =
    inimigo.nome;



    document.getElementById(
        "hpInimigo"
    ).innerHTML =
    inimigo.hp;



}




/*
    Ataque básico
*/

function ataqueBasico(){


    let dano =
    jogador.ataque -
    inimigo.defesa;



    if(dano < 1){

        dano = 1;

    }



    inimigo.hp -= dano;



    adicionarMensagem(

        "⚔️ Você causou " +
        dano +
        " de dano!"

    );



    verificarBatalha();



}




/*
    Ataque mágico
*/

function usarMagia(){


    if(jogador.mp < 20){


        adicionarMensagem(
            "🔷 Mana insuficiente!"
        );


        return;

    }



    let dano =
    jogador.magia * 2;



    jogador.mp -= 20;



    inimigo.hp -= dano;



    adicionarMensagem(

        "✨ Magia causou " +
        dano +
        " de dano!"

    );



    verificarBatalha();


}




/*
    Usar poção
*/

function usarPocao(){


    if(jogador.hp >= jogador.hpMax){


        adicionarMensagem(
            "❤️ Vida já está cheia!"
        );


        return;

    }



    jogador.hp += 50;



    if(jogador.hp > jogador.hpMax){


        jogador.hp =
        jogador.hpMax;

    }



    adicionarMensagem(

        "🧪 Você recuperou vida!"

    );



    turnoInimigo();


}




/*
    Defesa
*/

function defender(){


    adicionarMensagem(

        "🛡️ Você se defendeu!"

    );



    jogador.defendendo = true;



    turnoInimigo();


}




/*
    Turno do inimigo
*/

function turnoInimigo(){


    let dano =
    inimigo.ataque -
    jogador.defesa;



    if(dano < 1){

        dano = 1;

    }



    if(jogador.defendendo){


        dano =
        Math.floor(dano / 2);


        jogador.defendendo=false;


    }



    jogador.hp -= dano;



    adicionarMensagem(

        "👹 " +
        inimigo.nome +
        " causou " +
        dano +
        " de dano!"

    );



    verificarBatalha();



}




/*
    Verifica vitória ou derrota
*/

function verificarBatalha(){


    if(inimigo.hp <= 0){


        adicionarMensagem(

            "🏆 Você venceu!"

        );


        ganharRecompensa();



        return;

    }



    if(jogador.hp <= 0){


        adicionarMensagem(

            "💀 Você foi derrotado!"

        );


        jogador.hp =
        jogador.hpMax;



        salvarJogador();



        return;

    }



    turnoInimigo();



    atualizarTela();


}



/*
    Recompensa da vitória
*/

function ganharRecompensa(){


    let usuario =
    JSON.parse(
        localStorage.getItem("usuario")
    );



    usuario.personagem.xp +=
    inimigo.xp;



    usuario.ouro +=
    inimigo.ouro;



    salvarJogador();



    alert(

        "🎁 +" +
        inimigo.xp +
        " XP e +" +
        inimigo.ouro +
        " ouro!"

    );


}



/*
    Mensagens da batalha
*/

function adicionarMensagem(texto){


    let log =
    document.getElementById(
        "logBatalha"
    );



    if(log){


        log.innerHTML +=
        texto +
        "<br>";

    }


}




/*
    Salvar dados
*/

function salvarJogador(){


    let usuario =
    JSON.parse(
        localStorage.getItem("usuario")
    );



    usuario.personagem =
    jogador;



    localStorage.setItem(

        "usuario",

        JSON.stringify(usuario)

    );


    atualizarTela();


}
