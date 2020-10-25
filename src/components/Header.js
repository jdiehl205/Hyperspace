import React, { useContext } from 'react'
import { MyContext } from '../App';

export default function Header() {
    const gsap = useContext(MyContext);

    const scrollToAbout = () => {
        gsap.to(window, {duration: 1, scrollTo: '#about'});
    };

    return (
            <div id="header">
                <h1>Hyperspace</h1>
                <p>Aiming for a more perfect world.</p>
                <button onClick={scrollToAbout}>Learn More</button>
            </div>
    )
}
