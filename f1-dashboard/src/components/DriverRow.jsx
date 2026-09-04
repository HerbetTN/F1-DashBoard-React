import teamLogos from '../assets/team-logos';
function DriverRow({ driver, onSelect }) {
  return (
    <li className="driver-name" onClick={() => onSelect(driver.Driver.driverId)}>
  <span className="driver-position">{driver.position}</span>
  <img src={teamLogos[driver.Constructors[0].constructorId]} alt={driver.Constructors[0].name} />
  <span className="driver-fullname">{driver.Driver.givenName} {driver.Driver.familyName}</span>
  <span className="driver-points">{driver.points} pts</span>
</li>
  );
}

export default DriverRow;