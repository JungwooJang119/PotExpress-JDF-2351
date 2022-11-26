import React from 'react';
import './SelectPage.css'

export const SelectPage = ({onClickProceed, addStrain}) => { 

    function button1Handle() {
        addStrain("Indica");
        onClickProceed();
    }

    function button2Handle() {
        addStrain("Sativa");
        onClickProceed();
    }

    return (
    <div>

        <div id="SPTitle">Select Strain</div>

        <div> <img src='https://c8.alamy.com/comp/C2THCY/coconuts-palm-tree-perspective-view-from-floor-high-up-C2THCY.jpg'
        alt = "Map" width="100" height="130" style = {{position:'absolute', left:'20px', top:'75px',}}/> </div>

        <div id="SPName">Name: Billy Bob</div>

        <div id="SPEmail">Email: billybobjoe@gmail</div>

        <div id="SPAge">Age: 23</div>

        <div id="SPAdd">Address:</div>

        <div id="SPAddVal">Doesn't Exist Park Way, Santa Clara County, United States</div>

        <div id="SPEstimate">Estimated Time Arrival:</div>

        <div id="SPEstimateVal">10 minutes</div>

        {/* <div> <button onClick={onClickProceed} id="ProceedButton">Proceed</button> </div> */}

        <div id="Box1"></div>
        <div id="Box2"></div>

        <div> <img src='https://w0.peakpx.com/wallpaper/309/70/HD-wallpaper-nice-view-beach-night.jpg'
        alt = "Map" width="120" height="120" style = {{position:'absolute', left:'25px', top:'410px',}}/> </div>

        <div id="ProdName1">Name: Top Notch pot good smell</div>

        <div id="ProdStrain1">Strain: Indica</div>

        <div id="ProdWeight1">Weight: Quarter</div>

        <div id="ProdPrice1">Price: 20.00</div>

        <div>  <button onClick={button1Handle} id="AddButton1">Add</button> </div>

        <div> <img src='https://images.unsplash.com/photo-1584432743501-7d5c27a39189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmljZSUyMHZpZXd8ZW58MHx8MHx8&w=1000&q=80'
        alt = "Map" width="120" height="120" style = {{position:'absolute', left:'25px', top:'665px',}}/> </div>

        <div id="ProdName2">Name: Top Notch pot good smell</div>

        <div id="ProdStrain2">Strain: Sativa</div>

        <div id="ProdWeight2">Weight: 3 Grams</div>

        <div id="ProdPrice2">Price: 10.00</div>

        <div>  <button onClick={button2Handle} id="AddButton2">Add</button> </div>

    </div>
    
    );
  }