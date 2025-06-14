import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ScrollToTop from "./Components/ScrollToTop";
import ForgotPassword from "./Pages/ForgotPassword";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Service from "./Pages/Service";
import CheckEmail from "./Pages/CheckEmail";
import ResetPassword from "./Pages/ResetPassword";
import VerifyEmail from "./Pages/VerifyEmail";
import ResendVerification from "./Pages/ResendVerification";
import ErrorBoundary from "./Components/ErrorBoundary"; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />
        <Route
          path="/about-us"
          element={
            <ErrorBoundary>
              <AboutUs />
            </ErrorBoundary>
          }
        />
        <Route
          path="/projects"
          element={
            <ErrorBoundary>
              <Projects />
            </ErrorBoundary>
          }
        />
        <Route
          path="/sign-in"
          element={
            <ErrorBoundary>
              <SignIn />
            </ErrorBoundary>
          }
        />
        <Route
          path="/sign-up"
          element={
            <ErrorBoundary>
              <SignUp />
            </ErrorBoundary>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ErrorBoundary>
              <ForgotPassword />
            </ErrorBoundary>
          }
        />
        <Route
          path="/contact"
          element={
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          }
        />
        <Route
          path="/product"
          element={
            <ErrorBoundary>
              <Product />
            </ErrorBoundary>
          }
        />
        <Route
          path="/check-email"
          element={
            <ErrorBoundary>
              <CheckEmail />
            </ErrorBoundary>
          }
        />
        <Route
          path="/reset-password"
          element={
            <ErrorBoundary>
              <ResetPassword />
            </ErrorBoundary>
          }
        />
        <Route
          path="/service"
          element={
            <ErrorBoundary>
              <Service />
            </ErrorBoundary>
          }
        />
        <Route
          path="/verify-email"
          element={
            <ErrorBoundary>
              <VerifyEmail />
            </ErrorBoundary>
          }
        />
        <Route
          path="/resend-verification"
          element={
            <ErrorBoundary>
              <ResendVerification />
            </ErrorBoundary>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
