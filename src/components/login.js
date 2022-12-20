import React from 'react';
import {UserContext,Card} from './context'
function Login(){
  const ctx = React.useContext(UserContext);
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus]     = React.useState('');

  function handleLogin() {

  }
  return (
    <Card
      bgcolor="warning"
      txtcolor="black"
      header="Login"
      status={status}
      body={  
              <>
              Email<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
              </>
           }
    />
  );
    
   
}

export default Login;
