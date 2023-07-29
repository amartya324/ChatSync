//import logo from './logo.svg';
import "./App.css";
import "./style.scss";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { currentUser } = useContext(AuthContext);

  /* Intializing this function to access differnt pages while checking if the user is login or not */
  const ProtectedRoute = (
    { children } //Home will pass as children
  ) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home /> {/* We are Passing this as Children  */}
              </ProtectedRoute>
            }
          />

          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
