import React from 'react';
import { NavItem } from 'react-bootstrap';
import {UserContext,Card} from './context'

function AllData(){
  const ctx = React.useContext(UserContext);
  function getTable(){
    return  ctx.users.map((item,i)=>
      <tr key={i}>
        <td>{item.email}</td>
        <td>{item.name}</td>
        <td>{item.password}</td>
      </tr>
      );
  }
  return (
    <>
    <h5>All Data in Store</h5>
    
    <table className="allDataTable">
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Password (hash)</th>
        </tr>
      </thead>
      <tbody>{getTable()}
      </tbody>
    </table>
    {JSON.stringify(ctx)}
    </>
  );
}
export default AllData;
