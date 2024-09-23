import React ,{useState}from 'react'
import Productos from "../../Main/Productos/Productos"
import '../../Main/Productos/Products.css'



const Inicio = () => {

  const [allProducts,setAllProducts] = useState([])

  return (
    <div className='container-inicio'>
    

      
      



      <main>
        <Productos allProducts={allProducts} setAllProducts={setAllProducts}
         
        />
      </main>

        
      
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