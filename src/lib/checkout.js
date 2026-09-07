export async function startCheckout(items) {
  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Unable to start checkout.");
  }

  window.location.href = data.url;
}
