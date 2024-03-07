import { useState } from 'react';
import './App.css';
import Mod from './mod';

function App() {

  const [popup, setPopup] = useState(false);
  const showInp = ()=>{
    setPopup(true);
  }

  return (
    <div className="App">
      <div className='big'>

        <article className='proxx___y___' onClick={showInp}></article>
        
        { popup ? <Mod /> : undefined }

      </div>
      <div className='small'></div>
    </div>
  );
};

export default App;
