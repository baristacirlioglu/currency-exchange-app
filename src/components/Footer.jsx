import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-2 bg-gray-900 text-white text-center text-sm">
      © {new Date().getFullYear()} Barış Tacirlioğlu. Tüm hakları saklıdır.
    </footer>
  );
}

export default Footer;
