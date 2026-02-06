import React from "react";
import LikeButton from "../../../../components/LikeButton";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Kita fetch sebentar judulnya (Next.js otomatis meng-cache ini, jadi tidak berat)
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
  );
  const post = await response.json();

  return {
    title: post.title,
    description: `Baca selengkapnya tentang ${post.title}`,
  };
}

const BlogPost = async ({ params }) => {
  const { slug } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
  );
  const post = await response.json();

  if (!post.id) {
    return (
      <div className="p-10">
        <div className="text-red-500 font-bold">Artikel tidak ditemukan!</div>
        <a href="/blog" className="text-blue-500 mb-4 inline-block">
          &larr; Kembali
        </a>
      </div>
    );
  }

  return (
    <div className="p-10  max-w-2xl">
      <a href="/blog" className="text-blue-500 mb-4 inline-block">
        &larr; Kembali
      </a>
      <h1 className="text-4xl font-bold capitalize mb-4">{post.title}</h1>

      <p className="text-gray-700 leading-relaxed text-lg border-l-4 border-blue-500 pl-4">
        {post.body}
      </p>

      <LikeButton />

      <div className="mt-8 text-sm text-gray-400">
        Post ID: {post.id} | Diambil dari JSONPlaceholder
      </div>
    </div>
  );
};

export default BlogPost;
