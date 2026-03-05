import { useState,useRef,useEffect, useContext } from "react"
import { ChatContext } from "../context/ChatContext"

const Chat = () =>{
    const [text,setText] = useState('')
    const chatBodyRef = useRef(null)
    const {selectedUser,handleAddMessage} = useContext(ChatContext)
    
    useEffect(()=>{
        if(chatBodyRef.current){
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight 
        }
    },[selectedUser])
    const handleMessage = (event) =>{
        setText(event.target.value)

    }
    const handleKey = (event) =>{
           if(event.key == 'Enter' && event.shiftKey){
        event.preventDefault()
        sendMessage()
        
    }else{return}
    }    
    const sendMessage = () => {
        if (text.trim().length == 0){
            return
        }
        const newMessage = {
                            author:"me",
                            text:text,
                            time : new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' ,hour12:false})}
                           
        setText('')
        handleAddMessage(newMessage)
    }
    if(selectedUser === null)
    return (<h3 className="no-contact">Selecciona un contacto</h3> )
    else
    return (
        
        <section className="chatPanel">
            <header className="chatHeader">
               <h2>{selectedUser.firstName}  {selectedUser.lastName}</h2>
                <p>Ultima conexion: hace 1 min</p>
            </header>
            <section className="chatBody">
            <div className="chatMessages" ref={chatBodyRef}>
            
                {   
                    selectedUser.messages.map((message,index)=>
                        <div key={index} className={`message ${message.author == "me" ? "me" : ""}`}>
                            <p><b>{message.author}:</b> {message.text}</p>
                            <p className="time-stamp">{message.time}</p>
                        </div>
                    )
                }
            
                </div>
            <div className="sendMessage">
                <textarea onKeyDown={handleKey} value={text} onChange={handleMessage} type="text" placeholder="Escriba un mensaje..."></textarea>
                <button  onClick={sendMessage}>
                     <svg className="sendButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z" />
                            </svg>
                </button>
            </div>
            </section>
        </section>
    )
}

export {Chat}