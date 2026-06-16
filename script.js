(function dropCookies() {
    "pixel_v4_engaged",
    "free_shipping_eligible",
    "no_promo_active",
    "true_active",
    "organic_search_google",
  ];
  cookies.forEach((cookie, index) => {
    document.cookie = `__clarity_cookie_${index + 1}=${cookie};SameSite=Lax`;
  });
})();
