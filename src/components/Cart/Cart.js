import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Team from '../Team/Team';
import './Cart.css';


function Cart({superheroe}){

    let [datos, setDatos] = useState([]);

    let [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get(`https://www.superheroapi.com/api.php/10226516722893407/search/${superheroe}/`)
        .then((response) => setDatos(response.data.results) )
        .catch((error) => {
          console.log(error);
        })
    }, [superheroe])

    let alignment={
        good:"card-control-good",
        bad:"card-control-bad"
    }

    function EstadoCarrito (id) {
        return team.some(item => item.id === id)
      }

      function addTeam(add,id){

        let estado= EstadoCarrito(id)

        if(estado){
            return add
        }
        let aux= [...team];
        aux.push(add);
        setTeam(aux)
      }

    return(
        <>
         <div className="contenedor_carta">
            {datos?.map((el) => {
                
                return (
                    <>
                   
                        <div className="cart">
                        <img src={el.image.url} className="card-image"/>
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{el.biography["full-name"]}</h6>
                            <div className="card-text">
                                PowerStats:
                               <div className="card-stats">
                                    <div>Intelligence: {el.powerstats.intelligence}</div>
                                    <div>Strength: {el.powerstats.strength}</div>
                                    <div>Speed:{el.powerstats.speed}</div>
                                    <div>Durability: {el.powerstats.durability}</div>
                                    <div>Power{el.powerstats.power}:</div>
                                    <div>Combat: {el.powerstats.combat}</div>
                                </div>
                                <did className="card-control">
                                   <div>{
                                       (el.biography.alignment==="good")?(
                                        <div className={alignment.good}>{el.biography.alignment}</div>   
                                       ):( 
                                        <div className={alignment.bad}>{el.biography.alignment}</div>   
                                       )
                                       }
                                    </div> 
                                   <div>
                                        <Link to={`/super/${el.id}`}>
                                        <button type="button" className="btn btn-primary">Detail</button>
                                        </Link>
                                   </div>
                                   <button onClick={ () => addTeam(el,el.id) } type="button" className="btn btn-success">Add</button>

                                </did> 
                            </div>  
                        </div>
                        </div>
  
                    </>
                )
            })
            }
            </div>


            
              <Team datos={team} seteo={setTeam}/>
        

            
        </>


    )
}

export default Cart;