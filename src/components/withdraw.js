import React from 'react';
import {UserContext,Card} from './context'
function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus]     = React.useState('');

  function handleWithdraw() {

  }
  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Withdraw"
      status={status}
      body={  
              <>
              Balance $100<br/><br/>
              Withdraw Amount<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
              </>
           }
    />
  );
}
export default Withdraw;
