import { useState } from 'react';
import './App.css';
import { Page1 } from './components/Page1'
import { Page2 } from './components/Page2'
import { SelectPage } from './components/SelectPage'
//import { ErrorPage } from './components/ErrorPage'

const App = () => {
  const [page, setPage] = useState(1);
  // hooks useState and useEffect are my friend
  const [inputName, setName] = useState('test');
  const [inputStrain, setStrain] = useState('test');
  const [inputAddress, setAddress] = useState('test');
  const [order, setOrder] = useState(0);
  const [stateloc, setstateloc] = useState('');

  const handleClick = () => {
    if (page === 3) {
      setName('');
      setPage(1);
    } else if (page === 1) {
      setOrder(order + 1);
      setPage(2);
    } else if (page === 2) {
      setPage(3);
    }
  }

  function myFunction(){
    handleClick();
}

  function splitAddress(val) {
    var newAddress = "";
    var pieces = val.split(" ");
    for (var i = 0; i < pieces.length; i++) {
        if (i === 0 || i === pieces.length - 1) {
            newAddress = newAddress + pieces[i];
        } else {
            newAddress = newAddress + "+" + pieces[i];
        }
    }
    return newAddress;
}

  const Screen = () => {
    if (page === 1) {
      return <Page1 onClickNext={myFunction} addName={setName} addAddress={setAddress}  addState={setstateloc}/>
    } else if (page === 2) {
      return <SelectPage onClickProceed={handleClick} addStrain={setStrain} addName={inputName}/>
    } else if (page === 3) {
      return <Page2 onClickBack={handleClick} savedName={inputName} savedStrain={inputStrain} orderNum={order} savedAddress={splitAddress(inputAddress)}
      sellerAddress={"225+North+Avenue+Atlanta,+GA+30332"} currentLocation={inputAddress}
      savedState={stateloc}/>
    } 
    
  }

  return (
    <div className="App">
      <Screen />
    </div>
  );
}

export default App;
