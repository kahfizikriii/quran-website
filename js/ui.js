// Fungsi untuk menampilkan sapaan kepada pengguna
export function displayGreeting(name) {
  const greetingElement = document.getElementById("greeting");
  if (greetingElement && name) {
    greetingElement.textContent = `Assalamu'alaikum, ${name}!💫`;
  }
}

// Mengisi pilihan dropdown dengan daftar surah
export function populateSurahDropdown(surahs) {
  const surahSelect = document.getElementById("surah-select");
  surahSelect.innerHTML = '<option value="">-- Pilih Surah --</option>';
  surahs.forEach((surah) => {
    const option = document.createElement("option");
    option.value = surah.nomor;
    option.textContent = `${surah.nomor}. ${surah.nama_latin} (${surah.arti})`;
    surahSelect.appendChild(option);
  });
}

// Menampilkan detail surah dan ayat-ayatnya dengan animasi
export function renderSurahDetails(surah) {
  const surahDetailsContainer = document.getElementById("surah-details");
  if (!surah) {
    surahDetailsContainer.innerHTML = `<p style="color: red; text-align: center;">Gagal memuat detail surah.</p>`;
    return;
  }

  const infoCard = `
        <div class="surah-info-card animate fade-in-up">
            <h2>${surah.nama_latin} - ${surah.nama}</h2>
            <p class="arti">"${surah.arti}"</p>
            <div class="deskripsi">${surah.deskripsi}</div>
        </div>
    `;

  // ✨ Di sinilah animasi stagger (bertingkat) dibuat ✨
  const ayatCards = surah.ayat
    .map(
      (ayat, index) => `
        <div class="ayat-card animate fade-in-up" style="animation-delay: ${
          index * 100
        }ms;">
            <div class="ayat-header">Ayat ${ayat.nomor}</div>
            <p class="ayat-ar">${ayat.ar}</p>
            <p class="ayat-tr">${ayat.tr}</p>
            <p class="ayat-idn"><b>Artinya:</b> ${ayat.idn}</p>
        </div>
    `
    )
    .join("");

  surahDetailsContainer.innerHTML = infoCard + ayatCards;
}

// Mengatur tampilan loading
export function toggleLoader(show) {
  const loader = document.getElementById("loader");
  loader.style.display = show ? "block" : "none";
}

// Menghapus konten surah yang ada
export function clearSurahDetails() {
  const surahDetailsContainer = document.getElementById("surah-details");
  surahDetailsContainer.innerHTML = "";
}
