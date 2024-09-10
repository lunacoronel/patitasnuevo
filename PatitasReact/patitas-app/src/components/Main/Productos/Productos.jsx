import React,{useState,useEffect} from 'react';
// import "./Products.css"


//ICONO CART
import { MdAddShoppingCart } from "react-icons/md";

const Productos = () => {

    const apiUrl = 'https://dummyjson.com/products'
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => setProductos(data.products))
        
    },[])
    
    

  return (
    <div className='container-products'>
            
      
        {productos.map((pr)=>{
            return(
                <div key={productos.id} className='container-card'>
                    <div className='img-card'>
                        <img src={pr.thumbnail} alt={pr.title}  />

                    </div>
                    <div className='description-card'>
                        <div className='container-description' >
                            <p className='title-card'>{pr.title}</p>
                            <p className='price-card'>${pr.price}</p>
                        </div>
                            
                        <div className='cart-container'>
                            
                            <button className='add-to-cart'>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            )
        })}


        
    



        
    </div>
    
  )
}


export default Productos