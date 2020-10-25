import React from 'react'
import { Link } from 'react-router-dom';
const pen = require('../Images/quil.jpg');

export default function Contact() {
    return (
        <div id="contact">
            <div className="img">
                <img src={pen} alt="Contact"/>
            </div>
            <div className="sections">
                <h1>Contact Us</h1>
                <p>Give us some feedback so we can improve your overall experience when using any of our technologies</p>
                <Link to='/contact'>
                    <button>Learn More</button>
                </Link>
            </div>
        </div>
    )
}
