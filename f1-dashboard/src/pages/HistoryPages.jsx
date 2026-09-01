// src/pages/HistoryPage.jsx
import { useState, useEffect } from 'react';
import { getSeasonWinners } from '../api/f1api';

function HistoryPage() {
  const [year, setYear] = useState(2024);
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getSeasonWinners(year)
      .then((data) => {
        setRaces(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [year]);

  if (loading) return <p>Loading {year} season...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Season Winners</h1>
      <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
        {Array.from({ length: 2024 - 1950 + 1 }, (_, i) => 2024 - i).map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
      <ul>
        {races.map((race) => (
          <li key={race.round}>
            Round {race.round} — {race.raceName}: {race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPage;