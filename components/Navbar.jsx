import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">WebSaya</div>

      <div className="flex gap-4">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/blog" className="hover:text-gray-300">
          Blog
        </Link>
        <Link
          href="/guestbook"
          className="hover:text-gray-300 text-yellow-100 font-bold"
        >
          Guestbook
        </Link>
      </div>
    </nav>
  );
}
