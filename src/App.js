import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LayOut from "./Layout/LayOut";
import { DashBoard } from "./Pages/DashBoard";
import { Home } from './Pages/Home';


function App() {
  return (
    <>
    <BrowserRouter>
      <LayOut>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Dash" element={<DashBoard />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Routes>
      </LayOut>
    </BrowserRouter>
    </>
  );
}

export default App;
