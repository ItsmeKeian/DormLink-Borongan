import ListingCard from "../ListingCard";

export default function FeaturedSection({ listings }) {

  const ESSU_LAT = 11.659633748282928;
  const ESSU_LNG = 125.44316608609613;


  function getDistance(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (R * c).toFixed(1);
  }


  return (
    <section className="px-8 py-24 min-h-screen bg-gray-200 lg:px-20">

      <h2 className="mb-10 text-3xl font-bold text-blue-900">
        Featured Boarding Houses
      </h2>


      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">


        {listings
          .slice(0, 8)
          .map(dorm => {

            const lat = Number(dorm.latitude);
            const lng = Number(dorm.longitude);

            if (!lat || !lng) return null;

            const distance = getDistance(
              ESSU_LAT,
              ESSU_LNG,
              lat,
              lng
            );

            return (

              <ListingCard
                key={dorm.id}
                listing={{
                  id: dorm.id,
                  title: dorm.title,
                  price: dorm.price,
                  distance: distance,
                  status: dorm.status,
                  image: dorm.image,
                }}
              />

            );

          })}


      </div>

    </section>
  );
}