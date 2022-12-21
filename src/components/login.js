import React from 'react';
import {UserContext,Card} from './context'
function Login(){
  const ctx = React.useContext(UserContext);
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);

  function handleLogin() {
    const currentLoginUser = ctx.users.filter(x => x.email===email);
    console.log(currentLoginUser.length);
    console.log(JSON.stringify(currentLoginUser));
    if(currentLoginUser.length===1 && currentLoginUser[0].password===password)
    {
      console.log(password);
      ctx.currentUser = currentLoginUser[0];
      console.log(JSON.stringify(ctx));
      setStatus('You Are Successfully Logged In');
      setShow(false);
    }
    else{
      ctx.currentUser = null;
      setStatus('Error: Not Authenticated');
      setTimeout(() => setStatus(''),3000);
    }

  }
  function clearForm()
  {
    setEmail('');
    setPassword('');
    setShow(true);
    setStatus('');
  }
  return (
   
    <Card
      bgcolor="warning"
      txtcolor="black"
      header="Login"
      status={status}
      body={show ? (  
        <>
        Email<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
        </>
      ):(
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Ok</button>
        </>
      )}             
    />
  );
    
   
}

export default Login;
