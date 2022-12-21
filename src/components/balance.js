import React from 'react';
import {UserContext,Card} from './context'

function Balance(){
  const ctx = React.useContext(UserContext);  
  return (
    <h1>Balance</h1>
  )
}
export default Balance;
