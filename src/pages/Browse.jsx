// pages/Browse.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Browse() {
  return (
    <div className="flex flex-col h-screen md:flex-row">

      {/* Filters */}
      <div className="p-6 bg-white shadow-md md:w-1/4">
        <h2 className="mb-4 font-semibold">Filters</h2>
      </div>

      {/* Map */}
      <div className="flex-1">
        <MapContainer 
          center={[11.6085, 125.4310]} 
          zoom={15} 
          className="h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[11.6085, 125.4310]}>
            <Popup>Sample Boarding House</Popup>
          </Marker>
        </MapContainer>
      </div>

    </div>
  );
}