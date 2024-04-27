import { useParams } from "react-router-dom";
import icecreamdata from "./icecreamdata";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
function Icecreamdetails()
{
  const {id}=useParams();
    const a = useNavigate();

  function get(id)
   {  
    a("/intro/login")
    // a(`/customerdetails/${id}`);
  }
   
    // console.log(params);
    const icedata=icecreamdata.find((ele)=>ele.id==id);
    return(
    <div id="menu6">
    <h1 id="menu19">Icecreamdetails</h1>
    <img src={icedata.d} height="500"width="500" id="menu9"/>
   
    <h1>{icedata.i}</h1>
    <h1>{icedata.price}</h1>
    <h4>Highly fat free.</h4>
   <button onClick={get} id="menu7"> <Link>Place order</Link></button>
    <p id="menu5">Ice cream is made from milk, which is a good source of calcium. Calcium is essential for strong bones and teeth.</p>

    </div>
    )
}
export default Icecreamdetails;