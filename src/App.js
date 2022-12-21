import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import AllData from './components/alldata';
import Balance from './components/balance';
import CreateAccount from './components/createaccount';
import Deposit from './components/deposit';
import Home from './components/home';
import Login from './components/login';
import NavBar from './components/navbar';
import Withdraw from './components/withdraw';
import {UserContext} from './components/context'

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'Eric Bandera',email:'ericbandera@gmail.com',password:'1234',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;
