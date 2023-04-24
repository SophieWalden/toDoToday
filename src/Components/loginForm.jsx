import React from 'react';
import "./loginForm.css"

function LoginForm(props){
    const [username, setUsername] = React.useState("");
    const [isLoginForm, setIsLoginForm] = React.useState(false);
    const useLoginForm = () => {setIsLoginForm(value => !value)};

    function validEmail(email){
        // Valid email is any number of letters followed by @ then another set of any number of letters
        return /^(^\S+@\S+$)$/.test(email);
    }

    function validPassword(password){
        return /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password) && password.length > 4;
    }

    async function handleSubmit(e) {
      
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        let dataResults = {}

        for (let [key, value] of data.entries()){
            dataResults[key] = value;
        }

        // Registering
        if (isLoginForm && validEmail(dataResults["email"]) && validPassword(dataResults["password"])){
            RegisterUser(dataResults["email"], dataResults["password"]);
            CreateUserData(dataResults["name"], dataResults["email"], dataResults["password"]);
        }

        // Logging in
        if (!isLoginForm){
            let validPassword = await isValidPassword(dataResults["email"], dataResults["password"]);
            
            if (validPassword == 200){ // Valid Login
                props.checkLogin(dataResults["name"]);
            }
        }
    }
    
    function RegisterUser(email, password){
        fetch('http://127.0.0.1:5000/login/createLogin/'
            , {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"password": password, "username": email}),
                mode: "cors"

            }
        )
    }

    function CreateUserData(name, email, password){
        fetch('http://127.0.0.1:5000/login/createUserData/'
            , {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"name": name, "password": password, "username": email}),
                mode: "cors"

            }
        )
    }

    async function isValidPassword(username, password){
        return fetch('http://127.0.0.1:5000/login/verifyPassword/' 
            , {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"password": password, "username": username}),
                mode: "cors"

            }
        ).then(res => {
            return res["status"];
        });
    }

    return (
        <div className="loginFormContainer">
            <h4 id="logo">ToDo-Today</h4>
            
            <div id="loginForm">
                <h2 id="getStartedText">Get started</h2>
                <h3 id="createAccountText">{isLoginForm ? "Create your account" : "Login to your account" } </h3>
            
              
                <form onSubmit={handleSubmit}>
                    <div id="signupFormInputs">
                        {isLoginForm ? <label >
                            Full Name
                            <input type="text" name="name" />
                        </label> : <div /> }

                        <label>
                            Email
                            <input type="text" name="email" />
                        </label>

                        <label>
                            Password
                            <input type="text" name="password" />
                        </label>

                    </div>

                    <button type="submit" id="submitSignupButton">{isLoginForm ? "Sign Up" : "Login"}</button>
                    <div id="signupSheetLoginText" onClick={useLoginForm}>{isLoginForm ? "Have an account? Login" : "Have no account? Sign up"}</div>
                </form>
               
            </div>
            


        </div>
    )
}

export default LoginForm;
