const ALL_SURAH_URL = "https://equran.id/api/surat";
const SURAH_DETAIL_URL = (id) => `https://equran.id/api/surat/${id}`;

// Mengambil daftar semua surah dari API
export async function fetchAllSurahs() {
  try {
    const response = await fetch(ALL_SURAH_URL);
    if (!response.ok) throw new Error("Gagal mengambil daftar surah.");
    return await response.json();
  } catch (error) {
    console.error("API Error (fetchAllSurahs):", error);
    return []; // Kembalikan array kosong jika gagal
  }
}

// Mengambil detail surah spesifik dari API berdasarkan ID
export async function fetchSurahDetails(id) {
  try {
    const response = await fetch(SURAH_DETAIL_URL(id));
    if (!response.ok) throw new Error(`Gagal mengambil detail surah ${id}.`);
    return await response.json();
  } catch (error) {
    console.error("API Error (fetchSurahDetails):", error);
    return null; // Kembalikan null jika gagal
  }
}
