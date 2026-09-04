import { useState, useEffect } from 'react';
import { getSeasonWinners, getDriverStandingsByYear } from '../api/f1Api';

function HistoryPage() {
  const [year, setYear] = useState(2024);
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [champion, setChampion] = useState(null);

  useEffect(() => {
    setLoading(true);
     Promise.all([getSeasonWinners(year), getDriverStandingsByYear(year)])
      .then(([raceData, standingsData]) => {
        setRaces(raceData);
        setChampion(standingsData[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [year]);

  return (
       <div className="page">
      <h1>Season Winners</h1>
      <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
        {Array.from({ length: 2024 - 1950 + 1 }, (_, i) => 2024 - i).map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

      {loading && <p className="status-text">Loading {year} season...</p>}
      {error && <p className="status-text">Error: {error}</p>}

      {!loading && !error && (
        <>
          {champion && (
            <div className="champion-card">
              <span className="champion-label">{year} Champion</span>
              <h2>{champion.Driver.givenName} {champion.Driver.familyName}</h2>
              <span className="champion-team">{champion.Constructors[0].name} — {champion.points} pts</span>
            </div>
          )}

          <ul className="standings-list">
            {races.map((race) => (
              <li key={race.round} className="race-row">
                <span className="driver-position">{race.round}</span>
                <span className="driver-fullname">{race.raceName}</span>
                <span className="race-winner">
                  {race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}
                  <span className="race-team">{race.Results[0].Constructor.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>

  );
}

export default HistoryPage;