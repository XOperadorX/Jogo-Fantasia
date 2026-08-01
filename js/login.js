/* ==========================================
   Crônicas de Aetheria
   Arquivo: js/login.js
========================================== */

// Sistema simples de login usando localStorage

document.addEventListener("DOMContentLoaded", function(){

    const formulario = document.querySelector("form");

    if(formulario){

        formulario.addEventListener("submit", function(event){

            event.preventDefault();


            let email = document.getElementById("email").value;

            let senha = document.getElementById("senha").value;


            // Busca usuário cadastrado

            let usuario = JSON.parse(
                localStorage.getItem("usuario")
            );


            if(usuario){

                if(email === usuario.email && senha === usuario.senha){

                    alert("⚔️ Bem-vindo de volta a Aetheria!");

                    // Salva sessão

                    localStorage.setItem(
                        "logado",
                        "true"
                    );


                    window.location.href="menu.html";


                }else{

                    alert(
                        "❌ E-mail ou senha incorretos!"
                    );

                }


            }else{

                alert(
                    "⚠️ Nenhuma conta encontrada. Faça o cadastro primeiro."
                );


                window.location.href="cadastro.html";

            }


        });

    }

});
