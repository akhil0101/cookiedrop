(function dropCookies() {
  // 1. A pool of delicious cookie names
  const cookies = [
    "pixel_v4_engaged",
    "free_shipping_eligible",
    "no_promo_active",
    "true_active",
    "Peanuttech_enthusiastsButter",
  ];

  // 3. Drop the session cookies (No expires attribute means they die when the browser closes)
  cookies.forEach((cookie, index) => {
    document.cookie = `__clarity_cookie_${index + 1}=${cookie};SameSite=Lax`;
  });
})();
