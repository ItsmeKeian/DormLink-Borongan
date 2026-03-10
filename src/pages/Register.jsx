import { useState } from "react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-gradient-to-br">

      <div className="p-8 w-full max-w-md bg-white rounded-2xl shadow-lg">

        {/* Title */}
        <h1 className="mb-6 text-2xl font-semibold text-center text-gray-800">
          Create DormLink Account
        </h1>

        <form className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-700">
              Email
            </label>

            <input
              type="email"
              className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-gray-700">
              Password
            </label>

            <input
              type="password"
              className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="py-2 w-full text-white bg-blue-900 rounded-lg transition hover:bg-blue-800"
          >
            Register
          </button>

        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have account? Login
        </p>

      </div>

    </div>
  );
}