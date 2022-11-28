import React from 'react';
import './Page2.css'

export const Page2 = ({onClickBack, savedStrain, orderNum, savedAddress, savedState, sellerAddress, currentLocation}) => {
    return (
    <div>      

        <div> <button onClick={onClickBack} id="backButton">Cancel Order</button> </div>

        <div id="orderNum">Order: 61B78CB066118F0004B6BF{orderNum}</div>

        <div id="instructions">You can now go for the pickup. Make sure your GPS is on that that we can update the seller</div>

        <div id="location">You are currently at {currentLocation}</div>

        <div  className="map-responsive">
        <iframe src={"https://www.google.com/maps/embed/v1/directions?key=AIzaSyD19nNLBybj4pKHYGRSDGTUIqCMawgtyJE&origin=" + savedAddress + "&destination=" + sellerAddress}
        width="414" height="448" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
        </div>


        <div> <img src='https://c8.alamy.com/comp/C2THCY/coconuts-palm-tree-perspective-view-from-floor-high-up-C2THCY.jpg'
        alt = "Map" width="100" height="130" style = {{position:'absolute', left:'20px', top:'670px',}}/> </div>

        <div id="strain2">Strain: {savedStrain}</div>

        <div id="name2">Name: Billy Bob</div>
        <div id="email">Email: billybobjoe@gmail.com</div>

    </div>
    
    );
  }