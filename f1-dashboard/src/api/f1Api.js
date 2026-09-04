export async function getDriverStandings() {
  const res = await fetch('https://api.jolpi.ca/ergast/f1/current/driverStandings.json');
  const data = await res.json();
  return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}

export async function getSeasonWinners(year) {
  const res = await fetch(`https://api.jolpi.ca/ergast/f1/${year}/results/1.json`);
  const data = await res.json();
  return data.MRData.RaceTable.Races;
}

export async function getConstructorStandings() {
  const res = await fetch('https://api.jolpi.ca/ergast/f1/current/constructorStandings.json');
  const data = await res.json();
  return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
}

export async function getConstructorDrivers(constructorId) {
  const res = await fetch(`https://api.jolpi.ca/ergast/f1/current/constructors/${constructorId}/drivers.json`);
  const data = await res.json();
  return data.MRData.DriverTable.Drivers;
}

export async function getDriverStandingsByYear(year) {
  const res = await fetch(`https://api.jolpi.ca/ergast/f1/${year}/driverStandings.json`);
  const data = await res.json();
  return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}