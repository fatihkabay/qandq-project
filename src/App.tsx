import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Contact from "./pages/Contact";

import Promotion from "./pages/Promotion";
import Home from "./pages/Home";
import OurMission from "./pages/OurMission";

function App() {
  return (
    <div>
      <DefaultLayout>
        <Home />
        <Promotion />
        <OurMission />
      </DefaultLayout>
    </div>
  );
}
export default App;
