import {createContext,useContext,useState} from 'react'
import {users as mockUsers} from '../services/api'

const ChatContext = createContext()

const ChatProvider = ({children}) => {
    
    const [users,setUsers] = useState(mockUsers)
    const [selectedUser, setSelectedUser] =useState(null)
    const [loggedUser,setLoggedUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    
    
    
    const handleUser = (user) => {
        setLoggedUser(user)
        localStorage.setItem("user" , JSON.stringify(user))     
    }

    const handleSelectedUser = (id) => {
        setSelectedUser(users.find(user => user.id == id)

)  
    }

    const handleAddUser = (newUser) =>{
        setUsers([...users,newUser])
        setSelectedUser(null)
    } 
    
    const handleAddMessage = (newMessage) =>{
        const updatedMessages = [...selectedUser.messages, newMessage]
        const updateUsers = users.map(user => 
        user.id === selectedUser.id ? { ...user, messages: updatedMessages } : user
    );
    setSelectedUser({...selectedUser,messages:updatedMessages})
    setUsers(updateUsers)    
    localStorage.setItem("messages",JSON.stringify(updateUsers))
      
    }


    const login = (userData) => {
        
        const foundUser = users.find((user) => user.email === userData.email)
        if (foundUser===undefined){
            return false
        }else{
            const foundPassword = users.find((user) => user.password === userData.password)
            if(foundPassword === undefined)
            { return false  }
               else{return true} }
        
    }

    const logOut = () => {
         localStorage.removeItem("user")
         setSelectedUser(null)
    }

    return(
        <ChatContext.Provider value = {{users,setUsers,handleAddMessage,handleAddUser,selectedUser,handleSelectedUser,login,handleUser,loggedUser,logOut}}>
        {children}
        </ChatContext.Provider>
    )
}



export { ChatContext, ChatProvider}