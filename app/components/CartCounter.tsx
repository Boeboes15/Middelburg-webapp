"use client";

import { useEffect, useState } from "react";
import { cartCount } from "../utils/cart";

export default function CartCounter() {

const [count, setCount] = useState(0);

useEffect(() => {

const updateCart = () => {
  setCount(cartCount());
};

updateCart();

window.addEventListener("cartUpdated", updateCart);

return () => window.removeEventListener("cartUpdated", updateCart);

}, []);

return <>Quote Cart ({count})</>;
}
