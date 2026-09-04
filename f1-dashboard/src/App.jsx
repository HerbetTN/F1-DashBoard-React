import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPages';
import Navbar from './components/NavBar';
import TeamsPage from './pages/TeamsPage';
import TeamDetailPage from './pages/TeamDetailPage';


function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/history" element={<HistoryPage />} />
   
<Route path="/teams" element={<TeamsPage />} />
<Route path="/teams/:teamId" element={<TeamDetailPage />} />
    </Routes>
    </div>
  );
}

export default App;