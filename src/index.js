import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './Homepage';
import Product_Card from './Product_Card';
import Title from './Title';
import Navigation_Bar from './Navigation_Bar';

// function ShopInfo() {
//   return(
//     <div>
//       <h1>Welcome to LaibaWomensWear</h1>
//       <ul>Age : 18</ul>
//       <ul>Occupation : Unemployed</ul>

//     </div>
    
//   )
// }

function App() {
  return (
    <div>
      <Title/>
      <Navigation_Bar/>
      <Product_Card image="/Tshirt.png" title="Salmon T shirt"/>
      <Product_Card image="/Tshirt.png" title="Salmon T shirt"/>
      <Product_Card image="/Tshirt.png" title="Salmon T shirt"/>

    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
