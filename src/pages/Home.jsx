import { useEffect, useState } from "react";
import L from "leaflet";
import { useMapEvents } from "react-leaflet";

import HeroSection from "../components/home/HeroSection";
import FeaturedSection from "../components/home/FeaturedSection";
import ListMapSection from "../components/home/ListMapSection";
import InfoSection from "../components/home/InfoSection";
import StatsSection from "../components/home/StatsSection";
import CtaSection from "../components/home/CtaSection";

export default function Home() {

  const [zoom, setZoom] = useState(15);
  const [listings, setListings] = useState([]);


  // ================= FETCH =================

  useEffect(() => {
    fetch("http://localhost/dormlinkborongan/php/getListings.php")
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.log(err));
  }, []);



  // ================= ICON =================

  const markerIcon = (price, title, zoom) =>
    L.divIcon({
      className: "",
      iconSize: [120, 40],
      iconAnchor: [14, 28],
      html: `
        <div style="display:flex;align-items:center;gap:4px">

          <img src="/house.png"
            style="width:28px;height:28px"
          />

          ${
            zoom >= 16
              ? `<div style="
                  background:white;
                  padding:2px 6px;
                  border-radius:6px;
                  font-size:12px;
                  font-weight:600;
                  box-shadow:0 2px 4px rgba(0,0,0,0.2);
                ">
                  ${title} ₱${price}
                </div>`
              : ""
          }

        </div>
      `,
    });



  // ================= MAP EVENTS =================

  function MapEvents({ setZoom }) {
    useMapEvents({
      zoomend(e) {
        setZoom(e.target.getZoom());
      },
    });
    return null;
  }



  // ================= RETURN =================

  return (
    <div className="bg-white">

      <HeroSection
        listings={listings}
        zoom={zoom}
        setZoom={setZoom}
        markerIcon={markerIcon}
        MapEvents={MapEvents}
      />

      <FeaturedSection listings={listings} />

      <ListMapSection
        listings={listings}
        zoom={zoom}
        setZoom={setZoom}
        markerIcon={markerIcon}
        MapEvents={MapEvents}
      />

      <InfoSection />

      <StatsSection />

      <CtaSection />

    </div>
  );
}