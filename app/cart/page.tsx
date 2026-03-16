"use client";

import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../utils/cart";

export default function CartPage() {

  const [cart, setCart] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    setCart(getCart());
  }, []);

  function handleRemove(code: string) {
    removeFromCart(code);
    setCart(getCart());
  }

  function handleQuote() {

    if (!name) {
      alert("Please enter your Name or Company Name");
      return;
    }

    if (!phone && !email) {
      alert("Please enter a Phone number or Email");
      return;
    }

    const message = `NEW QUOTE REQUEST

Name / Company: ${name}
Phone: ${phone}
Email: ${email}

Products:
${cart.map((item) => `${item.code} - ${item.name}`).join("\n")}

Note:
${note}
`;

    const whatsappURL =
      "https://wa.me/27832711738?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  }

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>

      <h2>Quote Cart</h2>

      {cart.length === 0 && <p>No items in quote cart.</p>}

      {cart.map((item) => (
        <div
          key={item.code}
          style={{
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            background: "#111",
          }}
        >
          <strong>{item.code}</strong>
          <br />
          {item.name}

          <br /><br />

          <button
            onClick={() => handleRemove(item.code)}
            style={{
              background: "red",
              color: "white",
              padding: "8px 14px",
              border: "none",
              borderRadius: "6px",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <hr style={{ margin: "30px 0" }} />

      <h2>Request Quote</h2>

      <div className="quote-form">

        <input
          type="text"
          placeholder="Name / Company Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          onClick={handleQuote}
          style={{
            background: "#2563eb",
            color: "white",
            padding: "14px",
            border: "none",
            borderRadius: "8px",
            width: "100%",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Send Quote Request
        </button>

      </div>

    </div>
  );
}