import about4 from "./about4.jpg";
import about5 from "./about5.jpg";
import about6 from "./about6.jpg";
import about7 from "./about7.jpg";
import about8 from "./about8.jpg";
import about9 from "./about9.jpg";
import { Link } from "react-router-dom";
function About()
{
    const data=[
        {
            id:"1",
            d:about4,
            i:"Strawberry",
        },
        {
            id:"2",
            d:about5,
            i:"Cookies and Cream",
        },
        {
            id:"3",
            d:about6,
            i:"neatButter Pecan",
        },
        {
            id:"4",
            d:about7,
            i:"Rocky Road",
        },
        {
            id:"5",
            d:about8,
            i:"Lemon Sorbett",
        },
        {
            id:"6",
            d:about9,
            i:"Vanilla  ",
        },
    ];
    console.log("hello");
    return(
        <div id="r">
            <div id="io">
            <div id="aboutd4"></div>
        <div id="aboutd2"><h1 id="about6">ABOUT US</h1><div id="aboutd3"><b>In 2017… we started out by experimenting with plant - based ice cream recipes in a no-frill family home kitchen. Our goal was to develop a nice cream that was better-for-you (and the planet!) than the conventional options available… and to prove that the plant based label or a healthier option does not mean you have to compromise on taste. Our ice creams are now handcrafted in small batches (in a fancier kitchen!) from all-natural ingredients. Every flavour is free from dairy, egg, preservative, and any artificial additives. The support for our product has been tremendous and we hope to be able to reach more people. Ultimately, we strive to create the kind of company that’s feel good and fun to support, work for, and partner with. We believe in building a more conscious community through our ice cream. Thank you to everyone who has been a part of our journey! Kindly, Ishpal, Serina & Kind Kones team</b></div></div>
        </div>
        <div id="about5">
            <h1 id="about10">WE ARE SPECIAL IN</h1>
         {data.map((ele)=>{
         const {d,i}=ele;
         return(
            <div id="about11">
           <Link id="over"><img src={d} height="300"width="500" id="img"/></Link>
        <div> <h2 id="u">{i}</h2>
           </div></div>
         )
         }
         )}
        </div>
        </div>
    );
};
export default About;