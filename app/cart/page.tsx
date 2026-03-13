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
${cart.map((item)=> `${item.code} - ${item.name}`).join("\n")}

Note:
${note}
`;

const whatsappURL =
`https://wa.me/27832711738?text=${encodeURIComponent(message)}`;

window.open(whatsappURL, "_blank");

}

return (

<div style={{padding:"40px",maxWidth:"700px",margin:"auto"}}>

<h2>Quote Cart</h2>

{cart.map((item:any)=>(

<div key={item.code}
style={{
border:"1px solid #ddd",
padding:"15px",
marginBottom:"10px",
borderRadius:"6px"
}}
>

<strong>{item.code}</strong>

<div>{item.name}</div>

<button
onClick={()=>handleRemove(item.code)}
style={{
marginTop:"10px",
background:"#dc2626",
color:"white",
border:"none",
padding:"6px 12px",
borderRadius:"4px",
cursor:"pointer"
}}

>

Remove </button>

</div>
))}

<hr style={{margin:"30px 0"}}/>

<h3>Request Quote</h3>

<input
placeholder="Name / Company Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{display:"block",marginBottom:"10px",width:"100%",padding:"10px"}}
/>

<input
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
style={{display:"block",marginBottom:"10px",width:"100%",padding:"10px"}}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{display:"block",marginBottom:"10px",width:"100%",padding:"10px"}}
/>

<textarea
placeholder="Note (optional)"
value={note}
onChange={(e)=>setNote(e.target.value)}
style={{display:"block",marginBottom:"15px",width:"100%",padding:"10px"}}
/>

<button
onClick={handleQuote}
style={{
background:"#2563eb",
color:"white",
border:"none",
padding:"10px 20px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Send Quote Request
</button>

</div>

);
}
