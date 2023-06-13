import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Contact from "./pages/Contact";
import Promotion from "./pages/Promotion";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <DefaultLayout>
        <Home />
        <Promotion />
      </DefaultLayout>
    </div>
  );
}
export default App;
