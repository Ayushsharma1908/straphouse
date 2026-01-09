export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-violet-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

        {/* Header */}
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Sign in to continue to StrapHouse
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <button className="w-full py-3 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition shadow-md">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <span className="text-violet-600 font-medium cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
