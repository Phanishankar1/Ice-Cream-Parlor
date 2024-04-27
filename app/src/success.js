import { Link, Navigate, useNavigate } from "react-router-dom";
function Success2()
{
    // const a=useNavigate();
    function get()
    {
        alert("Enjoy the shoping")
    }
    return(
        <div id="success3">
      <Link to="/" onClick={get} > <h1 id="success">Do you want to continue the shopping click here </h1></Link>
        </div>
    )
}
export default Success2;