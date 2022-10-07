document.addEventListener("DOMContentLoaded", () => {
    checkLoggedIn();
    
    document.getElementById("inputForm").addEventListener("submit", (event) =>{
        event.preventDefault();

        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("passwordInput").value;
        const login = {email: email, password: password};
        
        fetch("http://localhost:3000/auth/cookie/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(login)
        })
        .then(window.location.reload());
    })
})

//Schaut nach, ob man eingeloggt ist und passt je nach Status die Login Seite an
function checkLoggedIn(){
    const loggedIn = document.getElementById("loggedIn");
    const notLoggedIn = document.getElementById("notLoggedIn");

    fetch("http://localhost:3000/auth/cookie/status", {
        method: "GET",
        credentials: "include"
    })
    .then((response) => {
        if(response.status === 401) {
            //Nicht eingeloggt, also Login Seite anzeigen mit Input Feldern
            loggedIn.classList.add("hidden");
            notLoggedIn.classList.remove("hidden");
        } else {
            //Eingeloggt, also entsprechende Nachricht zeigen
            loggedIn.classList.remove("hidden");
            notLoggedIn.classList.add("hidden");
        }
    }
    )
}