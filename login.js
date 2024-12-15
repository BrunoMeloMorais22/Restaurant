

function btnEntrar(event){
    
    event.preventDefault()
    
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email === "" || senha === ""){
        alert("Por favor, complete seu login!")
    }
    else{
        window.location.href = "index.html";
    }
}