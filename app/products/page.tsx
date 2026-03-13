import Link from "next/link";

export default function Products() {

const buttonStyle = {
width: "100%",
padding: "18px",
fontSize: "18px",
borderRadius: "10px",
border: "1px solid rgba(255,255,255,0.15)",
background: "rgba(255,255,255,0.15)",
color: "white",
cursor: "pointer",
textAlign: "left" as const,
backdropFilter: "blur(8px)",
boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
transition: "all 0.25s ease"
};

return (
<div
style={{
fontFamily: "Arial",
textAlign: "center",
padding: "60px",
minHeight: "100vh",
background:
"linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/bearing-warehouse.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundAttachment: "fixed"
}}
>

<h1
style={{
fontSize: "56px",
marginBottom: "10px",
color: "white",
textShadow: "0px 2px 8px rgba(0,0,0,0.8)"
}}
>
Our Product Categories
</h1>

<div
style={{
width: "120px",
height: "3px",
background: "white",
margin: "0 auto 40px auto",
borderRadius: "2px"
}}
></div>

<div
style={{
display: "flex",
flexDirection: "column",
gap: "15px",
maxWidth: "500px",
margin: "auto"
}}
>

<Link href="/products/bearings">
<button style={buttonStyle}>⚙ Bearings</button>
</Link>

<Link href="/products/bushes">
<button style={buttonStyle}>🔩 Bushes</button>
</Link>

<Link href="/products/chains">
<button style={buttonStyle}>⛓ Chains</button>
</Link>

<Link href="/products/couplings">
<button style={buttonStyle}>🔗 Couplings</button>
</Link>

<Link href="/products/locking-elements">
<button style={buttonStyle}>🧩 Locking Elements</button>
</Link>

<Link href="/products/pulleys">
<button style={buttonStyle}>🛞 Pulleys</button>
</Link>

<Link href="/products/sprockets">
<button style={buttonStyle}>⚙ Sprockets</button>
</Link>

<Link href="/products/other-products">
<button style={buttonStyle}>📦 Other Products</button>
</Link>

</div>

</div>
);
}