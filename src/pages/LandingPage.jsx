export default function LandingPage() {
  return (
    <div className="text-gray-800">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-semibold tracking-wide">
            Strap<span className="text-violet-600">House</span>
          </h1>

          {/* Nav Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-violet-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-violet-600">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-violet-600">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/signin"
                className="border px-4 py-1.5 rounded-full hover:bg-gray-900 hover:text-white transition"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-[#fafafa] pt-20"
      >
        <div className="max-w-4xl text-center px-6">
          <p className="font-[Allura] text-4xl text-violet-600 mb-4">
            Crafted for your time
          </p>

          <h2 className="text-5xl font-semibold leading-tight mb-6">
            Design Watch Straps <br />
            That Speak <span className="text-violet-600">You</span>
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            StrapHouse lets you customize premium watch straps or choose from
            our signature designs — perfectly crafted for every watch.
          </p>

          <a
            href="/signup"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-6">About StrapHouse</h3>
            <p className="text-gray-600 leading-relaxed">
              StrapHouse is built for watch lovers who believe a strap is not
              just an accessory — it’s a statement. We combine premium
              materials, modern aesthetics, and complete personalization so your
              watch feels truly yours.
            </p>
          </div>

          <div className="font-[Allura] text-4xl text-violet-600">
            “Your watch deserves a soul.”
          </div>
        </div>
      </section>

      {/* ================= FEATURED DESIGNS ================= */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-12">Featured Designs</h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="h-40 bg-gray-100 rounded-xl mb-4"></div>
                <h4 className="font-medium">Signature Strap {item}</h4>
                <p className="text-sm text-gray-500 mt-2">
                  Designed to fit every watch, every style.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOM DESIGN ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Design Your Own Strap
            </h3>
            <p className="text-gray-600 mb-8">
              Choose materials, colors, stitching, and fit — our design tool
              gives you complete control to create something truly personal.
            </p>
            <button className="border border-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition">
              Start Designing
            </button>
          </div>

          <div className="font-[Allura] text-4xl text-violet-600">
            “Designed by you. Crafted by us.”
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="py-10 bg-gray-900 text-gray-300 text-center text-sm"
      >
        © 2026 StrapHouse. Crafted with precision.
      </footer>
    </div>
  );
}
