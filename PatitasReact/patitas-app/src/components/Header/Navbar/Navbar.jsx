import React ,{useState}from 'react'


import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
import Carrito from "./Carrito"
import Clientes from './Clientes'
import Inicio from './Inicio'
import Nosotros from './Nosotros'
import Login from "./Login"
import Register from "./Register"
import "./navbar.css"

//ESTO ES PARA EL ICONO DE REACT-ICONS
//https://react-icons.github.io/react-icons/    AHI ESTA LA PAG; SE INSTALA LA DEPENDENCIA Y DESPUES SE USA EL ICONO COMO SI FUESE UN COMPONENTE
import { CiUser } from "react-icons/ci";

//LOGO
const logo = "../../../../public/img/logo.png"

const Navbar = () => {

    const [clicked, setClicked] = useState(false)
    console.log(clicked)
    const handleClick = ()=>{
        setClicked(!clicked)
        
    }
  return (
    <Router>
        <nav className='nav-container'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <ul className='nav-items'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Nosotros" >Nosotros</Link></li>
                <li><Link to="/Clientes">Clientes</Link></li>
                <li><Link to="/Carrito">Carrito</Link></li>
                <li className='iconUser'>
                   <button  onClick={handleClick} clicked={clicked}> <CiUser ></CiUser></button>
                </li>

                <li className={clicked? "hizoclick": "nohizoclick"}>
                
                    <ul>
                        <li><Link to="/Login">Iniciar Sesion</Link></li>
                        <li><Link to="/Register" >Registrarse</Link></li>
                    </ul>
                
                </li>
                
            </ul>
            
            
        </nav>

        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Clientes" element={<Clientes />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
        </Routes>

    </Router>
  )
}

export default Navbar