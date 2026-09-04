import { useState, useEffect, useMemo } from "react";
import { getDriverStandings } from "../api/f1Api.js";
import StandingsTable from "../components/StandingsTable.jsx";
import teamLogos from "../assets/team-logos";
function HomePage() {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDriverId, setSelectedDriverId] = useState(null);
  const selectedDriver = standings.find(
    (d) => d.Driver.driverId === selectedDriverId,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const filteredStandings = useMemo(() => {
    return standings.filter((driver) =>
      `${driver.Driver.givenName} ${driver.Driver.familyName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
  }, [standings, searchTerm]);

  useEffect(() => {
    getDriverStandings()
      .then((list) => {
        setStandings(list);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading standings...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>F1 Standings</h1>
      <input
        type="text"
        className="search-input"

        placeholder="Search drivers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <StandingsTable
        standings={filteredStandings}
        onSelectDriver={setSelectedDriverId}
      />
      {selectedDriver && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedDriverId(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedDriverId(null)}>×</button>
            <img
              src={teamLogos[selectedDriver.Constructors[0].constructorId]}
              alt={selectedDriver.Constructors[0].name}
              width={48}
            />
            <h2>
              {selectedDriver.Driver.givenName}{" "}
              {selectedDriver.Driver.familyName}
            </h2>
            <p>Team: {selectedDriver.Constructors[0].name}</p>
            <p>Points: {selectedDriver.points}</p>
            <p>Wins: {selectedDriver.wins}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
