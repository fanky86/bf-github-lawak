# Save the nicely formatted README.md content to a file
readme_content = """<h1 align="center">🔐 FANKY B‑GITHUB</h1>
<p align="center">
  <b>Brute-force educational tool for GitHub login testing</b><br>
  <sub>🚧 <b>Masih dalam tahap pengembangan</b> — gunakan hanya untuk pembelajaran</sub>
</p>

---

## ⚠️ CATATAN
> Tools ini masih dalam tahap pengembangan.  
> Jika crack gagal semua, itu karena sistem keamanan GitHub saat ini sangat ketat dan brute-force semakin sulit berhasil.

---

## 📌 Deskripsi

Script Python ini digunakan untuk mencoba brute-force login GitHub dari daftar followers atau following.  
Cocok untuk edukasi dan eksperimen pribadi dalam bidang keamanan akun GitHub.

---

## ✨ Fitur

- 🔍 Scrape followers/following dari akun target
- 🧠 Generator password otomatis (nama depan + kombinasi angka)
- 🛡️ Random User-Agent & header browser asli
- ⚙️ Multi-threaded (30 thread) dengan progress bar
- 🕵️ Deteksi akun dengan 2FA (Checkpoint)
- ⏱️ Delay otomatis jika terjadi spam/block (10 detik)
- 📁 Simpan hasil ke `OK.txt` dan `CP.txt`

---

## 🧩 Instalasi

```bash
pip install requests rich
