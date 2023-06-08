import {Routes, Route} from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPass from './components/ForgotPass';
import ResetPassword from './components/ResetPassword';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/forgotpass' element={<ForgotPass/>} />
      <Route path='/reset-password/:id/:token' element={<ResetPassword/>} />
    </Routes>
  );
}

export default App;
