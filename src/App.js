import React from 'react';
import './App.css';
import PatientManage from './Components/PatientManage/PatientManage';

import Reducer from './Components/Reducer/Reducer';

function App() {
  return (
    <div className="App">
      <Reducer/>
     <PatientManage/>
    </div>
  );
}

export default App;
