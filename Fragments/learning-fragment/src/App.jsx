import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Fooditems from './components/Fooditems';
import Errormessage from './components/Errormessage';

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  return (
    <>
      <h1>Healthy food</h1>
      <Errormessage items={foodItems}></Errormessage>
      <Fooditems items={foodItems}></Fooditems>
    </>
  );
}

export default App
