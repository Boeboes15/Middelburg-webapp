export function getCart() {
  const cart = localStorage.getItem("quoteCart");
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(item: any) {

 const cart = JSON.parse(localStorage.getItem("quoteCart") || "[]"); 
  cart.push(item);

localStorage.setItem("quoteCart", JSON.stringify(cart));

  // THIS LINE FIXES THE COUNTER
  window.dispatchEvent(new Event("cartUpdated"));
}

export function removeFromCart(code: string) {
  let cart = getCart();
  cart = cart.filter((item: any) => item.code !== code);
  localStorage.setItem("quoteCart", JSON.stringify(cart));
}

export function cartCount() {
  return getCart().length;
}