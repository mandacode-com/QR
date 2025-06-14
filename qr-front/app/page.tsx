"use client";

import { useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrSvg, setQrSvg] = useState("");
  const [qrPng, setQrPng] = useState("");

  // Generate QR codes in both PNG and SVG formats
  const generateQRCode = async () => {
    if (!url.trim()) {
      alert("Please enter a valid URL.");
      return;
    }

    try {
      // Generate PNG data URL
      const pngDataUrl = await QRCode.toDataURL(url, { type: "image/png" });
      setQrPng(pngDataUrl);

      // Generate raw SVG text and convert it to data URL
      const svgText = await QRCode.toString(url, { type: "svg" });
      const svgDataUrl = `data:image/svg+xml;base64,${btoa(svgText)}`;
      setQrSvg(svgDataUrl);
    } catch (err) {
      console.error("QR Code generation failed:", err);
      alert("An error occurred while generating the QR code.");
    }
  };

  // Download function
  const downloadQR = (dataUrl: string, type: "png" | "svg") => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `qrcode.${type}`;
    link.click();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6 py-12">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">QR Code Generator</h1>

        <input
          type="text"
          placeholder="Enter a URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={generateQRCode}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Generate QR Code
        </button>

        {qrPng && (
          <div className="flex flex-col items-center space-y-4 mt-6">
            <Image
              src={qrPng}
              alt="Generated QR Code"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />

            <div className="flex space-x-4">
              <button
                onClick={() => downloadQR(qrPng, "png")}
                className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                Download PNG
              </button>
              <button
                onClick={() => downloadQR(qrSvg, "svg")}
                className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                Download SVG
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
