import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyDorms() {

  const [listings, setListings] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {

    fetch(
      "http://localhost/dormlinkborongan/php/get_landlord_listings.php",
      {
        credentials: "include",
      }
    )
      .then(res => res.json())
      .then(data => {

        if (Array.isArray(data)) {
          setListings(data);
        } else {
          setListings([]);
        }

      });

  }, []);



  const deleteDorm = async (id) => {

    if (!window.confirm("Delete this dorm?")) return;

    const res = await fetch(
      "http://localhost/dormlinkborongan/php/delete_listing.php",
      {
        method: "POST",
        body: new URLSearchParams({ id }),
        credentials: "include",
      }
    );

    const data = await res.json();

    if (data.status === "success") {

      setListings(prev =>
        prev.filter(l => l.id !== id)
      );

    }

  };



  return (

    <div className="p-6 w-full">

      {/* TITLE */}

      <h1 className="mb-6 text-2xl font-semibold">
        My Dorms
      </h1>



      {/* EMPTY */}

      {listings.length === 0 && (

        <div className="p-10 text-center bg-white rounded-xl shadow">

          <p className="text-gray-500">
            No dorm listings yet
          </p>

        </div>

      )}



      {/* GRID */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {listings.map(item => (

          <div
            key={item.id}
            className="overflow-hidden bg-white rounded-xl shadow"
          >


            {/* IMAGE CLICKABLE */}

            <img
              src={
                item.image
                  ? `http://localhost/dormlinkborongan/php/uploads/${item.image}`
                  : "/noimg.jpg"
              }
              className="object-cover w-full h-44 cursor-pointer"
              onClick={() =>
                navigate(`/landlord/mydorm/view/${item.id}`)
              }
            />


            {/* CONTENT */}

            <div className="p-4">

              <h2 className="text-lg font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-600">
                ₱{item.price} / month
              </p>

              <p className="text-sm text-gray-500">
                Status: {item.status}
              </p>



              {/* BUTTONS */}

              <div className="flex gap-2 mt-4">

                <button
                  onClick={() =>
                    navigate(`/landlord/edit/${item.id}`)
                  }
                  className="px-3 py-1 text-white bg-gray-600 rounded"
                >
                  Edit
                </button>


                <button
                  onClick={() =>
                    deleteDorm(item.id)
                  }
                  className="px-3 py-1 text-white bg-red-600 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}