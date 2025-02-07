"use client";
import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa";
import MainBreadcum from "@/components/Breadcum/MainBreadcum";
import { loginUser } from "@/lib/api/auth";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await loginUser(email, password);
      setSuccess("Login successful! Redirecting...");
      console.log("Login response:", response);

      localStorage.setItem("accessToken", JSON.stringify(response.accessToken));

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MainBreadcum name="Sign In" pageName="Sign In" />
      <section className="px-4 py-16 shadow-2xl shadow-orange-300/40 w-full max-w-lg mx-auto min-h-16">
        <h2 className="text-xl font-semibold mb-6 text-center">Sign In</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="relative my-3">
            <FaEnvelope className="absolute top-2 left-2 w-6 h-6 text-gray-700" />
            <input
              className="pl-10 pr-5 py-2 w-full border border-gray-300 focus:outline-orange-400"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative my-3">
            <FaLock className="absolute top-2 left-2 w-6 h-6 text-gray-700" />
            <input
              className="pl-10 pr-5 py-2 w-full border border-gray-300 focus:outline-orange-400"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-6">
            <input className="accent-orange-600 w-5 h-5 mr-3" type="checkbox" id="rememberIn" />
            <label htmlFor="rememberIn">Remember me</label>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Link to Sign Up */}
          <p className="text-center mt-5">
            Don't have an account?{" "}
            <Link className="hover:text-gray-500" href="/SignUp">
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default LogIn;
