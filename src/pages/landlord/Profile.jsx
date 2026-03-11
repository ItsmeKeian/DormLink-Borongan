import { useState } from "react";

export default function Profile() {

  const [name, setName] = useState("Landlord");
  const [email, setEmail] = useState("landlord@gmail.com");
  const [phone, setPhone] = useState("09123456789");
  const [address, setAddress] = useState("Borongan City");


  const handleSave = () => {
    alert("Saved (temporary)");
  };


  return (
    <div className="space-y-6 max-w-xl">

      <h1 className="text-2xl font-semibold">
        Profile
      </h1>


      <div className="p-6 space-y-4 bg-white rounded-xl border">


        <div>
          <label>Name</label>

          <input
            className="px-3 py-2 w-full rounded-lg border"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <label>Phone</label>

          <input
            className="px-3 py-2 w-full rounded-lg border"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>


        <div>
          <label>Address</label>

          <input
            className="px-3 py-2 w-full rounded-lg border"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>


        <button
          onClick={handleSave}
          className="px-4 py-2 text-white bg-blue-900 rounded-lg"
        >
          Save Profile
        </button>

      </div>

    </div>
  );
}