import { Link } from "react-router-dom";
import contact2 from "./contact2.jpg"
function Contact()
{
    return(
        <div id="contact1">
            <center>S
       <h1 id="contact2">Contact Us</h1> 
        <p  id="contact3">We are available 24 hours to meet your needs, and you can contact us through the information below.</p>
        <p  id="contact4">You can also raise your complaints</p>
        {/* <div id="contact5"></div> */}
        <div id="contact5">  <b id="contact6">Address</b></div>
       <p id="contact8">Surampalem Peddapuram mandal Kakinada district Andhra Pradesh Door n:5-134/A,<br></br>gangadhar street infront of temple raghuram nagar</p>
       <div id="contact9"><b id="contact16">Phoneno:</b></div>
       <p id="contact11">+91 9542599732</p>
       <div id="contact10"><b id="contact16">Facebook:</b></div>
       <p id="contact11"><a href="https://www.facebook.com/">https://www.facebook.com</a></p>
       <div id="ema2">
       <h3>connect through:-</h3>
      <b id="ema3">Email us:</b><a href="mailto:nandepuphanishankar@gmail.com" ><input type="email"placeholder="enter your email id" id="ema"/></a> 
      </div>
       </center>
        </div>
    )
}
export default Contact;