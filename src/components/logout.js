import React from 'react';
import {UserContext,Card} from './context'
function Logout(){
    const ctx = React.useContext(UserContext);
   
  
    function handleLogout() {
      
        ctx.currentUser = null;
    }
    return (
     
      <Card
        bgcolor="warning"
        txtcolor="black"
        header="Logout"
        status=""
        body={
          <>
            <h5>Logged Out</h5>
            <a className="btn btn-light" href="/">Ok</a>
          </>
        }             
      />
    );
      
     
  }
  
  export default Logout;