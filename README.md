# Lawatan Ladang — Panduan

## Fail dalam folder ini
| Fail | Fungsi |
|---|---|
| `index.html` | App utama (buka ini) |
| `sw.js`, `manifest.json`, `icon-*.png` | Untuk offline & "Add to Home Screen" (bila di GitHub) |
| `logo.jpg` | Logo Masih Jaya Group (juga sudah dimasukkan dalam app) |
| `google-drive-sync.gs` | Skrip sync Google Drive (pilihan, langkah 3) |

---

## Langkah 1 — Guna di PC dahulu
1. Extract zip ke satu folder, contoh `Documents\Lawatan Ladang`.
2. Double-click `index.html` (guna Chrome atau Edge). Logo sudah ada dalam app.

Semua data (maklumat, gambar, caption) **disimpan automatik dalam PC** setiap kali anda menaip.
Tutup browser, restart PC — semuanya masih ada. Senarai lawatan lama di sebelah kiri.

> Nota: Kali pertama buka, perlu internet sekali supaya pustaka PDF dimuatkan.
> Jangan padam data browser (Clear browsing data → "Cookies and site data"), itu akan memadam lawatan yang disimpan.

## Langkah 2 — Letak di GitHub Pages (untuk telefon & offline)
1. Daftar / log masuk di https://github.com
2. **New repository** → nama `lawatan-ladang` → Public → Create.
3. **Add file → Upload files** → seret semua fail (termasuk `logo.jpg`) → Commit.
4. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
5. Tunggu 1–2 minit. Pautan: `https://NAMA-ANDA.github.io/lawatan-ladang/`
6. Di telefon: buka pautan dengan internet sekali → menu ⋮ → **Add to Home screen**.
   Selepas itu app boleh dibuka di ladang **tanpa internet**.

> Data di PC dan data di telefon adalah berasingan (setiap peranti simpan sendiri). Sync (Langkah 3) menghantar kedua-duanya ke satu Google Drive.
> Bila anda kemas kini fail di GitHub, tukar `lawatan-ladang-v1` → `v2` dalam `sw.js` supaya telefon ambil versi baru.

## Langkah 3 — Sync automatik ke Google Drive (pilihan)
1. Buka https://script.google.com → **New project**.
2. Padam kod yang ada, tampal semua isi `google-drive-sync.gs`.
3. Tukar `TUKAR_KATA_KUNCI_INI` kepada kata kunci anda sendiri (contoh `ladang2026rahsia`). Klik 💾 Save.
4. **Deploy → New deployment** → ⚙️ *Select type* → **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   → Deploy → **Authorize access** → pilih akaun Google → *Advanced → Go to project (unsafe)* → Allow.
5. Salin **Web app URL** (berakhir dengan `/exec`).
6. Dalam app: ⚙️ → tampal URL & kata kunci → **Uji Sambungan** → **Simpan**.

### Cara guna sync
- Siap isi lawatan → tekan **☁️ Siap & Sync**.
- Ada internet → terus dihantar. Tiada internet → status **⏳ Belum sync**, dan akan dihantar sendiri bila internet kembali (semasa app dibuka).
- Dalam Google Drive: folder **Lawatan Ladang** → satu folder setiap lawatan, berisi gambar, `info.txt` (caption) dan PDF.
- Edit lawatan selepas sync → ia akan sync semula secara automatik (gambar yang dipadam juga dibuang dari Drive).
- Ramai pegawai boleh guna URL & kata kunci yang sama → semua masuk ke Drive anda.

---

## Menu sistem
| Menu | Fungsi |
|---|---|
| 🏠 Utama | Ringkasan bulan ini + lawatan terkini |
| 📋 Senarai Lawatan | Cari (semua bulan), tapis ikut Bulan / Ladang / Pegawai / Status. Klik **No. Dok** untuk buka. Klik **▸ 4** untuk lihat gambar |
| ➕ Lawatan Baru | Buka borang baru dalam tab baru |
| 📷 Gambar | Semua gambar, tapis ikut bulan & ladang |
| 📊 Laporan Bulanan | Jumlah ikut ladang & pegawai → PDF atau Excel (CSV) |
| ⚙️ Tetapan | Nama syarikat, nama anda, tajuk laporan, Rev, logo, senarai ladang/pegawai, sync |

### No. Dokumen / Doc numbers
Setiap pengguna ada nombor sendiri: `KOD-bil/bulan`, contoh **AL-1/11, AL-2/11** (Along) dan **DV-1/11** (David).
Kod disetkan dalam Tetapan → Pengguna (lajur *Kod No. Dok*). Nombor diberi terus bila lawatan baru dibuka.

### Tetapan lain
- **BM | EN** (atas kanan): bahasa sistem. **Bahasa PDF** boleh lain.
- **Tajuk Laporan**: satu setiap baris; pilih untuk setiap lawatan.
- **Logo & tajuk dalam PDF**: setiap muka surat, atau muka surat 1 sahaja.

### Log masuk (nama pengguna + kata laluan)
- **Kali pertama** buka: cipta akaun **Admin** (nama pengguna, nama penuh, kata laluan).
- Admin tambah pengguna lain di **Tetapan → Pengguna & Kata Laluan** (peranan *Admin* atau *Staf*). Staf tidak nampak menu Tetapan.
- Nama penuh pengguna diisi sendiri sebagai **Pegawai** dan **Dicipta oleh**. Boleh tambah pegawai lain (Enter untuk tambah, ✕ untuk buang).
- Klik **👤 NAMA** (bar atas) → *Tukar kata laluan* atau *Log keluar*.
- Lupa kata laluan: Admin tekan **🔑 Reset** pada pengguna itu.
- Ladang: susun urutan dengan **▲ ▼**.

> Penting: akaun pengguna disimpan **dalam peranti itu sahaja** (setiap PC/telefon ada senarai pengguna sendiri). Kata laluan disimpan dalam bentuk hash, tetapi ini kawalan akses ringan — bukan keselamatan pelayan.

### Kemas kini skrip Google Drive (versi ini)
`google-drive-sync.gs` ada tindakan baru (`trash`) untuk buang folder "WAITING" di Drive bila ia dilampir.
Jika sudah deploy sebelum ini: tampal semula kod → 💾 Save → **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**. Pautan /exec kekal sama.

### Telefon
- Telefon hanya tunjuk **Senarai Lawatan** dan **Gambar** (Utama, Laporan dan Tetapan di komputer).
- Ambil gambar tanpa internet → simpan dalam telefon → bila online, folder gambar dan lawatan dihantar sendiri ke Google Drive (app perlu dibuka).
