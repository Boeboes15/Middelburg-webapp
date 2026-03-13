export default function WhyUs() {
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

        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Why Choose Us
        </h1>


        {/* EXPERTISE */}

        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#333",
            padding: "30px",
            borderRadius: "12px",
            marginBottom: "25px"
          }}
        >
          <h2>Expertise</h2>

          <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
            With decades of combined experience in the bearings and power
            transmission industry, Middelburg Bearings & Transmission provides
            expert technical knowledge and practical solutions tailored to
            customer needs.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
            Our long-standing success is built on trust, consistency, and
            hands-on service — ensuring clients always receive the right
            products, guidance, and support for their operations.
          </p>
        </div>


        {/* INNOVATION */}

        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#333",
            padding: "30px",
            borderRadius: "12px",
            marginBottom: "25px"
          }}
        >
          <h2>Innovation</h2>

          <ul style={{ marginTop: "15px", lineHeight: "1.8" }}>
            <li>
              Continuous introduction of new and specialized products to meet
              evolving market demands
            </li>

            <li>
              Strategic partnerships with leading global brands like
              Bonfiglioli, providing access to world-class engineering
              solutions
            </li>

            <li>
              Computerized inventory and sales systems ensuring fast,
              accurate order fulfillment and real-time stock control
            </li>
          </ul>
        </div>


        {/* CLIENT CENTRIC */}

        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#333",
            padding: "30px",
            borderRadius: "12px"
          }}
        >
          <h2>Client-Centric</h2>

          <ul style={{ marginTop: "15px", lineHeight: "1.8" }}>
            <li>Free technical advice and personalized service</li>

            <li>
              Customized delivery solutions designed around customer
              schedules
            </li>

            <li>
              A culture of passion, reliability, and excellence
            </li>

            <li>
              A professional team dedicated to quality, service, and
              long-term client satisfaction
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
}