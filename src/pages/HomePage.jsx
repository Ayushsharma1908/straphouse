import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Classic Leather Strap", price: "₹1,499" },
  { id: 2, name: "Minimal Nylon Strap", price: "₹999" },
  { id: 3, name: "Premium Metal Strap", price: "₹2,499" },
];

export default function HomePage() {
  return (
    <div className="pt-28 bg-[#fafafa] min-h-screen">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl font-semibold mb-3">
          Discover Your Perfect Strap
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Choose from our curated collection or design a strap that’s uniquely yours.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
          >
            <div className="h-48 bg-gray-100 rounded-xl mb-5"></div>

            <h3 className="font-medium text-lg">{item.name}</h3>
            <p className="text-gray-500 mb-6">{item.price}</p>

            <div className="mt-auto flex gap-3">
              <button className="flex-1 border border-gray-900 py-2 rounded-full hover:bg-gray-900 hover:text-white transition">
                Add to Cart
              </button>

              <Link
                to="/design"
                className="flex-1 bg-violet-600 text-white py-2 rounded-full text-center hover:bg-violet-700 transition"
              >
                Customize
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
