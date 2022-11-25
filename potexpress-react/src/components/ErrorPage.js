import React from 'react';
import './ErrorPage.css'

export const ErrorPage = ({onClickNext, addName, addStrain}) => { 

    function textFunction() {
        addName(document.getElementById("nameBox2").value);
        addStrain(document.getElementById("strainBox2").value);
        onClickNext();
    }

    return (
        <div>
            <div id="mainText2">PotExpress</div>
            <div> <button onClick={textFunction} id="nextButton2">Next</button> </div>

            <div> 
                <div id="name3">Name</div>
                <div> <input  id= "nameBox2" className="Page1" type="text" placeholder="Enter Name"/> </div>
            </div>

            <div>
                <div id="address2">Address</div>
                <div> <input  id= "addressBox2" className="Page1" type="text" placeholder="Enter Address" /> </div>
            </div>

            <div>
                <div id="strain3">Strain</div>

                <div> 
                    <select  id="strainBox2">
                        <option value="Indica">Indica</option>
                        <option value="Sativa">Sativa</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
            </div>

        </div>
        );
  }