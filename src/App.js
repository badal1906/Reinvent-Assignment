import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useGetUsersQuery } from "./Redux/Api/ApiSlice";
import { Suspense, lazy } from "react";
import { selectToken } from "./Redux/Users/UsersSlice";
import { useSelector } from "react-redux";
import Dashboard from "./Components/Dashboard/Dashboard";

const Login = lazy(() => import("./Components/Login/Login"));
const Signup = lazy(() => import("./Components/Signup/Signup"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<RouteAcces />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

const RouteAcces = () => {
  const token = useSelector(selectToken);

  return token ? <Dashboard /> : <Navigate replace to="/login" />;
};

export default App;
