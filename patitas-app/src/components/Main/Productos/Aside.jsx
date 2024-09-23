import React from 'react'

const Aside = () => {
    const apiUrl = 'https://dummyjson.com/products'
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => setProductos(data.products))
        
    },[])
  return (
    <aside>
        <details>
            <summary>Productos</summary>
        </details>
        <details>
            {productos.map(pr=>(
                <summary key={pr.id}>{pr.title}</summary>
              
            ))}
        </details>
    </aside>
  )
}

export default Aside