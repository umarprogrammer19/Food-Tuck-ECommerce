import MainBreadcum from "@/components/Breadcum/MainBreadcum";
import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa"; // React Icons


 const LogIn = () => {
  return (
    <>
    <MainBreadcum name='Sign In' pageName='Sign In'/>
    <section className="px-4 py-16 shadow-2xl shadow-orange-300/40 w-full max-w-lg mx-auto min-h-16">
      <h2 className="text-xl font-semibold mb-6 text-center">Sign In</h2>

      <form>
        <div className="relative my-3">
          <FaEnvelope className="absolute top-2 left-2 w-6 h-6 text-gray-700" />
          <input
            className="pl-10 pr-5 py-2 w-full border border-gray-300 focus:outline-orange-400"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="relative my-3">
          <FaLock className="absolute top-2 left-2 w-6 h-6 text-gray-700" />
          <input
            className="pl-10 pr-5 py-2 w-full border border-gray-300 focus:outline-orange-400"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="flex items-center mb-6">
          <input
            className="accent-orange-600 w-5 h-5 mr-3"
            type="checkbox"
            id="rememberIn"
          />
          <label htmlFor="rememberIn">Remember me</label>
        </div>

        <button className="w-full py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500">
          Sign In
        </button>

        <p className="text-center mt-5">
          Dont have an account?{" "}
          <Link className="hover:text-gray-500" href="/SignUp">
            Sign up
          </Link>
        </p>
      </form>
    </section>
    </>
    
  );
};

export default LogIn