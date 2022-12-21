import React from 'react';
import {UserContext,Card} from './context'
function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState(0);
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);

  function handleWithdraw() {
    ctx.currentUser.balance = (Number(ctx.currentUser.balance) - Number(amount)).toFixed(2);
    setStatus('The Withdraw Is Completed');
    setShow(false);
  }
  function isLoggedIn() {
    let results = (ctx.currentUser!=undefined);
    return results;
  }
  function clearForm()
  {
    setAmount(0);
    setShow(true);
    setStatus('');
  }
  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Withdraw"
      status={status}
      body={  
        show ? (
          (isLoggedIn())? (
            <>
            Withdraw Amount<br/>
            <input type="number" min="0.01" step="0.01" max="2500" className="form-control" id="amount" onChange={e => setAmount(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
            </>
            ):(
              <>
              <p>You must be logged in to access this feature</p>
              <a href="#/login/" className="btn btn-light">Login</a>
              </>
            )
        ):(
          <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Ok</button>
        </>
        )
      }
    />
  );
}
export default Withdraw;
