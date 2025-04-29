import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import ScrollToTop from './Components/ScrollToTop';
import ForgotPassword from './Pages/ForgotPassword';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
