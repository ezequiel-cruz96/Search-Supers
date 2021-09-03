import React from 'react';
import './Team.css'



function Team({datos,seteo}){

    let alignment={
        good:"card-control-good",
        bad:"card-control-bad"
    }

    function EliminarItem(id){
        let CartNuevo= datos.filter((el)=>
        el.id!==id
        )
        seteo(CartNuevo)
      }

  
    return(
      <>
        <h1>Your Team</h1>

        <div className="contenedor_carta2">
            {datos.map((el) => {

                return (
                    <>
                        <div className="cart-team">
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
                                   
                                   <button  type="button" onClick={ () => EliminarItem(el.id) }  className="btn btn-danger" >Remove</button>

                                </did> 
                            </div>  
                        </div>
                        </div>
  
                    </>
                )
            })
            }
            </div>


      </> 
    )
}

export default Team;