import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomePage from './pages/account/HomePage';
import UsersPage from './pages/account/UsersPage';
import ChangeEmail from './pages/account/ChangeEmail';
import ChangePassword from './pages/account/ChangePassword';
import UpdateProfile from './pages/account/UpdateProfile';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
       <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/profile" element={<UsersPage />} />
        <Route exact path="/change-email" element={<ChangeEmail />} />
        <Route exact path='/change-password' element={<ChangePassword />} />
        <Route exact path='/update-profile' element={<UpdateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
