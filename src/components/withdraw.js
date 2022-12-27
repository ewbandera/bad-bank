import React from 'react';
import {UserContext,Card} from './context'
function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState(0);
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);

  function handleWithdraw() {
    if(validate()) {
      ctx.currentUser.balance = (Number(ctx.currentUser.balance) - Number(amount)).toFixed(2);
      setStatus('The Withdraw Is Completed');
      setShow(false);
    }
    
  }
  function validate()
  {
    if(!validateIsNumberGreaterThanZero()){
      setStatus('Please enter a numerical amount to withdraw greater than $0');
      return false;
    }
    if(!validateHasEnoughForTransaction()){
      setStatus('The transaction cannot be completed.  Please see our credit department for a loan.  Interest rates start as low as 17.99%');
      return false;
    }
    return true;
  }
   const validateHasEnoughForTransaction = () => (Number(amount)<=Number(ctx.currentUser.balance));
    
  
  function validateIsNumberGreaterThanZero()
  {
    let isNumber =  !isNaN(amount);
    return (isNumber && Number(amount)>0);
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
    <>
    <h1>Withdraw</h1>
    <Card
      txtcolor="black"
      bgcolor="#D7E4EA"
      status={status}
      body={  
        show ? (
          (isLoggedIn())? (
            <table className="cardTable">
              <tbody>
                <tr><td width="80%">Balance</td><td>$ {ctx.currentUser.balance}</td></tr>
                <tr>
                  <td colSpan="2">Withdraw Amount<br/>
                    <div className="moneyInput">
                      <input type="number" min="0.01" step="0.01" max="2500" className="form-control" id="amount" onChange={e => setAmount(e.currentTarget.value)}/>
                    </div>
                    
                  </td>
                </tr>
                <tr><td colSpan="2" className="cardBtn"><button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button></td></tr>
              </tbody>
            </table>):(
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
    </>
  );
}
export default Withdraw;
