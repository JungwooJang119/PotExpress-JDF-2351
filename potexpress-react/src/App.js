import { useState } from 'react';
import './App.css';
import { Page1 } from './components/Page1'
import { Page2 } from './components/Page2'
import { ErrorPage } from './components/ErrorPage'

const App = () => {
  const [page, setPage] = useState(1);
  // hooks useState and useEffect are my friend
  const [inputName, setName] = useState('');
  const [inputStrain, setStrain] = useState('');
  const [order, setOrder] = useState(0);

  const handleClick = () => {
    if (page == 2) {
      setName('');
      setPage(1);
    } else if (page == 1) {
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
    }
  }

  const Screen = () => {
    if (page == 1) {
      return <Page1 onClickNext={handleClick} addName={setName} addStrain={setStrain}/>
    } else if (page == 2) {
      return <Page2 onClickBack={handleClick} savedName={inputName} savedStrain={inputStrain} orderNum={order}/>
    } else if (page == 3) {
      return <ErrorPage onClickNext={handleClick} addName={setName} addStrain={setStrain}/>
    }
  }

  return (
    <div className="App">
      <Screen />
    </div>
  );
}

export default App;
