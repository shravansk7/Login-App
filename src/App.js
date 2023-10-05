import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignUpSuccess from './components/SignUpSuccess';
import LoginSuccess from './components/LoginSuccess';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signupsuccess' element={<SignUpSuccess />} />
        <Route path='/login' element={<Login />} />
        <Route path='/loginSuccess' element={<LoginSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
