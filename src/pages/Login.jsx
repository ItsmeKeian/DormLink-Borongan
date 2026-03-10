import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="p-8 w-full max-w-md bg-white rounded-2xl shadow">

        <h1 className="mb-6 text-2xl font-semibold text-center">
          Login to DormLink
        </h1>

        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm">
              Email
            </label>

            <input
              type="email"
              className="px-3 py-2 w-full rounded-lg border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm">
              Password
            </label>

            <input
              type="password"
              className="px-3 py-2 w-full rounded-lg border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="py-2 w-full text-white bg-blue-900 rounded-lg hover:bg-blue-800"
          >
            Login
          </button>

        </form>

        <p className="mt-4 text-sm text-center">
          Don't have account? Register
        </p>

      </div>

    </div>
  );
}