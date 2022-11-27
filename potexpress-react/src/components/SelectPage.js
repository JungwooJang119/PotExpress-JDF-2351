import React from 'react';
import './SelectPage.css'

export const SelectPage = ({onClickProceed, addStrain, onClickBack}) => { 

    function button1Handle() {
        addStrain("Indica");
        onClickProceed();
    }

    function button2Handle() {
        addStrain("Sativa");
        onClickProceed();
    }

    function button3Handle() {
        addStrain("Hybrid");
        onClickProceed();
    }

    function backButtonHandle() {
        onClickBack();
    }

    return (
    <div>

        <div id="SPTitle">Select Strain</div>

         {/* <div>  <button onClick={backButtonHandle}> 
        <img src='https://cdn1.iconfinder.com/data/icons/arrows-4/512/arrow_6-512.png'
        alt = "Map" width="50px" height="50px" style = {{position:'absolute', left:'25px', top:'10px'}}/>
        </button> </div>  */}

        <div>
        <button onClick={backButtonHandle} id="prevPageButton">Back</button>
        </div>

        <div> <img src='https://c8.alamy.com/comp/C2THCY/coconuts-palm-tree-perspective-view-from-floor-high-up-C2THCY.jpg'
        alt = "Map" width="100" height="130" style = {{position:'absolute', left:'20px', top:'75px',}}/> </div>

        <div id="SPName">Name: Billy Bob</div>

        <div id="SPEmail">Email: billybobjoe@gmail</div>

        <div id="SPAge">Age: 23</div>

        <div id="SPAdd">Address:</div>

        <div id="SPAddVal">225 North Avenue NW, Atlanta, GA</div>

        <div id="SPEstimate">Estimated Time Arrival:</div>

        <div id="SPEstimateVal">10 minutes</div>

        {/* <div> <button onClick={onClickProceed} id="ProceedButton">Proceed</button> </div> */}

        <div id="Box1"></div>
        <div id="Box2"></div>
        <div id="Box3"></div>
        <div id="Box4"></div>

        <div> <img src='https://w0.peakpx.com/wallpaper/309/70/HD-wallpaper-nice-view-beach-night.jpg'
        alt = "Map" width="120" height="120" style = {{position:'absolute', left:'25px', top:'410px',}}/> </div>

        <div id="ProdName1">Name: Top Notch pot good smell</div>

        <div id="ProdStrain1">Strain: Indica</div>

        <div id="ProdWeight1">Weight: Quarter</div>

        <div id="ProdPrice1">Price: 20.00</div>

        <div>  <button onClick={button1Handle} id="AddButton1">Place Order</button> </div>

        <div> <img src='https://images.unsplash.com/photo-1584432743501-7d5c27a39189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmljZSUyMHZpZXd8ZW58MHx8MHx8&w=1000&q=80'
        alt = "Map" width="120" height="120" style = {{position:'absolute', left:'25px', top:'665px',}}/> </div>

        <div id="ProdName2">Name: Top Notch pot good smell</div>

        <div id="ProdStrain2">Strain: Sativa</div>

        <div id="ProdWeight2">Weight: 3 Grams</div>

        <div id="ProdPrice2">Price: 10.00</div>

        <div>  <button onClick={button2Handle} id="AddButton2">Place Order</button> </div>


        <div> <img src='https://cache.desktopnexus.com/thumbseg/144/144368-bigthumbnail.jpg'
        alt = "Map" width="120" height="120" style = {{position:'absolute', left:'25px', top:'920px',}}/> </div>

        <div id="ProdName3">Name: Top Notch pot good smell</div>

        <div id="ProdStrain3">Strain: Hybrid</div>

        <div id="ProdWeight3">Weight: 3 Grams</div>

        <div id="ProdPrice3">Price: 15.00</div>

        <div>  <button onClick={button3Handle} id="AddButton3">Place Order</button> </div>

        <div> <img src='http://images.all-free-download.com/images/graphiclarge/beautiful_nature_landscape_05_hd_picture_166223.jpg'
        alt = "Map" width="120" height="120" style = {{position:'absolute', left:'25px', top:'1175px',}}/> </div>

        <div id="ProdName4">Name: Top Notch pot good smell</div>

        <div id="ProdStrain4">Strain: Hybrid</div>

        <div id="ProdWeight4">Weight: Quarter</div>

        <div id="ProdPrice4">Price: 30.00</div>

        <div>  <button onClick={button3Handle} id="AddButton4">Place Order</button> </div>

    </div>
    
    );
  }