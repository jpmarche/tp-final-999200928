import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { useRef } from "react";

 const Register = () => {
    const navigate = useNavigate()
    const nombre = useRef('')
    const apellido = useRef('')
    const email = useRef('')
    const password = useRef('')
    const {users,handleAddUser} = useContext(ChatContext) 
    const handleNewUser = (event) => {
        event.preventDefault()
        const newUser = {
            firstName : nombre.current.value,
            lastName: apellido.current.value,
            email: email.current.value,
            password: password.current.value,
            messages: [],
            id:users.length+1,
            status:"offline",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAAPFBMVEWoqa3///+kpamoqav8/Pylpqjb2934+PisrbChoqXq6uuvsLLv7/DGx8m4ubymqq3h4eLPz9HV1de+v8H9jjg3AAAD8UlEQVR4nO2c2XKrMAyGQbYBszgQ3v9dDyahUJo02FqcnPJddKZ3/1iLZUkky05OTk5OTk5OTk5O/gLKk1rEf8J0kO99lACZyVTjqar537fDZq4b+rrUuUeXbT90rrKpZW0B6651me8p28LZdzlRqLqfCr+UDk32BkKhKZ5rnK0/HWhqjeb6u8b5PPt0x3m5TH86/VLjTJdOJ1T9MY0TdZPI7OBeG3tj9s6kSPcwHLT2wtUIK5xc0l7DNE70wr55ycxxl1ypZVVmNkbkJNNK+qYdokTmeSEYQhArUjKEwAVG95ZRKoQgJE/u0UIPjqjwXqlFVMKIsLenk7C5anEi81JAJHRIkVOc8xceqNC5H2bFLjI+Va4U7J5ZE6hsG16NMBKI9KU7r8qCRGXNa3JA5soFXpGORiRvZrc0BveFJqdK7L2zUHKeZYVP6XeVjk8mutD4QjM6JsEdvnAFtm4shL9un1HwqcyoQnx6mxs+lbgqfUtd/XGVilQlF5+hktbin6CSTyRlJuITSZvV2VSS3pBsKj+i2viMyo2uCm5Za3Wq8Ok5VZqPeJ0pS+SYvH1roozJPPkxRB0Y7nbWJ3SzaDqDjBfPIhOfMgVa1gR3+WAFdo6wnllm/JtRCjU58/jpGbtKVM7U98pSYDKFCiDNr+9OE29zzVmyrXhbIeJ8kBnpziPZ6NzOn8+3RLauWcvKB5gYmYzP2yfY0HUikSnpT5lHd9zu6MGm2GsO2yDTYgsbe0xx+Dj7KtnSoDLjsWuoHVNJ9MDBlbyrMqmOEsAdtrguRriXQrIRZF0fFD29uxW/koFumvCOa9/Imh3UgaXlB+dZSK4HWxdbYbajzP2jFKAa14VPnPN+NivgcM8zkeOk2M3id06KMQXzdQkkbaLJ6rNzcolsKPvqTCohOgE9kMkVQ1BRzVE8mud7GnTnZS+Toyym88mFeeZD7JxkA6kFnWvy6qOiC5yVkrhzDX1O65U3WkKJim4Lbw/hSEURTpz3EHa3gh7eYdB1CgnGEr/IpHgGxX27FQKFa14IFwyeQDLuY8mUWyiyJlsSWsH3XqFhF5nn+DinKc5/p0WukzHm8y3I3E5eCT1GowIo+rvHUApUADGnyhXEYRJu370CsZ3XcCf0ldLFijRSXumJb8vIBPgNHZkzhXLlwhAX5mQLgscoo7bK2Cu2PVEVnEAx9J0+5jDJexmviEpGsrHjiag5In9fAUPMGq64yIjLXDhZ3ghOmVaiRt/Thv4ch1D5+53QKIfApQwiAqOc6NvmUAJXeaoUbhm8MCx+8dzQQY5J9Ml9OEEVh+CD5ztBzRjh0nJFh2RMm0hkngfl9WQqHze2/gEvAzmEsfMytgAAAABJRU5ErkJggg=="
            
        }
          
        handleAddUser(newUser)
      navigate("/login")
        
    }

    return (
        
        <section className="login">   

    <h2>Bienvenido </h2>
    <p>Escriba sus datos para completar el registro</p>
 
    <form onSubmit={handleNewUser}  className="form-login">
        <input ref={nombre} type="text" placeholder="Nombre" required minLength={3}/>
        <input ref={apellido} type="text" placeholder="Apellido" />
        <input ref={email} type="email"  placeholder="Correo electronico" required/>
        <input ref={password} type="password" placeholder="Password" required minLength={6}/>
        <button type="submit">Registrarse</button>
    </form>
    </section>
    )  
 }

 export {Register}