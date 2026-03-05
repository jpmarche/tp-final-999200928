import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { ChatContext,ChatProvider } from '../context/ChatContext'
import { useNavigate } from 'react-router-dom'



const Aside = () =>{

   const navigate = useNavigate()
    const [search,setsearch] = useState("")
    
    const {users,handleSelectedUser,logOut,loggedUser} = useContext(ChatContext)
    const handleChange = (event) => {
    setsearch(event.target.value)
}

    const handleClick = (id) =>{
        handleSelectedUser(id)
        
    }

const handleLogOut = () => {
    logOut()
    navigate("/login")
}
 const filteredUsers = users.filter((u) => {
    
    const fullName = `${u.firstName} ${u.lastName}`
return fullName.toLowerCase().includes(search.toLowerCase())})
    
 return (
        <aside>
            <button onClick={handleLogOut} className='button-log-out'>Cerrar cesion</button>
            <h1>Chat UTN</h1>
            <input type="search" placeholder="Buscar contactos" onChange={handleChange}/>
            <ul>
                {filteredUsers.length > 0 ?
                
                filteredUsers.map((user)=>
                        (   loggedUser.email === user.email ? "" :
                            <li  key={user.id} onClick={()=> handleClick(user.id,user.firstName+" "+user.lastName)}>
                            <div  className='user-aside' >
                            <p>{user.firstName} {user.lastName}</p>  
                            <img className='userImage' src={user.image} alt="" />
                            </div>
                            <small className= {`${user.status}`} >{user.status}</small>
                            </li>

                        )  
                )
                : <h4>No hay contactos</h4>
                }
               
            </ul>
        
            </aside>
    )
}

export {Aside}