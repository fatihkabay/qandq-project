import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <DefaultLayout><Home /><About /></DefaultLayout>
    </div>
  );
}
export default App;
