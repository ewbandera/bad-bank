import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import AllData from './components/alldata';
import Balance from './components/balance';
import CreateAccount from './components/createaccount';
import Deposit from './components/deposit';
import Home from './components/home';
import Login from './components/login';
import NavBar from './components/navbar';
import Withdraw from './components/withdraw';

const UserContext = React.createContext(null);
function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
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
