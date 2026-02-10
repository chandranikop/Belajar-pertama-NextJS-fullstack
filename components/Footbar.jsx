import Link from "next/link";
import React from "react";

const Footbar = () => {
  return (
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Kolom 1 --> */}
          <div>
            <h3 class="font-semibold text-lg mb-3">Tentang Kami</h3>
            <p class="text-gray-400 text-sm">Belajar Next Js</p>
          </div>

          {/* <!-- Kolom 2 --> */}
          <div>
            <h3 class="font-semibold text-lg mb-3">Link Cepat</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  class="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  class="text-gray-400 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  class="text-gray-400 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/guestbook"
                  className="text-gray-400 hover:text-white transition"
                >
                  Guestbook
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Kolom 3 --> */}
          <div>
            <h3 class="font-semibold text-lg mb-3">Kontak</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>Email: test@example.com</li>
              <li>Telepon: +62 123 4567</li>
              <li>Alamat: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div class="border-t border-gray-700 mt-6 pt-4 text-center">
          <p class="text-gray-400 text-sm">
            &copy; 2024 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footbar;
