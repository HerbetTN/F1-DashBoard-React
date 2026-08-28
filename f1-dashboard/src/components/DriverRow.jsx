
function DriverRow({ driver, onSelect }) {
  return (
    <li className="driver-name" onClick={() => onSelect(driver.Driver.driverId)}>
      {driver.position}. {driver.Driver.givenName} {driver.Driver.familyName} — {driver.points} pts
    </li>
  );
}

export default DriverRow;