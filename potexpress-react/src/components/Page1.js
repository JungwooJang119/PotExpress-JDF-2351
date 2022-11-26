import React from 'react';
import './Page1.css'

export const Page1 = ({onClickNext, addName, addStrain}) => { 

    function textFunction() {
        addName(document.getElementById("nameBox").value);
        addStrain(document.getElementById("strainBox").value);
        onClickNext();
    }

    return (
        <div>
            <div id="mainText">PotExpress</div>
            <div> <button onClick={textFunction} id="nextButton">Next</button> </div>

            <div> 
                <div id="name">Name</div>
                <div> <input  id= "nameBox" className="Page1" type="text" placeholder="Enter Name"/> </div>
            </div>

            <div>
                <div id="address">Address</div>
                <div> <input  id= "addressBox" className="Page1" type="text" placeholder="Enter Address" /> </div>
            </div>

            <div>
                <div id="strain">Strain</div>

                <div> 
                    <select  id="strainBox">
                        <option value="Indica">Indica</option>
                        <option value="Sativa">Sativa</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
            </div>

        </div>
        );
  }