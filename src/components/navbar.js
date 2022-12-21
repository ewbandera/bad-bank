import React from 'react';
import {UserContext} from './context'
function NavBar(){
  const ctx = React.useContext(UserContext);
  function isLoggedIn() {
    let results = (ctx.currentUser!=undefined);
    return results;
  }

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-inverse">
      <div className = "container-fluid">
        <a className="navbar-brand" href="#">BadBank</a>
        
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/">Balance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>          
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {(!isLoggedIn()) ? (
             <>
             <li className="nav-item"><a href="#/createaccount/" className="nav-link"><span className="fa-stack fa-lg">
               <i className="fa fa-square-o fa-stack-2x"></i>
               <i className="fa fa-user fa-stack-1x"></i>
               </span> Create Account</a>
             </li>
             <li className="nav-item"><a href="#/login/" className="nav-link"><span className="fa-stack fa-lg">
               <i className="fa fa-sign-in fa-stack-2x" aria-hidden="true"></i>            
               </span> Login</a>
            </li>
            </>          
            ):(
              <>
              <li className="nav-item"><a href="#/logout/" className="nav-link"><span className="fa-stack fa-lg">
              <i className="fa fa-square-o fa-stack-2x"></i>
              <i className="fa fa-user fa-stack-1x"></i>
              </span> Logout {ctx.currentUser.name}</a>
            </li>
            </>
            )}
          
        </ul>
      </div>
    </nav>
    
    </>
  );
}
export default NavBar;