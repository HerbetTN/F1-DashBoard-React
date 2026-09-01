import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;