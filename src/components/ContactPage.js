import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Css/ContactSyle.css'

export default function ContactPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    return (
        <div>
            <header id="nav">
                <nav>
                <h1>Hyperspace</h1>
                    <ul>
                    <Link to="/">
                            <li className="unselected">Home</li>
                        </Link>
                        <Link to="/creations">
                            <li className="unselected">Creations</li>
                        </Link>
                        <Link to="/contact">
                            <li className="selected">Contact</li>
                        </Link>
                    </ul>
                </nav>
            </header>
            <div className="form">
            <h1>Contact Us</h1>
                <form name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <input required placeholder="Email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <br />
                    <br />
                    <input required placeholder="Name" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <br />
                    <br />
                    <textarea required className="text" placeholder="Tell us your problem" cols="18" rows="4" name="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
                    <br />
                    <br />
                    <input type="submit" className="btn" value="Submit" />
                </form>
            </div>
        </div>
    )
}
