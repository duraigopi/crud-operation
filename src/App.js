import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import Reports from './Reports'
import UpdateData from './UpdateData';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/report' element={<Reports/>}/>
          <Route path='edit' element={<UpdateData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
