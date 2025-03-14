import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/PAGE_1/PAGE_1";
import VIEW_RANGE from './pages/VIEW_RANGE/VIEW_RANGE';
import GAME_PLAY_PAGE1 from './pages/PagePlayGame/playgamepage1/playgame';
import CircleClickGame from './pages/PagePlayGame/CircleClickGame/CircleClickGame';
import GameOverPage from './pages/PagePlayGame/pageAfterGame/pageAfterGame';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="viewRange" element={<VIEW_RANGE />} />
          <Route path="miniGame" element={<GAME_PLAY_PAGE1 />} />
          <Route path="play" element={<CircleClickGame />} />
          <Route path="game-over" element={<GameOverPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;