document.addEventListener("DOMContentLoaded", () => {
    checkLoggedIn();
    
    document.getElementById("inputForm").addEventListener("submit", function(event){
        event.preventDefault();

        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("passwordInput").value;
        const login = {emial: email, password: password};
        
        //Login
        fetch("http://localhost:3000/auth/cookie/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(login)
        })
    })
})

function checkLoggedIn(){
    const loggedIn = document.getElementById("loggedIn");
    const notLoggedIn = document.getElementById("notLoggedIn");

    fetch("http://localhost:3000/auth/cookie/status", {
        method: "GET",
        credentials: "include"
    })
    .then((response) => {
        if(response.status === 401) {
            loggedIn.classList.add("hidden");
            notLoggedIn.classList.remove("hidden");
        } else {
            loggedIn.classList.remove("hidden");
            notLoggedIn.classList.add("hidden")
        }
    }
    )
}