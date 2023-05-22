import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileAvatar from './pages/ProfileAvatar';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/setAvatar" element={<ProfileAvatar />} />
            <Route path="/" element={<Chat />} />
        </Routes>
     
  
    </ BrowserRouter>
  )
}

export default App
