import { useNavigate } from "react-router-dom"

const Acerca = () => {
    const navigate = useNavigate()
    const returnHome = () => {
        navigate("/")
    } 

    return(
        <section className="aboutUs">
            
    <h1>Descripción del Proyecto: Chat Interactivo en React</h1>
    <p>Este proyecto consiste en una aplicación de chats, a traves de la cual el usuario puede acceder a la misma a través de un sistema de autenticación y ver de una lista de usuarios los mensajes, con la posibilidad incluso de enviar nuevos mensajes si lo desea. Además si no estás registrado, la aplicación cuenta con un registro rápido para que nuevos usuarios puedan acceder.</p>    
    <h2>Partes principales de la aplicación</h2>
        <ul>
       <li>
       <h3>Sistema de Autenticación:</h3> 
        <p> Incluye formularios validados de Registro y Login que actúan como puerta de entrada a la aplicación.</p>
        </li>
       <li>
       <h3>Lista de contactos:</h3> 
        <p> Un panel lateral dinámico que permite visualizar y seleccionar a los diferentes usuarios disponibles para iniciar una conversación.</p>
        </li>
       <li>
       <h3>Panel de Chat:</h3> 
        <p>  El área central y corazón de la app, donde se despliega el historial de mensajes en tiempo real y se gestiona el envío de nueva información.</p>
        </li>
       <li>
       <h3>Navegación Protegida:</h3> 
        <p>  Un sistema que asegura que solo los usuarios autenticados puedan acceder al contenido del chat, redirigiendo a los visitantes no logueados al inicio.</p>
        </li>
        </ul>
        <ul>
            <h2>Tecnologías utilizadas</h2>
            <li>
        <h3>React:</h3>
        <p> Como librería principal para la construcción de una interfaz declarativa y basada en componentes.</p>
        <h3>React Context API:</h3>
        <p>Utilizada para la gestión del estado global de la aplicación, autenticación y datos del chat.</p>
        <h3>React Router:</h3>
        <p>ara el manejo de la navegación y la creación de rutas protegidas.</p>
        <h3>CSS:</h3>
        <p>Aplicado para lograr un diseño responsivo que se adapte a diferentes tamaños de pantalla.</p>
            </li>
        </ul>
        <h2>Decisiones de desarrollo tomadas</h2>
        <p>La decisión técnica más importante fue la implementación de React Context. Se eligió esta herramienta en lugar de simplemente pasar "props" entre componentes para garantizar que la información del usuario logueado y los mensajes estén disponibles de forma limpia en cualquier parte de la app.
</p>    <h2>Observaciones</h2>
        <p>Este proyecto me permitió profundizar en el manejo de flujos de datos complejos y en la lógica de autenticación en el frontend. Sobre todo para entender el funcionamiento de React y el funcionamiento de los componentes. Sumando además al proyecto la posibilad de trabajar con un contexto y de crear distintas rutas que permiten que la aplicación funcione de una forma fluida.</p>
        <h2>Dificultades:</h2>
        <p>Las mayores dificultades aparecieron a la hora de modificar los arreglos de los contactos y sus respectivos mensajes, ya que al utilizar variables de estado no es posible hacerlo de la forma habitual. Además la complejidad de manejar todo a través de un contexto y un sistema de rutas</p>
        <h2>Conlusiones:</h2>
        <p>Es un proyecto que comenzó de una forma muy simple y a medida que se fue desarrollando se fué complejizando y gracias a eso considero que me sirve de esperiencia y aprendizaje para entender el funcionamiento de React. Con la expectiva y a la espera de poder seguir mejorando el proyecto con el curso de BackEnd</p>
    <button onClick={returnHome}>Home</button>    
    </section>
)
}

export {Acerca}