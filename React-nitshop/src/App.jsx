import React, {useState} from 'react';
import './App.css';
import StyledForm from './components/StyledForm/StyledForm';
import CustomDiv from './components/CustomDiv/CustomDiv';

const App = () =>{
  const [fullName, setFullName] = useState('')

  function dataGraber(name,lastName) {
    let fullName = name + ' ' + lastName
    console.log(fullName)
    setFullName(fullName)
  }
  return (
    <div className="App">
      <header className="App-header">
        <CustomDiv>
          <h1>{fullName}</h1>
        </CustomDiv>
        <StyledForm sendData={(name, lastName) => dataGraber(name,lastName)} />
      </header>
    </div>
  );
} 

export default App;
