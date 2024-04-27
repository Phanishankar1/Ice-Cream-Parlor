import { NavLink } from "react-router-dom";
function Menu()
{
    return(
       
        <nav className="p">
        <span class="style">l</span>
        <NavLink to="/"id="k" >Home </NavLink>
        <NavLink to="/about"id="l" >About</NavLink>
        <NavLink to="/items"id="m">Menu</NavLink>
        <NavLink to="/review"id="n">Review</NavLink>
        <NavLink to="/contact"id="n">Contact</NavLink>
        <NavLink to="/myorders"id="my_orders">My Orders</NavLink>
        {/* <NavLink to="/login"id="log">Login</NavLink> */}
        </nav>
    )
}
export default Menu;