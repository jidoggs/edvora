import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Nearest from "./pages/Nearest";
import Past from "./pages/Past";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Nearest />} />
        <Route path="/upcomming_rides" element={<Upcoming />} />
        <Route path="/past_rides" element={<Past />} />
      </Route>
    </Routes>
  );
}

export default App;
