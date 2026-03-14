import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";


export default function AddDorm() {


  const [description, setDescription] = useState("");
  

 
  const [available, setAvailable] = useState("");

  const [gender, setGender] = useState("Mixed");

  const [wifi, setWifi] = useState(false);
  const [aircon, setAircon] = useState(false);
  const [cr, setCr] = useState(false);
  const [parking, setParking] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("");
  const [address, setAddress] = useState("");

  const [owner, setOwner] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Dorm");

  const [image, setImage] = useState([]);


  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  


function LocationMarker() {

  useMapEvents({
    click(e) {
      setLat(e.latlng.lat);
      setLng(e.latlng.lng);
    },
  });

  if (lat === null || lng === null) return null;

  return (
    <Marker
      position={[lat, lng]}
      draggable={true}
      eventHandlers={{
        dragend: (e) => {
          const marker = e.target;
          const pos = marker.getLatLng();

          setLat(pos.lat);
          setLng(pos.lng);
        },
      }}
    />
  );
}



const handleSubmit = async (e) => {
  e.preventDefault();

  if (lat === null || lng === null) {
    alert("Please select location on map first");
    return;
  }

  
    const formData = new FormData();
  
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("rooms", rooms);
  
  
    formData.append("available", available);
    formData.append("gender", gender);
  
    formData.append("owner", owner);
    formData.append("contact", contact);
    formData.append("email", email);
  
    formData.append("address", address);
    formData.append("lat", lat);
    formData.append("lng", lng);
  
    formData.append("description", description);
  
    // ✅ convert boolean to 1/0
    formData.append("wifi", wifi ? 1 : 0);
    formData.append("aircon", aircon ? 1 : 0);
    formData.append("cr", cr ? 1 : 0);
    formData.append("parking", parking ? 1 : 0);
  
    for (let i = 0; i < image.length; i++) {
      formData.append("images[]", image[i]);
    }
  
    try {
     
      await fetch(
        "http://localhost/dormlinkborongan/php/check_session.php",
        {
          credentials: "include",
        }
      )
        .then(res => res.json())
        .then(data => console.log("SESSION:", data));
  
      const res = await fetch(
        "http://localhost/dormlinkborongan/php/add_listing.php",
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );
  
      const data = await res.json();
  
      console.log(data);
  
      if (data.status === "success") {
        alert("Dorm saved!");
        window.location.reload();
      } else {
        alert("Error: " + data.message);
      }
  
    } catch (err) {
      console.log(err);
      alert("Request failed");
    }
  };


  return (

    <div className="p-6">
  
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
  
        {/* LEFT FORM */}
        <div className="p-6 bg-white rounded-2xl shadow">
  
          <h1 className="mb-6 text-2xl font-semibold">
            Add Dorm
          </h1>
  
  
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
  
            <div className="grid grid-cols-2 gap-4">
  
              <div>
                <label>Dorm Name</label>
                <input
                  className="px-3 py-2 w-full rounded-lg border"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
  
              <div>
                <label>Category</label>
                <select
                  className="px-3 py-2 w-full rounded-lg border"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Dorm</option>
                  <option>Boarding House</option>
                  <option>Apartment</option>
                  <option>Bedspace</option>
                </select>
              </div>
  
              <div>
                <label>Price / month</label>
                <input
                  type="number"
                  className="px-3 py-2 w-full rounded-lg border"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
  
              <div>
                <label>Total Rooms</label>
                <input
                  type="number"
                  className="px-3 py-2 w-full rounded-lg border"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                />
              </div>
  
              <div>
                <label>Owner Name</label>
                <input
                  className="px-3 py-2 w-full rounded-lg border"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                />
              </div>
  
              <div>
                <label>Contact Number</label>
                <input
                  className="px-3 py-2 w-full rounded-lg border"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
  
              <div>
                <label>Email</label>
                <input
                  className="px-3 py-2 w-full rounded-lg border"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>


              <div>
                <label>Available Slots</label>
                <input
                  type="number"
                  className="px-3 py-2 w-full rounded-lg border"
                  value={available}
                  onChange={(e) => setAvailable(e.target.value)}
                />
              </div>

              <div>
                <label>Gender Allowed</label>

                <select
                  className="px-3 py-2 w-full rounded-lg border"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Mixed</option>
                </select>
              </div>


              <div>
                  <label>Full Address</label>
                  <input
                    className="px-3 py-2 w-full rounded-lg border"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

            </div>

            

                <div>
                <label>Dorm Image</label>
                <input
                    type="file"
                    multiple
                    onChange={(e) => setImage(e.target.files)}
                  />
              </div>
  


            <div>
                <label>Description</label>

                <textarea
                  className="px-3 py-2 w-full rounded-lg border"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>



              <div>

                  <label className="block mb-2 font-medium">
                    Amenities
                  </label>

                  <div className="grid grid-cols-2 gap-2">

                    <label>
                      <input
                        type="checkbox"
                        checked={wifi}
                        onChange={(e) => setWifi(e.target.checked)}
                      />
                      Wifi
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        checked={aircon}
                        onChange={(e) => setAircon(e.target.checked)}
                      />
                      Aircon
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        checked={cr}
                        onChange={(e) => setCr(e.target.checked)}
                      />
                      Own CR
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        checked={parking}
                        onChange={(e) => setParking(e.target.checked)}
                      />
                      Parking
                    </label>

                  </div>

                </div>
  
  
                <button
                type="submit"
                disabled={lat === null || lng === null}
                className={`float-right px-6 py-2 rounded-lg text-white
                  ${lat === null ? "bg-gray-400" : "bg-blue-900"}
                `}
              >
                Save Dorm
              </button>

  
          </form>
  
        </div>
  
  
  
        {/* RIGHT MAP */}
        <div className="sticky top-6 p-4 bg-white shadow rounded-4xl h-fit">
  
          <label className="block mb-2 font-medium">
            Select Location (Borongan)
          </label>
  
          <MapContainer
              center={[11.659633748282928, 125.44316608609613]}
              zoom={15}
              style={{ height: "730px", width: "100%" }}
            >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
  
            <LocationMarker />
  
          </MapContainer>
  
          {lat === null ? (
        <p className="mt-2 text-sm text-red-500">
              Click map to set dorm location
            </p>
          ) : (
            <p className="mt-2 text-sm">
              Lat: {lat} | Lng: {lng}
            </p>
          )}

  
        </div>
  
      </div>
  
    </div>
  
  );
}