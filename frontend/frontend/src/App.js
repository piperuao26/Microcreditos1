import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Credits from "./pages/credits";
import PrivateRoute from "./components/PrivateRoutes";
import CreateCredit from "./pages/CreateCredit";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";



export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/credits" element={
          <PrivateRoute>
            <Credits/>
          </PrivateRoute>
        }/>
        <Route path="/create-credit" element={
          <PrivateRoute>
            <CreateCredit />
          </PrivateRoute>
        }/>
        <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />

      </Routes>
    </BrowserRouter>
  );
}
