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
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

//LOGO
const logo = "../../../../public/img/logo.png"

const Navbar = () => {

   

    //Funcion para esconder la lista
    const [clicked, setClicked] = useState(false)
    
    const handleClick = ()=>{
        setClicked(!clicked)
        
    }
  return (
    <Router>
        <nav className='nav-container'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='barra-busqueda'>
                <input type="text" placeholder='Buscar productos' />
                <button  >Buscar</button>
            </div>
            <ul className='nav-items'>
                <li><Link to="/" className='li' >Inicio</Link></li>
                <li><Link to="/Nosotros" className='li'>Nosotros</Link></li>
                <li><Link to="/Clientes"className='li'>Clientes</Link></li>
                <li><Link to="/Carrito"className='li'>Carrito</Link></li>
                <li className='iconUser'>
                   <button  onClick={handleClick} className='li'> <CiUser ></CiUser></button>
                </li>

                <li className={clicked? "hizoclick": "nohizoclick"}>
                
                    <ul>
                        {/* <button  onClick={handleClick} ><IoCloseOutline className='aa'/></button> */}
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