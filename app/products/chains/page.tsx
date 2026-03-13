"use client";

import { useEffect, useState } from "react";
import { addToCart } from "@/app/utils/cart";

export default function Chains() {

  const [chains, setChains] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://bearings-api-production-7b5d.up.railway.app/chains")
      .then((res) => res.json())
      .then((data) => setChains(data));
  }, []);

  const filteredChains = chains.filter((chain: any) =>
    chain.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/images/chains-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >

        <h1 style={{ color: "white" }}>Chains</h1>

        <input
          type="text"
          placeholder="Search chain code..."
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
            outline: "none",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "15px",
          }}
        >

          {filteredChains.map((chain: any, index: number) => (

           <div
  key={index}
  onClick={() => setSelected(chain.code)}
  style={{
    padding: "15px",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "10px",
    background: selected === chain.code
      ? "rgba(60,120,255,0.35)"
      : "rgba(30,30,30,0.45)",
    backdropFilter: "blur(12px)",
    color: "white",
    cursor: "pointer"
  }}
>

<strong style={{ color: "#ffffff", fontSize: "16px" }}>
  {chain.code}
</strong>

<div style={{ marginTop: "5px", color: "#e5e7eb", fontWeight: "500" }}>
  {chain.name}
</div>

<button
  onClick={(e) => {
    e.stopPropagation();
    addToCart({
      code: chain.code,
      name: chain.name,
      category: "Chains"
    });
  }}
  style={{
    marginTop: "10px",
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "6px 12px",
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