


function btnCadastro(event){
    
    event.preventDefault()
    
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmar_senha = document.getElementById("confirmar-senha").value

    if(email === "" || senha === "" || confirmar_senha === ""){
        alert("Por favor, complete seu cadastro!")
    }
    else{
        window.location.href = "index.html";
    }
}