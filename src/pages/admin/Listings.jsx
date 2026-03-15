import { useEffect, useState } from "react";

export default function Listings() {

  const [listings, setListings] = useState([]);


  const loadListings = () => {

    fetch(
      "http://localhost/dormlinkborongan/php/admin_get_listings.php"
    )
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.log(err));

  };


  useEffect(() => {
    loadListings();
  }, []);



  const updateStatus = async (id, status) => {

    const formData = new FormData();
    formData.append("id", id);
    formData.append("status", status);

    const res = await fetch(
      "http://localhost/dormlinkborongan/php/admin_update_status.php",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (data.status === "success") {
      loadListings();
    }

  };



  return (

    <div className="space-y-6">

      <h1 className="text-2xl font-semibold">
        Listings
      </h1>


      <div className="overflow-x-auto p-4 bg-white rounded-xl border">

        <table className="w-full text-sm">

          <thead>

            <tr className="text-left border-b">

              <th className="py-2">Image</th>
              <th>Dorm</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {listings.map(item => (

              <tr key={item.id} className="border-b">

                {/* IMAGE */}

                <td className="py-2">

                  <img
                    src={
                      item.image
                        ? `http://localhost/dormlinkborongan/php/uploads/${item.image}`
                        : "/noimg.jpg"
                    }
                    className="object-cover w-16 h-12 rounded"
                  />

                </td>


                {/* TITLE */}

                <td>{item.title}</td>


                {/* PRICE */}

                <td>₱{item.price}</td>


                {/* STATUS */}

                <td>

                  {item.status === "pending" && (
                    <span className="text-yellow-600">
                      Pending
                    </span>
                  )}

                  {item.status === "approved" && (
                    <span className="text-green-600">
                      Approved
                    </span>
                  )}

                  {item.status === "rejected" && (
                    <span className="text-red-600">
                      Rejected
                    </span>
                  )}

                </td>


                {/* ACTION */}

                <td className="flex gap-2 py-2">

                  <button
                    onClick={() =>
                      updateStatus(item.id, "approved")
                    }
                    className="px-2 py-1 text-white bg-green-600 rounded"
                  >
                    Approve
                  </button>


                  <button
                    onClick={() =>
                      updateStatus(item.id, "rejected")
                    }
                    className="px-2 py-1 text-white bg-red-500 rounded"
                  >
                    Reject
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}