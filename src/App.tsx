import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import Dashboard from './pages/Dashboard';
import { lazy, Suspense } from "react";
import ThemeProvider from "./contexts/ThemeContext";
import "./styles.css";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Suspense
          fallback={
            <div className="custom-loader-wrapper">
              <div className="custom-loader"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>

    // <LandingPage />
  );
};

export default App;
