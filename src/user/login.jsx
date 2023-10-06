import {writeCookie} from "../utils/utilities"

function Login(parameter) {
    async function login(username,  password, setLoggedIn, setMessage) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
                method: "POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const data = await response.json()
            console.log(data)
            if (data.message === "login successful, new token issued") {
                writeCookie("jwt_token", data.user.token, 7)
                setLoggedIn(true)
                // setMessage(data.message)
            } else {
                setLoggedIn(false)
                // setMessage(data.message)
            }
            } catch (error) {
            console.log(error)
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        login(parameter.username, parameter.password, parameter.setLoggedIn);
    }
    return (
        <div>
        <h2>Login User</h2>
        <form onSubmit={handleSubmit}>

            <label for="name">Enter your username: </label>
            <input onChange = {(event) => parameter.setUsername(event.target.value) } type="text" className="name" id="name" required />
            <br></br>
            <label for="password">Enter your password: </label>

            <input onChange = {(event) => parameter.setPassword(event.target.value) }type="password" name="password" id="password" required />
            <br></br>
            <input type="submit" />
        </form>
        <hr></hr>


    </div>
    )
};

export default Login;
