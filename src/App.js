
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Registration from './pages/cadastro';
import Habits from './pages/habitos';
import Login from './pages/login';
import { LoginContext } from './context/loginContext';
import { useState } from 'react';
import axios from 'axios';



function App() {

  
  const [apiForm , setApiForm] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: ""
});



  return (
    <LoginContext.Provider value={{apiForm}}>
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
        




      </Routes>
    </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
