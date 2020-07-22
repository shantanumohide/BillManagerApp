import React from "react";
import logo from "./logo.png";
import fb from "./fb.png";
import insta from "./insta.jpg";
import whatsapp from "./whatsapp.png";
import twitter from "./twitter.png";

function Footer(){
    return(
               <div class="footer">
                    <div class="upper side">
                        <img src={logo} alt="logo" width="30px" height="30px"/>
                    </div>    
                
                    <div class="lower side">
                        <img src={fb} alt="fb"  width="20px" height="20px"/>
                        <img src={insta} alt="insta" width="20px" height="20px"/>
                        <img src={whatsapp} alt="whatsapp" width="20px" height="20px"/>
                        <img src={twitter} alt="twitter"  width="20px" height="20px"/>
                    </div>
                        
                </div>

    );
}

export default Footer;