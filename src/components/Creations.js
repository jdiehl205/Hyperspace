import React from 'react'
import { Link } from 'react-router-dom';

const hammer = require('../Images/hammer.jpg');

export default function Creations() {
    return (
            <div id="creations">
                <div className="img">
                    <img src={hammer} alt="Hammer"/>
                </div>
                <div className="sections">
                    <h1>Our Creations</h1>
                    <p>A gallery of all our technologies we created</p>
                    <Link to="/creations">
                        <button>Learn More</button>
                    </Link>
                </div>
            </div>
    )
}
