// src/components/StandingsTable.jsx
import DriverRow from './DriverRow';

function StandingsTable({ standings, onSelectDriver }) {
  return (
    <ul>
      {standings.map((driver) => (
        <DriverRow
          key={driver.Driver.driverId}
          driver={driver}
          onSelect={onSelectDriver}
        />
      ))}
    </ul>
  );
}

export default StandingsTable;