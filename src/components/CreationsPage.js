import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../App';
import '../Css/CreationsStyle.css';

export default function CreationsPage() {
    const gsap = useContext(MyContext);

    return (
        <div id="creation">
            <header id="navbar">
                <nav>
                <h1>Hyperspace</h1>
                    <ul>
                        <Link to="/">
                            <li className="unselected">Home</li>
                        </Link>
                        <Link to="/creations">
                            <li className="selected">Creations</li>
                        </Link>
                        <Link to="/contact">
                            <li className="unselected">Contact</li>
                        </Link>
                    </ul>
                </nav>
            </header>
            <h1>Hyperspace Gallery</h1>
            <div className='gallery'>
                <div>
                    <h3>Vr Headsets</h3>
                    <img src={require('../Images/vrheadset.webp')} alt="vr headset"/>
                </div>
                <div>
                    <h3>Phones</h3>
                    <img src={require('../Images/phone.webp')} alt="Phone"/>
                </div>
                <div>
                    <h3>TVs</h3>
                    <img src={require('../Images/tv.jpg')} alt="TV"/>
                </div>
            </div>

        </div>
    )
}
