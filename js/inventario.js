/* ==========================================
   Crônicas de Aetheria
   Arquivo: js/inventario.js
========================================== */

// Sistema de inventário do jogador

document.addEventListener("DOMContentLoaded", function(){


    carregarInventario();


});



/*
    Carrega os itens do inventário
*/

function carregarInventario(){


    let usuario = JSON.parse(
        localStorage.getItem("usuario")
    );


    if(!usuario || !usuario.personagem){

        alert(
            "⚠️ Nenhum personagem encontrado!"
        );

        window.location.href="criar-personagem.html";

        return;

    }



    let inventario =
    usuario.personagem.inventario || [];



    let lista =
    document.getElementById(
        "listaInventario"
    );


    if(lista){


        lista.innerHTML = "";



        inventario.forEach(function(item, index){


            let linha =
            document.createElement("tr");



            linha.innerHTML = `

                <td>${item.nome}</td>

                <td>${item.quantidade}</td>

                <td>${item.tipo}</td>

                <td>

                    <button onclick="usarItem(${index})">
                        Usar
                    </button>

                </td>

            `;



            lista.appendChild(linha);



        });


    }



    atualizarOuro();


}




/*
    Usa um item do inventário
*/

function usarItem(index){


    let usuario =
    JSON.parse(
        localStorage.getItem("usuario")
    );



    let inventario =
    usuario.personagem.inventario;



    let item =
    inventario[index];



    if(item.tipo === "Poção de Vida"){


        usuario.personagem.hp += 50;



        if(usuario.personagem.hp >
           usuario.personagem.hpMax){


            usuario.personagem.hp =
            usuario.personagem.hpMax;

        }


        alert(
            "❤️ Vida recuperada!"
        );


    }



    else if(item.tipo === "Poção de Mana"){


        usuario.personagem.mp += 50;



        if(usuario.personagem.mp >
           usuario.personagem.mpMax){


            usuario.personagem.mp =
            usuario.personagem.mpMax;

        }


        alert(
            "🔷 Mana recuperada!"
        );


    }



    else{


        alert(
            "✨ Item utilizado!"
        );


    }



    // Remove uma unidade

    item.quantidade--;



    if(item.quantidade <= 0){

        inventario.splice(index,1);

    }



    usuario.personagem.inventario =
    inventario;



    localStorage.setItem(

        "usuario",

        JSON.stringify(usuario)

    );



    carregarInventario();


}




/*
    Adicionar item ao inventário
*/

function adicionarItem(
    nome,
    quantidade,
    tipo
){


    let usuario =
    JSON.parse(
        localStorage.getItem("usuario")
    );



    if(!usuario.personagem.inventario){

        usuario.personagem.inventario=[];

    }



    let inventario =
    usuario.personagem.inventario;



    let existente =
    inventario.find(
        item => item.nome === nome
    );



    if(existente){


        existente.quantidade += quantidade;


    }else{


        inventario.push({

            nome:nome,

            quantidade:quantidade,

            tipo:tipo

        });


    }



    localStorage.setItem(

        "usuario",

        JSON.stringify(usuario)

    );


}



/*
    Atualiza o ouro na tela
*/

function atualizarOuro(){


    let usuario =
    JSON.parse(
        localStorage.getItem("usuario")
    );



    let ouro =
    document.getElementById(
        "ouro"
    );


    if(ouro && usuario){


        ouro.innerHTML =
        usuario.ouro + " 🪙";


    }


}
