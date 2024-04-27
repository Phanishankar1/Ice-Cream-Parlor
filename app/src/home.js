import home6 from "./home6.jpg";
import home7 from "./home7.jpg";
import home8 from "./home8.jpg";
import home9 from "./home9.jpg";
import home10 from "./home10.jpg";
import home11 from "./home11.jpg";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const data=[
    {
      d:home6,
    },
    {
      d:home7,
    },
    {
      d:home8,
    },
    {
      d:home9,
    },
    {
      d:home10,
    },
    {
      d:home11,
    },
  ];
  const b=useNavigate();
  function get1()
{
  b('/items')
}
function getabout()
{
b('/about')
}

  // const a = useNavigate();

  // function get() {
  //   return a('/success');
  // }
  return (
    <div id="d1">
     
      <h1 id="g">WELCOME TO ICE CREAM PARLOR</h1>
      <h4 id="o"><q>Life is like an ice cream. Enjoy it before it melts</q></h4>
      <div id="a1">
      </div>
      <div id="a2">
      </div>
      {/* <div id="a5"><button onClick={get1}id="homebutton">Buy Now</button></div> */}
      <div id="a3">
      </div>
      <div id="a4">
      </div>
      <>
  <hr id="a7"></hr>
  <h1 id="color">We have most familiar varieties </h1>
 <center><ul id="a8"><li><p id="a9">There are high-quality, unique flavors that go beyond the traditional options. Examples include lavender honey, balsamic vinegar, or black sesame</p></li></ul></center>
 <center><ul id="a8"><li><p id="a10">Some ice creams incorporate alcohol, such as whiskey, rum, or wine, to create unique adult-oriented flavors are avalible with us</p></li></ul></center>
 <center><ul id="a8"><li><p id="a9">Many regions around the world have their own unique ice cream flavors. For example, Japan is known for matcha green tea ice cream, while India has flavors like kulfi (a type of Indian ice cream).</p></li></ul></center>
 <div id="a5"><button onClick={get1}id="homebutton">see more</button></div>
 <h1 id="a11">We have most familiar ice cream artisans from various places</h1>
     {data.map((ele)=>
     {
      const {d}=ele;
      {
      return(
        <>
       <img src={d} height="400"width="400"alt="alt" id="homeimg"/>
       </>
      )
     }
     })}
    <h1><button onClick={getabout}id="aboutusmore">more about us</button></h1> 
  </>
      </div>
  )
}

export default Home;
