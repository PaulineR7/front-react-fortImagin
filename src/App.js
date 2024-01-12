import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BattlePassPage from './pages/BattlePassPage';
import CreateAnAccountPage from './pages/CreateAnAccountPage';
import LoginPage from './pages/LoginPage';
import CreateBattlePassPage from './pages/CreateBattlePassPage';
import BattlePassDetailPage from './pages/BattlePassDetailPage';
import MyBattlePassPage from './pages/MyBattlePassPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/battlepass' element={<BattlePassPage />} />
        <Route path='/accountcreate' element={<CreateAnAccountPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/createbattlepass' element={<CreateBattlePassPage />} />
        <Route path='/battlepassdetails/:id' element={<BattlePassDetailPage />} />
        <Route path='/mybattlepass/:pseudo' element={<MyBattlePassPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
