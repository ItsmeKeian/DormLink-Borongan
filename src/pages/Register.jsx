import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {

  const [showPass, setShowPass] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    role: "student",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const setRole = (role) => {
    setForm({
      ...form,
      role,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost/dormlinkborongan/php/register.php",
        form,
        { withCredentials: true }
      );

      alert(res.data.message);

      window.location.reload();

    } catch (err) {
      console.log(err);
    }
  };


  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-50">

      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-2xl shadow-xl w-[480px]"
      >

        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
          Create Account
        </h2>


        {/* FULL NAME */}

        <input
          name="full_name"
          placeholder="Full name"
          onChange={handleChange}
          className="p-2 mb-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
        />


        {/* EMAIL */}

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-2 mb-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
        />


        {/* PHONE */}

        <input
          name="phone"
          placeholder="Phone number"
          onChange={handleChange}
          className="p-2 mb-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
        />


        {/* ROLE */}

        <div className="mb-4">

          <p className="mb-1 text-sm text-gray-600">
            Register as
          </p>

          <div className="flex gap-2">

            <button
              type="button"
              onClick={() => setRole("student")}
              className={`flex-1 p-2 rounded-lg border ${
                form.role === "student"
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100"
              }`}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() => setRole("landlord")}
              className={`flex-1 p-2 rounded-lg border ${
                form.role === "landlord"
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100"
              }`}
            >
              Landlord
            </button>

          </div>

        </div>


        {/* PASSWORD */}

        <input
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="p-2 mb-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
        />


        {/* CONFIRM */}

        <input
          type={showPass ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={handleChange}
          className="p-2 mb-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500"
        />


        {/* SHOW PASSWORD */}

        <div className="flex items-center mb-3">

          <input
            type="checkbox"
            onChange={() => setShowPass(!showPass)}
            className="mr-2"
          />

          <span className="text-sm text-gray-600">
            Show password
          </span>

        </div>


        {/* TERMS */}

        <div className="flex items-center mb-4">

          <input type="checkbox" className="mr-2" />

          <span className="text-sm text-gray-600">
            I agree to Terms and Conditions
          </span>

        </div>


        {/* BUTTON */}

        <button
          className="p-2 w-full text-white bg-blue-900 rounded-lg hover:bg-blue-800"
        >
          Register
        </button>


        <p className="mt-4 text-sm text-center">

          Already have account?{" "}

          <Link to="/login" className="font-medium text-blue-900">
            Login
          </Link>

        </p>

      </form>

    </div>

  );
}