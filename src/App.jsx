import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
