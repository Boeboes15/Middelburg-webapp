"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const images = [
"/images/1.png",
"/images/2.png",
"/images/3.png",
"/images/4.png",
"/images/5.png",
"/images/6.png",
];

const buttonStyle = {
width: "100%",
padding: "20px",
fontSize: "18px",
borderRadius: "10px",
border: "1px solid rgba(255,255,255,0.15)",
background: "rgba(255,255,255,0.15)",
color: "white",
cursor: "pointer",
backdropFilter: "blur(8px)",
boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
transition: "all 0.25s ease",
fontWeight: "600",
letterSpacing: "1px"
};

export default function Home() {

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setCurrentImage((prev) => (prev + 1) % images.length);
}, 5000);

return () => clearInterval(interval);
}, []);

useEffect(() => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, []);

return (
<>

{/* WHATSAPP FLOATING BUTTON */}

<a
href="https://wa.me/27832711738?text=Hello%20Middelburg%20Bearings,%20I%20would%20like%20assistance%20with%20an%20item."
target="_blank"
style={{
position: "fixed",
top: "85px",
right: "45px",
zIndex: 50
}}
>
<img
src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
alt="WhatsApp"
style={{ width: "36px", height: "36px" }}
/>
</a>

{/* MAIN PAGE */}

<div
style={{
minHeight: "100vh",
backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images[currentImage]})`,
backgroundSize: "cover",
backgroundPosition: "center",
transition: "all 1.5s ease-in-out",
color: "white",
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
textAlign: "center",
padding: "40px 20px 120px 20px"
}}
>

<h1
style={{
fontSize: "42px",
marginBottom: "30px",
letterSpacing: "2px",
fontWeight: "700",
textShadow: "0px 4px 15px rgba(0,0,0,0.8)"
}}
>
MIDDELBURG BEARINGS & TRANSMISSION
</h1>

<div
style={{
width: "220px",
height: "2px",
background: "linear-gradient(to right, transparent, #8aa0bf, transparent)",
marginBottom: "40px"
}}
/>

<div
style={{
display: "flex",
flexDirection: "column",
gap: "15px",
width: "250px"
}}
>

<Link href="/products">
<button style={buttonStyle}>SEARCH ITEM</button>
</Link>

<Link href="/contact">
<button style={buttonStyle}>CONTACT US</button>
</Link>

<Link href="/about">
<button style={buttonStyle}>ABOUT US</button>
</Link>

<Link href="/why-us">
<button style={buttonStyle}>WHY US</button>
</Link>

<Link href="/social-media">
<button style={buttonStyle}>SOCIAL MEDIA</button>
</Link>
</div>
</div>

{/* BRAND TICKER */}

<div
style={{
position: "fixed",
bottom: "0px",
width: "100%",
overflow: "hidden",
whiteSpace: "nowrap",
textAlign: "center",
color: "#c7d4e8",
letterSpacing: "2px",
fontSize: "15px",
fontWeight: "500",
opacity: "0.9"
}}
>
SKF • FAG • NTN • KOYO • TIMKEN • NSK • INA • NACHI • RHP • URB • SKF • FAG • NTN • KOYO • TIMKEN • NSK • INA • NACHI • RHP • URB
</div>

</>
);
}
