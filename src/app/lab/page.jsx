import LikeButton from "../../../components/LikeButton";

export default function LabPage() {
  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-10">Laboratorium Tes Komponen</h1>
      
      {/* Pasang Komponen Kamu Disini */}
      <div className="border p-10 bg-white rounded shadow-lg">
        <LikeButton />
      </div>

    </div>
  );
}