// pages/Browse.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Browse() {
  return (
    <div className="flex flex-col md:flex-row h-screen">

      {/* Filters */}
      <div className="md:w-1/4 p-6 bg-white shadow-md">
        <h2 className="font-semibold mb-4">Filters</h2>
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