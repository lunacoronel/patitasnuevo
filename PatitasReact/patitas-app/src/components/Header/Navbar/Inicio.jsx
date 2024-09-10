import React from 'react'
import Productos from "../../Main/Productos/Productos"
import '../../Main/Productos/Products.css'
import Aside from '../../Main/Productos/Aside'


const Inicio = () => {

  

  return (
    <div className='container-inicio'>
    

      
      



      <main>
        <Productos/>
      </main>

        
      <aside className='container-aside'>
        {console.log(<Aside/>)}
      </aside>
    </div>
  )
}

export default Inicio




/*

const [terminoBusqueda, setTerminoBuscada]= useState()

const [productos] = useState([
 {id:1, nombre:"Producto 1",descripcion: "descripcion del producto 1"},
 {id:2, nombre:"Producto 2",descripcion: "descripcion del producto 2"},
 {id:3, nombre:"Producto 3",descripcion: "descripcion del producto 3"},
])

//filtro
const productosFiltrados = productos.filter((producto)=>{
 return producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
}) */