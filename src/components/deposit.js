import React from 'react';
import {UserContext,Card} from './context'
function Deposit(){
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState(0);
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);


  function handleDeposit() {
    if(validateIsNumberGreaterThanZero())
    {
      ctx.currentUser.balance = (Number(ctx.currentUser.balance) + Number(amount)).toFixed(2);
      setStatus('The Deposit Is Completed');
      setShow(false);
    }
    else
    {
      setStatus('Please enter a numerical amount to deposit greater than $0');
    }
  }
  function validateIsNumberGreaterThanZero()
  {
    let isNumber =  !isNaN(amount);
    return (isNumber && Number(amount)>0);
  }
  function isLoggedIn() {
    return (ctx.currentUser);
  }
  function clearForm()
  {
    setAmount(0);
    setShow(true);
    setStatus('');
  }
  return (
    <>
    <h1>Deposit</h1>
    <Card
      bgcolor="#D7E4EA"
      txtcolor="black"
      status={status}
      body={  
        show ? (
          (isLoggedIn())? (
            <>
            <table className="cardTable">
              <tbody>
                <tr><td width="80%">Balance</td><td>$ {ctx.currentUser.balance}</td></tr>
                <tr>
                  <td colSpan="2">Deposit Amount<br/>
                    <div className="moneyInput">
                      <input type="number" min="0.01" step="0.01" max="2500" className="form-control" id="amount" onChange={e => setAmount(e.currentTarget.value)}/>
                    </div>
                    
                  </td>
                </tr>
                <tr><td colSpan="2" className="cardBtn"><button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button></td></tr>
              </tbody>
            </table>
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
    </>
  );
}
export default Deposit;
