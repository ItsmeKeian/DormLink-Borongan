import { useState } from "react";

export default function AddDorm() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      price,
      rooms,
      address,
      image,
    });

    alert("Dorm saved (temporary)");
  };


  return (
    <div className="max-w-xl">

      <h1 className="mb-6 text-2xl font-semibold">
        Add Dorm
      </h1>


      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {/* NAME */}
        <div>
          <label>Dorm Name</label>

          <input
            type="text"
            className="px-3 py-2 w-full rounded-lg border"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>


        {/* PRICE */}
        <div>
          <label>Price per month</label>

          <input
            type="number"
            className="px-3 py-2 w-full rounded-lg border"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>


        {/* ROOMS */}
        <div>
          <label>Total Rooms</label>

          <input
            type="number"
            className="px-3 py-2 w-full rounded-lg border"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>


        {/* ADDRESS */}
        <div>
          <label>Address</label>

          <input
            type="text"
            className="px-3 py-2 w-full rounded-lg border"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>


        {/* IMAGE */}
        <div>
          <label>Image URL</label>

          <input
            type="text"
            className="px-3 py-2 w-full rounded-lg border"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>


        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-900 rounded-lg"
        >
          Save Dorm
        </button>

      </form>

    </div>
  );
}