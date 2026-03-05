import { useContext, useState } from "react"; 
import { ChatContext } from '../context/ChatContext'
import { useNavigate } from "react-router-dom";



const Login = () => {

const {login,handleUser} = useContext(ChatContext)
const [password,setPassword] = useState('')
const [email, setEmail] = useState('')
const [error,setError] = useState(false)
const navigate = useNavigate()
const handleMail = (event) => {
    setEmail(event.target.value)

}
const handlePassword = (event) => {
    setPassword(event.target.value)
 
}

const handleSubmit = (event) => {
    event.preventDefault()
    
    const response = login({email,password})
    if (response === true){
        handleUser({email,password})
        navigate("/")
        
    }
    else {
        setError(true)
    }



}

const handleNewContact = () =>{
    navigate("register")
}
return(

    <section className="login">   

    <h2>Bienvenido, inicia sesion</h2>
    <form onSubmit={handleSubmit} className="form-login">
        <input type="email" onChange={handleMail} placeholder="Correo electronico"/>
        <input type="password" onChange={handlePassword} placeholder="Password" />
        <button>Ingresar</button>
        {
          error ?  <p className="error-login">Usuario o contraseña incorrecta</p> : ""
        }
        <button onClick={handleNewContact} className="button-new-user">Registrarse</button>
    </form>
    </section>
)

}
export {Login}