import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Fooditems from './components/Fooditems';
import Errormessage from './components/Errormessage';
import Container from './components/Container';

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  return (
    <>
    <Container>
      <h1><center>Healthy food</center></h1>
      <Errormessage items={foodItems}></Errormessage>
      <Fooditems items={foodItems}></Fooditems>
    </Container>
    </>
  );
}

export default App
