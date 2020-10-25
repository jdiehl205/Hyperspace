import React from 'react'
const vr = require('../Images/vr.jpg')

export default function About() {
    return (
            <div id="about">
                <div className="img">
                    <img src={vr} alt="VR Headset" />
                </div>
                <div className="sections">
                    <h1>About Us</h1>
                    <p>We are Hyperspace, the #1 fastest growing company in the technology industry. Our company believes that the quality of our technology comes first and buisness second, and we make sure the people get the technology they deserve at a reasonable price they can afford. So come join Hyperspace as we propell mankind into the new age.</p>
                </div>
            </div>
    )
}
