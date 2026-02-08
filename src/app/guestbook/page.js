import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import SubmitButton from "../../../components/SubmitButton";

const prisma = new PrismaClient();

const GuestbookPage = async () => {
  // Ambil Data (Read)
  const comments = await prisma.guestbook.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // --- SERVER ACTION 1: Tambah Pesan ---
  const submitPesan = async (formData) => {
    "use server";

    const nama = formData.get("nama");
    const pesan = formData.get("pesan");

    // Validasi jika input kosong
    if (!nama || !pesan || nama.trim() === "" || pesan.trim() === "") {
      console.log("Input tidak valid!");
      return;
    }

    // Simpan data
    await prisma.guestbook.create({
      data: { nama, pesan },
    });
    console.log("Data tersimpan:", nama, pesan);
    revalidatePath("/guestbook");
  };

  // --- SERVER ACTION 2: Delete Pesan ---
  const deleteEntry = async (formData) => {
    "use server";

    const idToDelete = formData.get("id");

    await prisma.guestbook.delete({
      where: {
        id: idToDelete,
      },
    });

    revalidatePath("/guestbook");
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Buku Tamu</h1>

      {/* FORM INPUT */}
      <form
        action={submitPesan}
        className="flex flex-col gap-4 border p-6 rounded-lg shadow bg-white mb-10"
      >
        <div>
          <label className="block text-sm font-bold mb-2">Nama Kamu</label>
          <input
            type="text"
            name="nama"
            placeholder="Tulis nama..."
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Pesan</label>
          <textarea
            name="pesan"
            placeholder="Tulis pesan..."
            className="w-full p-2 border rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="flex justify-end">
          <SubmitButton />
        </div>
      </form>

      {/* DAFTAR PESAN (Output) */}
      <h2 className="text-xl font-bold mb-4 text-center">
        Daftar Pesan ({comments.length})
      </h2>

      <div className="flex flex-col gap-4">
        {comments.map((item) => (
          <div
            key={item.id}
            className="relative border-l-4 border-blue-500 bg-gray-50 p-4 rounded shadow flex flex-col"
          >
            <form action={deleteEntry} className="absolute top-2 right-2">
              <input type="hidden" name="id" value={item.id} />
              <button
                type="submit"
                className="text-gray-400 hover:text-red-500 transition-colors font-bold text-xl"
                title="Hapus Pesan Ini"
              >
                &times;
              </button>
            </form>
            <div className="font-bold text-lg ">{item.nama}</div>
            <div className="text-gray-600 mt-1">{item.pesan}</div>
            <div className="text-xs text-gray-400 mt-2 self-end">
              {item.createdAt
                ? new Date(item.createdAt).toLocaleDateString()
                : ""}
            </div>
          </div>
        ))}

        {comments.length === 0 && (
          <p className="text-gray-400 italic text-center">Belum ada pesan.</p>
        )}
      </div>
    </div>
  );
};

export default GuestbookPage;
