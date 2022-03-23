import { Routes, Navigate, Route, Outlet } from "react-router-dom";
import {
  Users,
  Simulations,
  Home,
  Signin,
  Charts,
  NotFound,
  Tableaux,
} from "./pages";
import Layout from "./components/Layout";
import { blueGrey } from "@mui/material/colors";

function ProtectedRoutes() {
  const isAuth = localStorage.getItem("access");
  return isAuth ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/signin" />
  );
}

const App = () => {
  document.body.style.background = "#f1f1f1";
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/simulations" element={<Simulations />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/tableaux" element={<Tableaux />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
