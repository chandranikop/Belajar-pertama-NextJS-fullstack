import Link from "next/link";
import React from "react";

const BlockList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Daftar Artikel (Dari API)</h1>

      <div className="grid gap-4">
        {/*looping data posts dari API */}
        {posts.slice(0, 10).map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="block p-4 border rounded hover:bg-gray-100 transition"
          >
            <h2 className="font-bold text-lg capitalize">{post.title}</h2>
            <p className="text-gray-500 text-sm mt-1">
              Klik untuk baca selengkapnya &rarr;
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlockList;
