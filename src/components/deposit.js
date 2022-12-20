import React from 'react';
import {UserContext,Card} from './context'
function Deposit(){
  const ctx = React.useContext(UserContext);
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus]     = React.useState('');

  function handleDeposit() {

  }
  return (
    <Card
      bgcolor="success"
      txtcolor="black"
      header="Deposit"
      status={status}
      body={  
              <>
              Balance&NBSP;&NBSP;&NBSP;&NBSP;&NBSP;$100<br/><br/>
              Deposit Amount<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
              </>
           }
    />
  );
}
export default Deposit;
