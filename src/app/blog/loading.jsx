import React from "react";

const Loading = () => {
  return (
    <div className="p-10">
      <div className="h-8 w-1/2 bg-gray-300 rounded animate-pulse mb-6"></div>

      <div className="grid gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <div key={n} className="p-4 border rounded">
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-gray-500 text-sm">
        Sedang memuat data dari API...
      </p>
    </div>
  );
};

export default Loading;
