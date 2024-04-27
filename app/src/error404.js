import {useNavigate} from "react-router-dom";
function Error404()
{
    const a=useNavigate()
    function get()
    {
     return a("/")
    }
    return(
        <>
        <h1 id="err">error404</h1>
        <button onClick={get}>back to home</button>
        </>
    )
}
export default Error404;