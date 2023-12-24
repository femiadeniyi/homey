import React from "react"
import "./Contact.css"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"

export default function Contact() {
	return(
          <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
               <div className="flexColStart c-left">
                    <span className="orangeText">Our Contact</span>
                    <span className="primaryText">Easy to Contact us</span>
                    <span className="secondaryText">We always ready to help by provideing the best serve meal beleive a good blace to live can make your better</span>

                   <div className="flexColStart contactModes">
                     <div className="flexStart row">
                       <div className="flexColCenter mode">
                          <div className="flexStart">
                             <div className="flexCenter icon">
                                <MdCall size={25}/>
                             </div>
                               <div className="flexColStart detail">
                                 <span className="primaryText">Call</span>
                                 <span className="secondaryText">09063916572</span>
                               </div>
                           </div>

                           <div className="flexCenter button">Call Now</div>
                        </div>
                        <div className="flexColCenter mode">
                          <div className="flexStart">
                             <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                             </div>
                               <div className="flexColStart detail">
                                 <span className="primaryText">Chat</span>
                                 <span className="secondaryText">09063916572</span>
                               </div>
                           </div>

                           <div className="flexCenter button">Chat Now</div>
                        </div>

                     </div>
                         
                        <div className="flexStart row">
                         <div className="flexColCenter mode">
                          <div className="flexStart">
                             <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                             </div>
                               <div className="flexColStart detail">
                                 <span className="primaryText">Video Call</span>
                                 <span className="secondaryText">09063916572</span>
                               </div>
                           </div>

                           <div className="flexCenter button">Video Call Now</div>
                         </div>

                         <div className="flexColCenter mode">
                          <div className="flexStart">
                             <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                             </div>
                               <div className="flexColStart detail">
                                 <span className="primaryText">Chat</span>
                                 <span className="secondaryText">09063916572</span>
                               </div>
                           </div>
                         </div>
                        </div>
                    
                         
                     </div>
                   
                </div>


                <div className="c-right">
                  <div className="image-container">
                    <img src="../contact.jpg" alt="contact"/>
                  </div>
                </div>
            </div>
          </section>
		)
}