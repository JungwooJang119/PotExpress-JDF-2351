import React from 'react';
import './Page2.css'

export const Page2 = ({onClickBack, savedName, savedStrain, orderNum}) => { 
    return (
    <div>

        <div> <img src='https://s1.cdn.autoevolution.com/images/news/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg'
        alt = "Map" width="414" height="500"/> </div>

        <div> <button onClick={onClickBack} id="backButton">Cancel Order</button> </div>

        <div id="orderNum">Order Number: {orderNum}</div>

        <div id="strain2">Strain: {savedStrain}</div>

        <div id="name2">Name: {savedName}</div>

    </div>
    
    );
  }