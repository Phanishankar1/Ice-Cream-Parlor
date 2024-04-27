import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.css'

function MyOrders() {
    const [loading,setLoading]=useState(true);
    const [myOrders,setMyOrders]=useState([]);
    
    useEffect(()=>{
        setLoading(true)
        axios.get("http://localhost:5000/myorders").then(async (res)=>{
           console.log(res.data.orderitems);
           let data=await res.data.orderitems
           setMyOrders(data)
          
           setLoading(false)
        })
       
    },[])
    
    if(loading){
        return <LoadingSpinner/>
    }
    const handleDelete=(id)=>{
         axios.delete("http://localhost:5000/deleteitem/"+id).then((res)=>{
            console.log(res.data);
            window.location.reload();
         })
   }
  return (
   <div id="myorder">
   <h1 id="myorder1">My Orders</h1>
      {
       !loading&& myOrders.length===0&& 
       <h2 id='no_items'>No Items ordered<br></br>
       <Link to='/items'>Click Here to Order Now</Link></h2>
      }
      {
        myOrders&& myOrders.map((eachOrder)=>{
            return ( 
            <div key={eachOrder._id} id='myorders'>
            {/* <h4>{eachOrder.item}</h4> */}
            <h4>Strawberry</h4>
            <h4>{eachOrder.date}</h4>
            <h4>{eachOrder.time}</h4>
            <h4>{eachOrder.minus}</h4>
            <button onClick={()=>handleDelete(eachOrder._id)}>Cancel Order</button>
            </div>
            )
        })
      }
   </div>
  );
};
function LoadingSpinner() {
    return (
      <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>
    );
  }

export default MyOrders