
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getConstructorDrivers } from '../api/f1Api';
import teamLogos from '../assets/team-logos';

function TeamDetailPage() {
  const { teamId } = useParams();
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getConstructorDrivers(teamId)
      .then((data) => {
        setDrivers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [teamId]);

  return (
    <div className="page">
      <div className="team-header">
        <img src={teamLogos[teamId]} alt={teamId} />
        <h1>{teamId.replace('_', ' ')}</h1>
      </div>

      {loading && <p className="status-text">Loading team...</p>}
      {error && <p className="status-text">Error: {error}</p>}

      {!loading && !error && (
        <ul className="standings-list">
          {drivers.map((driver) => (
            <li key={driver.driverId} className="driver-name" style={{ cursor: 'default' }}>
              <span className="driver-fullname">{driver.givenName} {driver.familyName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TeamDetailPage;