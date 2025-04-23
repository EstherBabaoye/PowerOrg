import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import Projects from './Pages/Projects';


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
