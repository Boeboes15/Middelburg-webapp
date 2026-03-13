export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/chains-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 20px",
        color: "white"
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>

        <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
          Contact Us
        </h1>

        <h2 style={{ marginBottom: "10px" }}>
          Middelburg Bearings & Transmission
        </h2>

        <p style={{ marginBottom: "25px", opacity: 0.8 }}>
          Industrial Bearings, Chains, and Transmission Experts
        </p>

        <hr style={{ marginBottom: "25px", opacity: 0.3 }} />

        <p>📍 Address: 11A Oos STR, Middelburg</p>

        <p>
          ☎ Landline:  
          <a href="tel:0132826622" style={{ color: "#4da6ff", marginLeft: "6px" }}>
            013 282 6622
          </a>
        </p>

        <p>
          📱 Phone:  
          <a href="tel:+27832711738" style={{ color: "#4da6ff", marginLeft: "6px" }}>
            +27 83 271 1738
          </a>
        </p>

        <p>
          🌐 Website:  
          <a
            href="https://www.middelburgbearingsandtransmission.com"
            style={{ color: "#4da6ff", marginLeft: "6px" }}
          >
            middelburgbearingsandtransmission.com
          </a>
        </p>

        <p>
          ✉ Email:  
          <a href="mailto:info@mbgbearings.co.za" style={{ color: "#4da6ff", marginLeft: "6px" }}>
            info@mbgbearings.co.za
          </a>
        </p>

        <div style={{ marginTop: "25px", marginBottom: "40px" }}>
          <a
            href="https://maps.google.com/?q=11A Oos Street Middelburg Mpumalanga"
            target="_blank"
          >
            <button
              style={{
                padding: "12px 24px",
                borderRadius: "8px",
                border: "1px solid white",
                background: "transparent",
                color: "white",
                cursor: "pointer"
              }}
            >
              OPEN GOOGLE MAPS
            </button>
          </a>
        </div>

        <hr style={{ marginBottom: "25px", opacity: 0.3 }} />

        <h2 style={{ marginBottom: "20px" }}>Our Team</h2>

        {[
          { name: "Johan", role: "Sales Manager", phone: "0827850506" },
          { name: "Jannie", role: "Sales Representative", phone: "0832711738" },
          { name: "Sam", role: "Sales Representative", phone: "0735071889" },
          { name: "Piet", role: "Sales Representative", phone: "0792442516" }
        ].map((person, index) => (

          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.85)",
              color: "#333",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px"
            }}
          >
            <h3>{person.name}</h3>

            <p style={{ marginBottom: "10px", opacity: 0.7 }}>
              {person.role}
            </p>

            <p>
              📞
              <a href={`tel:${person.phone}`} style={{ marginLeft: "6px" }}>
                {person.phone}
              </a>
            </p>

            <p>
              💬
              <a
                href={`https://wa.me/27${person.phone.substring(1)}`}
                target="_blank"
                style={{ marginLeft: "6px", color: "green" }}
              >
                Chat on WhatsApp
              </a>
            </p>

          </div>

        ))}

      </div>
    </div>
  );
}