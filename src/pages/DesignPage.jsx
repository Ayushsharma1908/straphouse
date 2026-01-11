import { useState } from "react";

export default function DesignPage() {
  const [color, setColor] = useState("#111827");
  const [stitch, setStitch] = useState("#a855f7");

  return (
    <div className="pt-24 min-h-screen bg-[#fafafa] flex">

      {/* Left Panel */}
      <div className="w-80 bg-white border-r p-6">
        <h2 className="text-xl font-semibold mb-6">
          Design Your Strap
        </h2>

        {/* Strap Color */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-2">
            Strap Color
          </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-10 rounded cursor-pointer"
          />
        </div>

        {/* Stitch Color */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-2">
            Stitch Color
          </label>
          <input
            type="color"
            value={stitch}
            onChange={(e) => setStitch(e.target.value)}
            className="w-full h-10 rounded cursor-pointer"
          />
        </div>

        <button className="w-full bg-gray-900 text-white py-3 rounded-full hover:scale-105 transition">
          Save Design
        </button>
      </div>

      {/* Preview Area */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-3xl p-12">

          <h3 className="text-center font-medium mb-6">
            Live Preview
          </h3>

          {/* Strap Preview */}
          <div
            className="w-72 h-24 rounded-full relative"
            style={{ backgroundColor: color }}
          >
            <div
              className="absolute inset-1 rounded-full border-4 border-dashed"
              style={{ borderColor: stitch }}
            />
          </div>

        </div>
      </div>

    </div>
  );
}
