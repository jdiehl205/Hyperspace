import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useContext, useState, useRef } from 'react';
import { MyContext } from '../App'

export default function Nav() {
    const gsap = useContext(MyContext);

    window.addEventListener('load', () => {
        gsap.to(".li1", {scrollTrigger: {
            trigger: '#header',
            start: 'top center',
            end: 'bottom center',
            toggleActions: "restart reset restart reset",
            toggleClass: {targets: '.li1', className: 'colorNav'},
        }});

        gsap.to(".li2", {scrollTrigger: {
            trigger: '#about',
            start: 'top center',
            end: 'bottom center',
            toggleActions: "restart reset restart reset",
            toggleClass: {targets: '.li2', className: 'colorNav'},
        }});

        gsap.to(".li3", {scrollTrigger: {
            trigger: '#creations',
            start: 'top center',
            end: 'bottom center',
            toggleActions: "restart reset restart reset",
            toggleClass: {targets: '.li3', className: 'colorNav'},
        }});

        gsap.to(".li4", {scrollTrigger: {
            trigger: '#contact',
            start: 'top center',
            end: 'bottom center',
            toggleActions: "restart reset restart reset",
            toggleClass: {targets: '.li4', className: 'colorNav'},
        }});
    })

    function addClass(e){
        document.querySelectorAll('li').forEach(li => {
            if(li.classList.contains('colorNav')){
                return li.classList.remove('colorNav');
            }else{
                return
            }
        });

        e.target.classList.add('colorNav');
        switch (e.target.textContent) {
            case 'Welcome':
                gsap.to(window, {scrollTo: '#header', duration: 1});
            break;
            case 'Who We Are':
                gsap.to(window, {scrollTo: '#about', duration: 1});
            break;
            case 'Our Creations':
                gsap.to(window, {scrollTo: '#creations', duration: 1});
            break;
            case 'Get In Touch':
                gsap.to(window, {scrollTo: '#contact', duration: 1});
            break;
        }
    }

    return (
        <div>
            <nav id="sidebar">
                <ul>
                    <li onClick={addClass} className="border1 li1">Welcome</li>
                    <li onClick={addClass} className="border1 li2">Who We Are</li>
                    <li onClick={addClass} className="border1 li3">Our Creations</li>
                    <li onClick={addClass} className="border1 li4">Get In Touch</li>
                </ul>
            </nav>
    </div>
    )
}
