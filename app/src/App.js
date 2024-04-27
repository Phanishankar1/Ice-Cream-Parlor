// import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './home';
import Menu from './menu';
import About from './about';
import Items from './items';
import Success from './customerdetails';
import Success2 from './success'
import Review from './review';
import MyOrders from './MyOrders';
import Featured from './featured';
import Old from './old';
import Icecreamdetails from './icecreamdetails';
import Error404 from './error404';
import Contact from './contact';
import Intro from './Intro';
import Login from './Login';
import Register from './Register';
function App() {
  // const location = useLocation();
  return(
     <center>
      {/* <Router>
      <Routes>
      <Route path="intro"element={<Intro/>} />
      </Routes>
      </Router> */}
      {/* {location.pathname === '/' ? null : <nav />} */}
      <Router>
      <Menu />
    <Routes>
    <Route path="intro"element={<Intro/>} > 
       {/* <Route path={<Login/>} /> */}
     <Route path="register"element={<Register/>} />
     <Route path="login"element={<Login/>} /> 
      </Route> 
      <Route path="/"element={<Home />} />
      <Route path="/about"element={<About/>}/>
      <Route path="/items"element={<Items/>}/>
      <Route path="/items/:id"element={<Icecreamdetails/>}/>
     < Route path="/customerdetails" element={<Success/>}/>
      <Route path="/customerdetails/:id" element={<Success/>}/>
      <Route path="/success"element={<Success2/>}/>
      <Route path="/review"element={<Review/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
      <Route path="*"element={<Error404/> }/>
    </Routes>
    </Router>
    </center>
  )
};
export default App;
