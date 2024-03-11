import ThreeDemo from "@/components/pages/ThreeDemo";
import "@styles/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename="/ThreeTesting">
      <Routes>
        <Route path="*" element={<ThreeDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
