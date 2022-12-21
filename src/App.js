import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import AllData from './components/alldata';
import Balance from './components/balance';
import CreateAccount from './components/createaccount';
import Deposit from './components/deposit';
import Home from './components/home';
import Login from './components/login';
import Logout from './components/logout';
import NavBar from './components/navbar';
import Withdraw from './components/withdraw';
import {UserContext} from './components/context'

function App() {
  const [reload, setReload] = React.useState(false);
  const[state,setState] = React.useState({users:[{name:'Eric Bandera',email:'ericbandera@gmail.com',password:'1234',balance:100}]})
  function doAlert(context){
    setState(context);
    setReload(true);

    
  }
  return (
    
    <HashRouter>
      
      <UserContext.Provider value={state}>
        <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/login/" render={(props)=><Login {...props} reloadCallback={doAlert} />} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
          <Route path="/logout/" component={Logout} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;
