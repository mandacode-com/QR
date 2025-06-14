"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function Home() {
  const [targetUrl, setTargetUrl] = useState("");
  const [svgCode, setSvgCode] = useState("");

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>QR Code Generator (SVG)</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={targetUrl}
        onChange={(e) => setTargetUrl(e.target.value)}
      />
      <button
        onClick={async () => {
          if (targetUrl) {
            try {
              // Generate SVG QR code string
              const svg = await QRCode.toString(targetUrl, { type: "svg" });
              setSvgCode(svg);
            } catch (error) {
              console.error("Error generating QR code:", error);
            }
          } else {
            alert("Please enter a URL.");
          }
        }}
      >
        Generate QR Code
      </button>

      {svgCode && (
        <div>
          <div>
            <h2>Generated QR Code (SVG):</h2>
            <div
              dangerouslySetInnerHTML={{ __html: svgCode }}
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div>
            <a
              href={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgCode)}`}
              download={`qrcode-${new Date().toISOString()}.svg`}
              style={{
                display: "inline-block",
                marginTop: "10px",
              }}
            >
              <button>Download QR Code SVG</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
