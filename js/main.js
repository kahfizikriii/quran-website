import { fetchAllSurahs, fetchSurahDetails } from "./api.js";
import { initializeTheme } from "./theme.js";
import {
  displayGreeting,
  populateSurahDropdown,
  renderSurahDetails,
  toggleLoader,
  clearSurahDetails,
} from "./ui.js";

// Fungsi utama yang akan dijalankan saat halaman dimuat
async function main() {
  initializeTheme();

  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("name");

  // Jika tidak ada nama di URL, kembalikan ke halaman awal
  if (!userName) {
    window.location.replace("index.html");
    return;
  }

  displayGreeting(userName);

  // Ambil semua surah dan isi dropdown
  const allSurahs = await fetchAllSurahs();
  if (allSurahs.length > 0) {
    populateSurahDropdown(allSurahs);
  }

  // Tambahkan event listener untuk dropdown
  const surahSelect = document.getElementById("surah-select");
  surahSelect.addEventListener("change", async (event) => {
    const surahId = event.target.value;
    if (!surahId) {
      clearSurahDetails();
      return;
    }

    clearSurahDetails();
    toggleLoader(true);

    const surahDetails = await fetchSurahDetails(surahId);

    toggleLoader(false);
    if (surahDetails) {
      renderSurahDetails(surahDetails);
    }
  });
}

// Jalankan fungsi utama setelah semua konten halaman siap
document.addEventListener("DOMContentLoaded", main);
