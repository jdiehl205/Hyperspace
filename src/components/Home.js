import React from 'react';
import Header from './Header';
import About from './About';
import Creations from './Creations';
import Contact from './Contact';
import Nav from './Nav';

export default function Home() {
    return (
        <>
            <Nav />
            <div className="wrapper">
                <Header  />
                <About />
                <Creations />
                <Contact />
            </div>
        </>
    )
}
