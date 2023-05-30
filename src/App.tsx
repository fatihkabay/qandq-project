import { Route, Routes } from "react-router";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
    <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />
    </Routes>
    </div>
  );
}
export default App;
