import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Home} from "../components/Home" 
import {NotFound} from "../views/NotFound" 
import {Login} from "../views/Login"
import {Register} from "../views/Register"
import { RouteProtected } from '../components/RouteProtected'
const RouterApp = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<RouteProtected><Home/></RouteProtected> }/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='login/register' element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export {RouterApp}