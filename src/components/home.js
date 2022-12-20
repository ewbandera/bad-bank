import React from 'react';
import{Card} from 'react-bootstrap';

function Home(){
  return (
    <>
    <h1>Home Page</h1>
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
    </>
  );  
}
export default Home;
