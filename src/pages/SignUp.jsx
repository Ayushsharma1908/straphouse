import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">

        {/* Logo */}
        <h1 className="text-2xl font-semibold text-center mb-2">
          Strap<span className="text-violet-600">House</span>
        </h1>

        <p className="font-[Allura] text-3xl text-violet-600 text-center mb-8">
          Create your style
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>

          <button className="w-full mt-4 bg-gray-900 text-white py-3 rounded-full hover:scale-105 transition">
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-violet-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}
