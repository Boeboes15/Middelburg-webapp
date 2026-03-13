export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/bearings-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 20px",
        color: "white"
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <h1 style={{ textAlign: "center", fontSize: "34px", marginBottom: "30px" }}>
          About Us
        </h1>

        {/* ABOUT SECTION */}

        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#333",
            padding: "30px",
            borderRadius: "12px",
            marginBottom: "25px"
          }}
        >
          <h2>About Us</h2>

          <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
            Micromath Trading 159CC T/A Middelburg Bearings & Transmission is a trusted
            distributor of power transmission products and quality brand bearings.
            With a proud legacy of over 25 years, the company is led by
            Mrs. Anna Elizabeth Rudolph, supported by Johan, Piet, Sam, Jannie,
            and Charene — bringing together over 100 years of combined
            industry experience.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
            Our reputation is built on excellence, professionalism, and reliability.
            We supply premium products and technical support across mining,
            engineering, transport, and agriculture.
          </p>
        </div>


        {/* MISSION */}

        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#333",
            padding: "30px",
            borderRadius: "12px",
            marginBottom: "25px"
          }}
        >
          <h2>Mission</h2>

          <ul style={{ marginTop: "15px", lineHeight: "1.8" }}>
            <li>Deliver friendly, efficient, specialized customer service</li>
            <li>Continuously introduce new and innovative products</li>
            <li>Present a professional image with hands-on management</li>
            <li>Be the preferred service provider in our region</li>
            <li>Offer cost-effective and reliable solutions</li>
          </ul>
        </div>


        {/* VISION */}

        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#333",
            padding: "30px",
            borderRadius: "12px",
            marginBottom: "25px"
          }}
        >
          <h2>Vision</h2>

          <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
            To be recognized as a respected, trustworthy, and professional distributor
            that delivers consistent quality, excellent service, and total
            customer satisfaction.
          </p>

          <p style={{ marginTop: "15px", fontStyle: "italic" }}>
            “We are the distributors of a wide range of power transmission
            products and quality brand bearings.”
          </p>
        </div>

      </div>
    </div>
  );
}