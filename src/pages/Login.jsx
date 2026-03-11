import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const res = await fetch(
        "http://localhost/dormlink-borongan-api/login.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      console.log(data);

      if (data.status === "success") {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        // ✅ redirect by role
        if (data.user.role === "admin") {
          navigate("/admin");
        }

        if (data.user.role === "landlord") {
          navigate("/landlord");
        }

        if (data.user.role === "student") {
          navigate("/tenant");
        }
      }

      if (data.status === "wrong_password") {
        alert("Wrong password");
      }

      if (data.status === "not_found") {
        alert("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="p-8 w-full max-w-md bg-white rounded-2xl shadow">

        <h1 className="mb-6 text-2xl font-semibold text-center">
          Login to DormLink
        </h1>

        <form
          className="space-y-4"
          onSubmit={handleLogin}
        >

          <div>
            <label>Email</label>

            <input
              type="email"
              className="px-3 py-2 w-full rounded-lg border"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              className="px-3 py-2 w-full rounded-lg border"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="py-2 w-full text-white bg-blue-900 rounded-lg"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}