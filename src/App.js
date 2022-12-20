
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Registration from './pages/cadastro';
import Habits from './pages/habitos';
import Login from './pages/login';
import { LoginContext } from './context/loginContext';
import { useState } from 'react';
import axios from 'axios';
import Historic from './pages/historico';
import Today from './pages/today';



function App() {

  const [percentValue , setPercentValue] = useState(0)
  const [apiForm , setApiForm] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: ""
});



  return (
    <LoginContext.Provider value={{apiForm,percentObj,setPercentObj}}>
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        
          <Route path='/' element={<Login 
          setForm={setForm}
          form={form}
          setApiForm={setApiForm}
           />}/>
          <Route path='/cadastro' element={<Registration/>}/>
          <Route path='/habitos' element={<Habits/>}/>
          <Route path='/hoje' element={<Today/>}/>
          <Route path='/historico' element={<Historic/>}/>

      </Routes>
    </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
