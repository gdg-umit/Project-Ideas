document.addEventListener('DOMContentLoaded', function() {
    const adSelectors = [
      'iframe[src*="doubleclick"]',
      'iframe[src*="googlesyndication"]',
      '.ad-banner',
      '.ad-box',
      'div[class*="advertisement"]'
    ];
  
    adSelectors.forEach(selector => {
      const ads = document.querySelectorAll(selector);
      ads.forEach(ad => ad.remove());
    });
  });
  