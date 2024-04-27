import { Link } from "react-router-dom";
import icecreamdata from "./icecreamdata";
function Items()
    {
        return(
            <div id="menubody">
            <h1 id="menu1">WELCOME TO MENU</h1>
            <h1 id="menu2">Order your favorate one</h1>
            <div className="grid">
            {icecreamdata.map((ele)=>
            {
                const{d,id,i}=ele;
                return(
                    <>
                    <Link to={`/items/${id}`} key={id} id="menu3">
                 <div id="menu111"><img src={d} height="350"width="350" id="menu113"/> </div>  
                 {/* <hr></hr> */}
                    <div id="menu14"><h1 id="menu4">{i}</h1>
                    <button id="menu10">Buy now</button></div>
                    </Link>
                    </>
                )
            })}
            </div>
            </div>
        )
    }
export default Items;