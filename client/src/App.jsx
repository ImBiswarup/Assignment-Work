import './App.css';
import { Routes, Route } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Onboarding2 from './components/Onboarding2';
import Navbar from './components/utils/Navbar';
import Onboarding3 from './components/Onboarding3';
import Footer from './components/utils/Footer';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/onboarding3" element={<Onboarding3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
