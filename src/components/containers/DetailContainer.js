import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';
import './DetailContainer.css';

function DetailContainer(){

    const {id}= useParams();

    const [detalle, setDetalle] = useState([]);

    useEffect(() => {
      
        fetch(`https://www.superheroapi.com/api.php/10226516722893407/${id}`)
            .then((response) => response.json())
            .then((data) => setDetalle([data]));
}, []);


    return(
        <>


        <div>
            {detalle.map((el)=>{

                return(
                    <>
                    <div className="contenedor__detalle">
                        <div>
                            <img src={el.image.url} alt=""/>
                        </div>
                        <div className="contenedor__detalle--info">
                            <div>Name: {el.name}</div>
                            <div>Full name: {el.biography["full-name"]}</div>
                           
                            <div>Weight: {el.appearance.weight[1]}</div>
                            <div>Height: {el.appearance.height[1]}</div>
                           <div>Eye color: {el.appearance["eye-color"]}</div>  
                            <div>Work: {el.work.occupation}</div>
                            <div>Place of birth: {el.biography["place-of-birth"]}</div>
                            <div>
                                PowerStats:
                                <div className="contenedor_detalle--stats">
                                <div>Intelligence: {el.powerstats.intelligence}</div>
                                <div>Strength: {el.powerstats.strength}</div>
                                <div>Speed:{el.powerstats.speed}</div>
                                <div>Durability: {el.powerstats.durability}</div>
                                <div>Power{el.powerstats.power}:</div>
                                <div>Combat: {el.powerstats.combat}</div>
                                </div>
                            </div>
                            <div>Alignment: {el.biography.alignment}</div>
                            
                        </div>           
                    </div>
                    
                    <Link to={`/home`}>
                    <button type="button" className="btn btn-primary">Back to Home</button>
                    </Link>


                    </>
                )
            })}
        </div>


        

        </>
    )
}

export default DetailContainer;