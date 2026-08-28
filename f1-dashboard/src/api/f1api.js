export async function getDriverStandings() {
  const res = await fetch('https://api.jolpi.ca/ergast/f1/current/driverStandings.json');
  const data = await res.json();
  return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}