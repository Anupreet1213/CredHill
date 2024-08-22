import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
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
// import { auth } from "./firebase";
// import { useSelector } from "react-redux";
// import { RootState } from "./redux/types";

firebase.initializeApp({
  apiKey: "AIzaSyD6UsKzmhANTmjGBIHWIIeSy_XgcpOY3Ks",
  authDomain: "credhill-ff167.firebaseapp.com",
  projectId: "credhill-ff167",
  storageBucket: "credhill-ff167.appspot.com",
  messagingSenderId: "198235292628",
  appId: "1:198235292628:web:dfd7bc608227d7036a8c41",
  measurementId: "G-8Q2EJ6XM0Y",
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="custom-loader-wrapper">
              <div className="custom-loader"></div>
            </div>
          }
        >
          <LandingPage />
        </Suspense>
      ),
    },
    {
      path: "/dashboard",
      element: user ? (
        <Suspense
          fallback={
            <div className="custom-loader-wrapper">
              <div className="custom-loader"></div>
            </div>
          }
        >
          <DashboardPage />
        </Suspense>
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login auth={auth} />,
    },
  ]);
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
