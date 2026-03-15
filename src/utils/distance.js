const ESSU_LAT = 11.659633748282928;
const ESSU_LNG = 125.44316608609613;

export function getDistanceFromESSU(lat, lng) {

  if (!lat || !lng) return null;

  const R = 6371;

  const dLat = (lat - ESSU_LAT) * Math.PI / 180;
  const dLng = (lng - ESSU_LNG) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(ESSU_LAT * Math.PI / 180) *
    Math.cos(lat * Math.PI / 180) *
    Math.sin(dLng / 2) *
    Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return (R * c).toFixed(1);
}