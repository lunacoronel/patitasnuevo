
const ClientesList = ({users}) => {

  return (
    <div className="cards-clientes">
     
      

      {users.map(user =>(
            <div key={user.id} className="card-clientes" >

              <p>El nombre del usuario es: {user.nombre}</p>
              <p>La edad del usuario es: {user.edad}</p>
              <p>Usuario Numero: {user.id}</p>
            </div>
        )
      )}


    </div>
  )
}

export default ClientesList