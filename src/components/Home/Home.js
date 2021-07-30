import React,{ useState, useContext, Children} from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

function Home(){

    let [superheroe, setSuperheroe] = useState();

    function handleSubmit(e){
        e.preventDefault()
    }

    const handleEnviar = (event) => {
        setSuperheroe(event.target.value )
    }
    
    return(
        
        <div className="principal">
            <div className="contenedor__barraBusqueda">
                <p className="contenedor__barraBusqueda--titulo">Search</p>
                <p className="contenedor__barraBusqueda--info">Superheroe / Villain</p>
            </div>

         <div className="contenedor_formulario">
            <form onSubmit={handleSubmit}>
                    <input type="text" defaultValue={superheroe}  onChange={handleEnviar} name="name"  placeholder="Find your Super o Villain" className="formulario" />             
            </form>
            
        </div>

          <Cart superheroe={superheroe}/>
      
        </div>
    )
}

export default Home;