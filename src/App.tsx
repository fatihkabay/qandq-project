import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <DefaultLayout><Home /></DefaultLayout>
    </div>
  );
}
export default App;
