import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import RegisterPage from './pages/register/RegisterPage';
import SignInPage from './pages/signin/SignInPage';
import AppLayout from './components/Layout/AppLayout';
import CompletedPage from './pages/completedPage/CompletedPage';
import PendingPage from './pages/pendingPage/PendingPage';

function App() {
  return (
   <Routes>
    <Route path='/' element = {<SignInPage/>}/>
    <Route path='/dashboard' element = {<Dashboard/>}/>
    <Route path='/completed-page' element = {<CompletedPage/>}/>
    <Route path='/pending-page' element = {<PendingPage/>}/>
    <Route path = '/register' element =  {<RegisterPage/>}/>
    <Route path = '/sign-in' element =  {<SignInPage/>}/>
   </Routes>
  );
}

export default App;

