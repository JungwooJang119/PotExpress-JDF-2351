import React from 'react';
import './Page2.css'

export const Page2 = ({onClickBack, savedName, savedStrain, orderNum, savedAddress, savedState}) => { 
    return (
    <div>

        {/* <div> <img src='https://s1.cdn.autoevolution.com/images/news/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg' */}
        {/* alt = "Map" width="414" height="448"/> </div> */}

        <div> <button onClick={onClickBack} id="backButton">Cancel Order</button> </div>

        <div id="orderNum">Order: 61B78CB066118F0004B6BF{orderNum}</div>

        <div id="instructions">You can now go for the pickup. Make sure your GPS is on that that we can update the seller</div>

        <div id="location">You are currently at {savedAddress}, {savedState}</div>

        <div  className="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13267.364439122515!2d-84.40470066540244!3d33.76477152936022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1669496934225!5m2!1sen!2sus"
        width="414" height="448" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
        </div>

        {/* <div>
            <a href="https://www.google.com/maps/@33.764772,-84.404701,14z"
            target="_blank" id="MapLink" rel="noreferrer">
                <img src="https://www.adster.ca/wp-content/uploads/2013/04/google-maps.jpg" alt="Maps"
                width='50px' height='50px' syle={{left:'100px', right:'100px'}}></img>
            </a>
        </div> */}

        {/* &output=embed */}

        <div> <img src='https://c8.alamy.com/comp/C2THCY/coconuts-palm-tree-perspective-view-from-floor-high-up-C2THCY.jpg'
        alt = "Map" width="100" height="130" style = {{position:'absolute', left:'20px', top:'670px',}}/> </div>

        <div id="strain2">Strain: {savedStrain}</div>

        <div id="name2">Name: Billy Bob</div>
        <div id="email">Email: billybobjoe@gmail.com</div>

    </div>
    
    );
  }