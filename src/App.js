import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Index";
import Header from "./Components/Header";

// ------------------------STYLES-----------------

import "./Styles/responsive.css";
import "./Styles/measurement.css";
import "./Styles/colors.css";
import "./Styles/Components/header.css";
import "./Styles/Components/home.css";
import "./Styles/Components/quicklink.css";
import "./Styles/Components/card.css";
import "./Styles/Components/single.css";
import "./Styles/Components/cricketSingleMatch.css";
import { SingleGameCard } from "./Components/Heighlights";
import SingleGame from "./Pages/SingleGame";
import CricketSingleMatch from "./Pages/SingleGame/CricketSingleMatch";
import InPlaySingleGame from "./Components/Controler/InPlayControler";
import PageCover from "./Components/PageCover";
import InPlayGame from "./Pages/InplayGame";
import { MatchByCompetition } from "./Pages/MatchByCompetition/MatchByCompetition";
import MatchByCompetitionIndex from "./Pages/MatchByCompetition";
import CompetitionByGame from "./Pages/CompetitionByGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/game" element={<SingleGame />}></Route>
          <Route path="/in-play" element={<InPlayGame />}></Route>
          <Route
            path="/all-competition-by-sports/:sport"
            element={<CompetitionByGame />}
          ></Route>
          <Route
            path="/match-by-competition/sport/:game/:league/:id"
            element={<MatchByCompetitionIndex />}
          ></Route>
          <Route
            path="/cricket-single"
            element={<CricketSingleMatch />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
