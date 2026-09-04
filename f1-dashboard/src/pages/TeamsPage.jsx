
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getConstructorStandings } from '../api/f1Api';
import teamLogos from '../assets/team-logos';

function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getConstructorStandings()
      .then((data) => {
        setTeams(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <h1>Teams</h1>

      {loading && <p className="status-text">Loading teams...</p>}
      {error && <p className="status-text">Error: {error}</p>}

      {!loading && !error && (
        <ul className="team-list">
          {teams.map((team) => (
            <li key={team.Constructor.constructorId}>
              <Link to={`/teams/${team.Constructor.constructorId}`}>
                <img src={teamLogos[team.Constructor.constructorId]} alt={team.Constructor.name} />
                <span className="driver-fullname">{team.Constructor.name}</span>
                <span className="driver-points">{team.points} pts</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TeamsPage;