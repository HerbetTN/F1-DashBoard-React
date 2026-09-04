
import DriverRow from './DriverRow';
import { getConstructorDrivers } from '../api/f1Api';

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