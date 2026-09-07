export function getCartItems() {
  const items = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("cart")) {
      try {
        const product = JSON.parse(localStorage.getItem(key));
        if (product) {
          items.push({
            ...product,
            quantity: product.quantity || 1,
          });
        }
      } catch {
        // skip invalid entries
      }
    }
  }

  return items;
}

export function saveCartItem(product, quantity = 1) {
  const cartKey = `cart_${product.id}`;
  localStorage.setItem(
    cartKey,
    JSON.stringify({ ...product, quantity })
  );
}

export function clearCart() {
  const keysToRemove = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("cart")) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach((key) => localStorage.removeItem(key));
}
