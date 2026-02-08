"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  // useFormStatus digunakan untuk mengetahui status pengiriman form
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`py-2 px-4 rounded font-bold text-black transition-all ${pending ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 shadow-lg"}`}
    >
      {pending ? "Sedang Mengirim..." : "Kirim Pesan"}
    </button>
  );
};

export default SubmitButton;
