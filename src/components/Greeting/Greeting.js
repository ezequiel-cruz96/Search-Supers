import React, {useState, useContext,Children,useEffect, StrictMode} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {AppContext} from '../Context/Context';
import { Formik, Field, Form } from 'formik';
import './Greeting.css';

function Greeting(){

    let [error, setError] = useState("");


    useEffect(() => {
        const user = {
            email: "challenge@alkemy.org",
            password: "react",
          };
        fetch("http://challenge-react.alkemy.org/", {
            method: 'POST',
            request: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(response => response.json()) 
        .then(response => setError(response.error))
        .catch(err => console.log(""))
      }, []);



let {addLogin,login}  = useContext(AppContext);

if((login.email==="challenge@alkemy.org")&&(login.password==="react")){
    localStorage.setItem("User",login.email);
    localStorage.setItem("Password",login.password);
}

    return(
    <>
      <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
    
        addLogin(values) 

        if((values.email!=="challenge@alkemy.org")&&(values.email!=="")){
            alert(error)  
        }      
        if((values.password!=="react")&&(values.password!=="")){
            alert("Incorrect Password")  
        } 
        
         if(values.email==""){
            alert("The field Mail is empty")
        } 

        if((values.password=="")&&(values.email!=="challenge@alkemy.org")){
            alert("The field Password is empty")
        }
       

      }}
    >
        <div className="contenedor_formulario--principal">
        <Form>
            <div className="form-group">
                <label htmlFor="email" className="contenedor_formulario--label">Email</label>
                <Field id="email" name="email" placeholder="Supers@Alkemy.com" type="email" className="form-control"/>
            </div>

            <div className="form-group">
                <label htmlFor="password" className="contenedor_formulario--label">Password</label>
                <Field id="password" name="password" type="password" placeholder="****" className="form-control" />
            </div>
            <div className="contenedor_formulario--boton">
                <button type="submit"  className="btn btn-primary " >Login</button>
            </div>
            <div>
      {(login.email==="challenge@alkemy.org")&&(login.password==="react")?(
          <Link to={`/home`}>
          <button type="button" className="btn btn-success">Ir a home</button>
          </Link>
      ):("")
    }
  </div>
        </Form>
        
        </div>
    </Formik>
  </div>

  
    </>
    )
}

export default Greeting;























/* import React,{useState} from 'react';
import './Greeting.css'

function Greeting(){

    const [password,setPassword]= useState("react")

    const [user,setUser]= useState("challenge@alkemy.org")


    return(
        <>
        <h1>Welcome</h1>

        <div className="contenedor-formulario">

            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email </label>
                <input type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>




        </>
    )
}

export default Greeting; */