/* eslint-disable eqeqeq */
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import QA from "./pages/QA";
import Home from "./pages/Home";
import QEditor from "./pages/QEditor";
import AppLayout from "./components/layouts/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coding-questions/:language" element={<QA />} />
        <Route path="code/:language" element={<QEditor />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
