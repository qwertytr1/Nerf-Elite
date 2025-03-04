import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/PAGE_1/PAGE_1";
import VIEW_RANGE from './pages/VIEW_RANGE/VIEW_RANGE';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="viewRange" element={<VIEW_RANGE/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;