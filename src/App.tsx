import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import Dashboard from './pages/Dashboard';
import { lazy, Suspense, useEffect } from "react";
import ThemeProvider from "./contexts/ThemeContext";
import "./styles.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import Login from "./components/Auth/Login";

import { Provider } from "react-redux";
import store from "./redux/store";
import { setUser } from "./redux/userActions";
// import { useSelector } from "react-redux";
// import { RootState } from "./redux/types";

firebase.initializeApp({
  apiKey: "AIzaSyDs_jRyHTppTqs5ttM8jeIqHRiR65ZDCPo",
  authDomain: "credhill-8259f.firebaseapp.com",
  projectId: "credhill-8259f",
  storageBucket: "credhill-8259f.appspot.com",
  messagingSenderId: "943997581042",
  appId: "1:943997581042:web:6bbdfce7c0cf95f17e426b",
  measurementId: "G-8W0FSZ2ZV8",
});
const auth = firebase.auth();

const DashboardPage = lazy(() => import("./pages/DashboardPage"));

const App = () => {
  const [user] = useAuthState(auth as never);

  useEffect(() => {
    if (user) {
      store.dispatch(setUser(user));
    }
  }, [user]);
  return (
    <Provider store={store}>
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
              {user ? (
                <>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/login" element={<Navigate to={"/"} />} />
                </>
              ) : (
                <>
                  <Route path="/login" element={<Login auth={auth} />} />
                  <Route
                    path="/dashboard"
                    element={<Navigate to={"/login"} />}
                  />
                </>
              )}
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
