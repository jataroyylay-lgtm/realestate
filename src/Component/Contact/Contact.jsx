import React from 'react'
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { HiChatAlt2 } from "react-icons/hi";
function Contact() {
  return (
     <section className="C-wrapper" id='contact'>
        <div className="b-container">
            <div className="c-left">
                <h2 className='tt1'>Our Contact Us</h2>
                <h1 className='tt2'>Easy to Contact us</h1>
                <p className='tt3'>We always ready to help by providijng the best services for you. We beleive a good blace to live can</p>
                <p className='tt3'>make your life better</p>
                <div className="c-box">
                    <div className="box">
                        <div className="c-detail">
                        <MdCall style={{color:"blue"}} className='icon' size={25}/>
                        <div className="text">
                        <span className='tx1'>Call</span><br />
                        <span className='tx2'>093 935 422</span>
                        </div>
                        </div>
                        <button className='c-btn'>
                            Call now
                        </button>
                    </div>
                    <div className="box">
                        <div className="c-detail">
                        <BsFillChatDotsFill style={{color:"blue"}} className='icon' size={25}/>
                        <div className="text">
                        <span className='tx1'>Chat</span><br />
                        <span className='tx2'>093 935 422</span>
                        </div>
                        </div>
                        <button className='c-btn'>
                            Chat now
                        </button>
                    </div>
                </div><br /><br />
                 <div className="c-box">
                    <div className="box">
                        <div className="c-detail">
                        <HiChatBubbleBottomCenter style={{color:"blue"}} className='icon' size={25}/>
                        <div className="text">
                        <span className='tx1'>Video Call</span><br />
                        <span className='tx2'>093 935 422</span>
                        </div>
                        </div>
                        <button className='c-btn'>
                            VideoCall now
                        </button>
                    </div>
                    <div className="box">
                        <div className="c-detail">
                        <HiChatAlt2  style={{color:"blue"}} className='icon' size={25}/>
                        <div className="text">
                        <span className='tx1'>Message</span><br />
                        <span className='tx2'>093 935 422</span>
                        </div>
                        </div>
                        <button className='c-btn'>
                            Message now
                        </button>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="img-container">
                    <img style={{height:"100%"}} src="./contact.jpg" alt="contact" className="rub" />
                </div>
            </div>
        </div>
     </section>
  )
}

export default Contact
