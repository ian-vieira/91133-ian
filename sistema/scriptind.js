document.getElementById("loginForm").addEventListener ("submit", function(event) { // document= "elemento" ,"getElementById" metodo e "loginform"=nomeID
    event.preventDefault(); //impede o envio do formalurio vazio
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

//validação dos campos

if (!username || !password){
    alert("Por favor,preencha todos os campos");
    return;
}

if (password.lenght < 8) {
    alert("A senha contem menos de 8 caracteres.");
    return;
    
}
// salva o nome de usuário no localstorage
localStorage.setItem("username",username);

// se a validação passar,abre o painel
window.location.href = "painel.html";// abre uma pagina chamada 
alert("Login bem sucedido!"); // pop-up de sucesso
});