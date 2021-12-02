import React, {useContext} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LayOut from "./Layout/LayOut";
import { MyFiles } from "./Pages/MyFiles";
import { Home } from './Pages/Home';
import { Index } from "./Pages/Index";
import { SignDoc } from "./Pages/Docs";
import {DataContext} from './Context';
import {Settings} from './Pages/Setting';

function App() {

  const context = useContext(DataContext)

  return (
    <>
    <BrowserRouter>
       {context.Auth 
       ?
       <LayOut>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Docs" element={<SignDoc />} />
          <Route exact path="/MyFile" element={<MyFiles />} />
          <Route exact path="/Settings" element={<Settings />} />
          {/* <Route path="teams" element={<Teams />}>
           <Route path=":teamId" element={<Team />} />
           <Route path="new" element={<NewTeamForm />} />
           <Route index element={<LeagueStandings />} />
          </Route> */}
          </Routes>       
       </LayOut>
       :       
        <Routes>
          <Route exact path="/" element={<Index />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Routes>          
      } 
    </BrowserRouter>
    </>
  );
}

export default App;
