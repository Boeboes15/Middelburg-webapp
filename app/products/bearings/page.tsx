"use client";

import { useEffect, useState } from "react";
import { addToCart } from "../../utils/cart";

export default function Bearings() {

  const [bearings, setBearings] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://bearings-api-production-7b5d.up.railway.app/bearings")
      .then((res) => res.json())
      .then((data) => setBearings(data));
  }, []);

  const filteredBearings = bearings.filter((bearing: any) =>
    bearing.code.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/images/bearings-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "40px"
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto"
        }}
      >

        <h1 style={{ color: "white" }}>Bearings</h1>

        <input
          type="text"
          placeholder="Search bearing code..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
         style={{
  padding: "12px",
  width: "100%",
  maxWidth: "400px",
  marginBottom: "30px",
  border: "1px solid rgba(255,255,255,0.6)",
  borderRadius: "8px",
  fontSize: "16px",
  background: "rgba(255,255,255,0.9)",
  color: "#111",
  outline: "none"
}}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "15px"
          }}
        >

          {filteredBearings.map((bearing: any, index: number) => (

            <div
              key={index}
              onClick={() => setSelected(bearing.code)}
              style={{
  padding: "15px",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "10px",
  background: selected === bearing.code
    ? "rgba(60,120,255,0.35)"
    : "rgba(30,30,30,0.45)",
  backdropFilter: "blur(12px)",
  color: "white",
  cursor: "pointer"
}}
            >

              <strong>{bearing.code}</strong>
<div style={{ marginTop: "5px", color: "#e5e7eb", fontWeight: "500" }}>
  
                {bearing.name}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart({
                    code: bearing.code,
                    name: bearing.name,
                    category: "Bearings"
                  });
                  alert("Added to Quote Cart");
                }}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Add to Quote
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}