import React, { useState } from 'react';
import './Page1.css'
import logo from "./Green-2.jpeg"
import Axios from 'axios'

export const Page1 = ({onClickNext, addName, addAddress, addState}) => { 

    const [inputName, setName] = useState('test');
    const [inputAddress, setAddress] = useState('test');
    const [orderList, setOrderList] = useState([]);

    function textFunction() {
        addName(document.getElementById("nameBox").value);
        addState(document.getElementById("stateBox").value);
        addAddress(document.getElementById("addressBox").value);
        onClickNext();
    }
    const createOrder = () => {
        Axios.post('http://localhost:3001/api/insert', 
        {inputName: document.getElementById("nameBox").value, inputAddress: 
        document.getElementById("addressBox").value});
        setOrderList([...orderList, {inputName: document.getElementById("nameBox").value, 
        inputAddress: document.getElementById("addressBox").value}]);
      };
    
      function myFunction(){
        textFunction();
        createOrder();
    }

    return (
        <div>

            <div> 
                <img src = {logo} alt = "Logo 1" style = {{position:'absolute', top:'85px', right:'20px'}}
        width = "100" height = "100"/>
            <div id="mainText">PotExpress</div>
            </div>

            <div> <img src = "https://static.vecteezy.com/system/resources/previews/005/632/792/original/illustration-line-drawing-a-image-of-two-businessmen-shaking-hands-businessperson-negotiations-or-join-business-are-illustrated-by-a-close-handshake-between-two-hand-men-isolated-on-white-background-free-vector.jpg"
            alt = "Logo 2" style = {{position:'relative', top:'625px', alignSelf: 'center'}}
            width = "350px" height = "250px"/> </div>

            <div> <button onClick={myFunction} id="nextButton">Select Order</button> </div>

            <div> 
                <div id="name">Name</div>
                <div> <input  id= "nameBox" className="Page1" type="text" placeholder="Enter Name"/> </div>
            </div>

            <div>
                <div id="address">Address</div>
                <div> <input  id= "addressBox" className="Page1" type="text" placeholder="Enter Address" /> </div>
            </div>

            <div>
                <div id="stateLoc">State</div>

                <div> 
                    <select  id="stateBox">
                        <option value="AL">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="IL">Illinois</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NV">Nevada</option>
                        <option value="OR">Oregon</option>
                        <option value="RI">Rhode Island</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                    </select>
                </div>
            </div>

        </div>
        );
  }