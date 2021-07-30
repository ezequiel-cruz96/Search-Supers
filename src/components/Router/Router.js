import React, {useState, useContext,Children} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Greeting from '../Greeting/Greeting';
import Home from '../Home/Home';
import {AppContext} from '../Context/Context';
import DetailContainer from '../containers/DetailContainer'

function Router(){
    
    let {login}  = useContext(AppContext);

    let logged=0;

    if((login.email==="challenge@alkemy.org")&&(login.password==="react")){
        logged=1;
    }else{
        logged=0;
    }

    return(
    <>
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
        <Greeting/>
    </Route>
          {
          logged ===0 ? (
            <Greeting/>
              ):(<>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
            
                    <Route exact path="/super/:id">
                        <DetailContainer/>
                    </Route>
                </>
                )
          }
      </Switch>
    </BrowserRouter> 

    </>
    )
}

export default Router;