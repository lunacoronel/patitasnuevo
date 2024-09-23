import React,{useState} from 'react'
import ClientesList from '../../Main/Clientes/ClientesList'
import "../../Main/Clientes/ClientesList.css"

const Clientes = () => {

  const users= [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'Maria', edad: 30 },
    { id: 3, nombre: 'Pedro', edad: 35 },
    { id: 4, nombre: 'Ana', edad: 20 },
    { id: 5, nombre: 'Luis', edad: 40 },
    { id: 6, nombre: 'Juan', edad: 26 },
    { id: 7, nombre: 'Maria', edad: 31 },
    { id: 8, nombre: 'Pedro', edad: 36 },
    { id: 9, nombre:'Caro', edad: 19},
    { id:10, nombre:'Luis', edad: 41}
]

  const [terminoBusquedo, setTerminoBusquedo]= useState("")

  const productosFiltrados = users.filter((user)=>{
    return user.nombre.toLowerCase().includes(terminoBusquedo.toLowerCase())
  })

  return (
    <div className='container-clientes'>
      <div className='container-busuqeda'>

        
        <input placeholder='Buscar clientes...' onChange={e => setTerminoBusquedo(e.target.value)}/>
      </div>
      {/* <button >Buscar</button> */}
      <ClientesList  users= {productosFiltrados} />

    </div>
  )
}

export default Clientes