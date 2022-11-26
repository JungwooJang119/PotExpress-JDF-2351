import { useState } from 'react';
import './App.css';
import { Page1 } from './components/Page1'
import { Page2 } from './components/Page2'
import { SelectPage } from './components/SelectPage'
//import { ErrorPage } from './components/ErrorPage'

const App = () => {
  const [page, setPage] = useState(1);
  // hooks useState and useEffect are my friend
  const [inputName, setName] = useState('');
  const [inputStrain, setStrain] = useState('');
  const [inputAddress, setAddress] = useState('');
  const [order, setOrder] = useState(0);
  const [stateloc, setstateloc] = useState('');

  const handleClick = () => {
    if (page === 3) {
      setName('');
      setPage(1);
    } else if (page === 1) {
      /*
      if (!inputName) {
        setPage(3);
      } else {
        setOrder(order + 1);
        setPage(2);
      }
      */
      setOrder(order + 1);
      setPage(2);
    } else if (page === 2) {
      setPage(3);
    }
  }

  const Screen = () => {
    if (page === 1) {
      return <Page1 onClickNext={handleClick} addName={setName} addAddress={setAddress}  addState={setstateloc}/>
    } else if (page === 2) {
      return <SelectPage onClickProceed={handleClick} addStrain={setStrain}/>
    } else if (page === 3) {
      return <Page2 onClickBack={handleClick} savedName={inputName} savedStrain={inputStrain} orderNum={order} savedAddress={inputAddress}
      savedState={stateloc}/>
    } 
    
    /*
    else if (page === 3) {
      return <ErrorPage onClickNext={handleClick} addName={setName} addStrain={setStrain} addAddress={setAddress}
      savedName={inputName} savedAddress={inputAddress}/>
    }
    */
  }

  return (
    <div className="App">
      <Screen />
    </div>
  );
}

export default App;
