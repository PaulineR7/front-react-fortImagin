import Header from "../components/Header";
import './LoginPage.scss'
import { useState } from "react";

function LoginPage () {
    const [message, setMessage] = useState(null);

    const handleLogin = async (event) => {
    event.preventDefault();

    const pseudo = event.target.pseudo.value;
    const password = event.target.password.value;

    
    const loginData = {
      pseudo,
      password,
    };

    const loginDataJson = JSON.stringify(loginData);

    const loginResponse = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: loginDataJson,
    });


    const loginResponseData = await loginResponse.json();
    const token = loginResponseData.data;

    if (token) {
        localStorage.setItem("jwt", token)
        setMessage("Vous êtes bien connecté");
    } else {
        setMessage("Erreur lors de la connexion")
    }
}
    return(
        <>
        <section className="bg-img">
        <Header />
        <div className="block">
        <h2 className="title-login">Se connecter</h2>
        <form onSubmit={handleLogin} className="form-flex-login" >
            <input type="text" name="pseudo" placeholder="Pseudo" />
            <input type="password" name="password" placeholder="Mot de passe" />
            {message && <p>{message}</p>}
            <input className="btn-login" type="submit" value="Se connecter" />
        </form>
        </div>
        </section>
        </>
    )
}



export default LoginPage;