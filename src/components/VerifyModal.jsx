import { useState } from "react";
import axios from "axios";

export default function VerifyModal({ open, onClose }) {

  const [file, setFile] = useState(null);
  const [type, setType] = useState("student");

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("id_image", file);
    formData.append("id_type", type);

    try {

      const res = await axios.post(
        "http://localhost/dormlinkborongan/php/upload_id.php",
        formData,
        { withCredentials: true }
      );

      alert(res.data.message);

      onClose();

    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="flex fixed inset-0 z-50 justify-center items-center bg-black/40">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-[400px]"
      >

        <h2 className="mb-2 text-lg font-semibold">
          Verify account
        </h2>

        <p className="mb-3 text-sm text-gray-600">
          Upload valid ID to continue using DormLink
        </p>


        <select
          onChange={(e) => setType(e.target.value)}
          className="p-2 mb-3 w-full border"
        >
          <option value="student">
            Student ID
          </option>

          <option value="national">
            National ID
          </option>
        </select>


        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-3"
        />


        <div className="flex gap-2">

          <button
            type="button"
            onClick={onClose}
            className="flex-1 p-2 rounded border"
          >
            Cancel
          </button>

          <button
            className="flex-1 p-2 text-white bg-blue-900 rounded"
          >
            Upload
          </button>

        </div>

      </form>

    </div>
  );
}