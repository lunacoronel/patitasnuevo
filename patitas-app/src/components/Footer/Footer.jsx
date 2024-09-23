import React from 'react'

import "./footer.css"



const Footer = () => {
  return (
    <>
    
    <footer className="footer">
        <div className="container">
            {/* <div className="cajafooter"> */}
                <div className="sectionfooter">
                    
                    <h3 className='title'>Soporte</h3>
                    
                    <a href="">Atencion al Cliente</a> 
                    <a href="#">Preguntas Frecuentes</a>    
                    <a href="#">Politica de Privacidad</a>  
                    <a href="#">Terminos de Devolicines</a> 
                    
                </div>
                <div className="sectionfooter">
                    <h3 className='title'>Contacto</h3>
                    <a href="#"><i className="fa-solid fa-location-dot"></i>  Nuestro Local</a>
                    <a href="#" className="icontelefono"><i className="fa-solid fa-phone"></i>  +54 351 1292054</a>
                    <a href="#"><i className="fa-regular fa-envelope"></i>  Patitas@gmail.com</a>

                </div>
                

            {/* </div> */}
                <div className="sectionfooter">
                    <h3 className='title'>Hacenos tu consulta!</h3>
                    <form className='barra-busqueda'>
                        <input type="text" placeholder="" className='input'/>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
        </div>
        <div className= "copy sectionfooter">
            <p>Todos los derechos reservados. ©️ Patitas 2024.</p>
        </div>

    </footer>
    
   
      
    </>
  )
}

export default Footer;