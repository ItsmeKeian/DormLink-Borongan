import { useState } from "react";

export default function Settings() {

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [notify, setNotify] = useState(true);


  const handleSave = () => {

    if (password !== confirm) {
      alert("Password not match");
      return;
    }

    alert("Saved (temporary)");
  };


  return (
    <div className="space-y-6 max-w-xl">

      <h1 className="text-2xl font-semibold">
        Admin Settings
      </h1>


      <div className="p-6 space-y-4 bg-white rounded-xl border">


        {/* PASSWORD */}
        <div>

          <label>New Password</label>

          <input
            type="password"
            className="px-3 py-2 w-full rounded-lg border"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

        </div>


        <div>

          <label>Confirm Password</label>

          <input
            type="password"
            className="px-3 py-2 w-full rounded-lg border"
            value={confirm}
            onChange={(e) =>
              setConfirm(e.target.value)
            }
          />

        </div>


        {/* NOTIFICATIONS */}
        <div className="flex gap-2 items-center">

          <input
            type="checkbox"
            checked={notify}
            onChange={() =>
              setNotify(!notify)
            }
          />

          <label>
            Enable system notifications
          </label>

        </div>


        <button
          onClick={handleSave}
          className="px-4 py-2 text-white bg-blue-900 rounded-lg"
        >
          Save Settings
        </button>

      </div>

    </div>
  );
}