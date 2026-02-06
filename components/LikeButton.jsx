"use client";
import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="mt-8 border-t pt-4">
      <button
        onClick={handleLike}
        className={`px-4 py-2 rounded font-bold transition-all ${
          isLiked
            ? "bg-red-500 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        {isLiked ? "❤️ Terimakasih!" : "👍 Suka Artikel Ini?"}
      </button>

      <p className="mt-2 text-sm text-gray-500">Jumlah Likes: {likes}</p>
    </div>
  );
};

export default LikeButton;
