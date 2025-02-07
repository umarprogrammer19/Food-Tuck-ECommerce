"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";
import MainBreadcum from "@/components/Breadcum/MainBreadcum";
import { signupUser } from "@/lib/api/auth";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await signupUser(fullname, email, password);
      setSuccess("Signup successful! Redirecting...");
      console.log("Signup response:", response);
      router.push("/LogIn");
    } catch (error) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MainBreadcum name="Sign Up" pageName="Sign Up" />
      <section className="px-4 py-16 shadow-2xl shadow-orange-300/40 w-full max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleSignUp}>
          {/* Name Input */}
          <div className="relative my-3">
            <FaUser className="absolute top-2 left-2 w-6 h-6 text-gray-700" />
            <input
              className="pl-10 pr-5 py-2 w-full border border-gray-300 focus:outline-orange-400"
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>

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
            <input className="accent-orange-600 w-5 h-5 mr-3" type="checkbox" id="rememberUp" />
            <label htmlFor="rememberUp">Remember me</label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          {/* Link to Sign In */}
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link className="hover:text-gray-500" href="/LogIn">
              Sign In
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default SignUp;
