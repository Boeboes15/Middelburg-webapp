export default function SocialMedia() {
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
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>

        <h1 style={{ marginBottom: "30px" }}>Social Media</h1>

        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#333",
            padding: "40px",
            borderRadius: "12px"
          }}
        >

          <h2>Follow Us on Facebook</h2>

          <p style={{ marginTop: "15px" }}>
            Stay updated with our latest products, specials, and company news.
          </p>

          <a
            href="https://www.facebook.com/profile.php?id=61581253560903"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "25px",
              padding: "12px 30px",
              background: "#1877F2",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Visit our Facebook Page
          </a>

        </div>

      </div>
    </div>
  );
}