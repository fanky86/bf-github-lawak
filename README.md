<h1 align="center">🔐 FANKY B‑GITHUB</h1>
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
```

---

## ⚙️ Cara Penggunaan

```bash
python3 script.py
```

Ikuti petunjuk yang muncul:

```
👤 Target GitHub: torvalds
1. Followers
2. Following
📌 Pilih 1 atau 2: 1
📋 Total akun ditemukan: ...
📌 Pilih mode (1/2): 1
```

---

## 📁 Hasil Output

| File     | Keterangan                      |
|----------|----------------------------------|
| OK.txt   | Akun berhasil login              |
| CP.txt   | Akun dengan checkpoint (2FA)     |

---

## 📜 Catatan Penting

- Brute-force terhadap GitHub **sangat dibatasi** dan tingkat keberhasilan sangat kecil.
- Tools ini dibuat hanya untuk testing akun sendiri & pembelajaran.
- Hanya menyimpan hasil **berhasil (OK)** dan **checkpoint (CP)**.

---

## 🛑 Disclaimer

Tool ini hanya untuk **pembelajaran & riset keamanan pribadi**.  
❌ Jangan digunakan untuk login akun orang lain tanpa izin, karena **itu ilegal**.  
Penulis **tidak bertanggung jawab atas penyalahgunaan** script ini.

---

## 👨‍💻 Developer

- **Nama** : Fanky (Garuda Phantom)
- **GitHub** : [fanky86](https://github.com/fanky86)
- **Website** : [fankyxd.xyz](https://fankyxd.xyz)
- **Email** : radenmanis123@gmail.com

---

<p align="center">
  ⭐ Kalau suka, kasih <b>Star</b> ya!<br>
  🔁 Fork project ini untuk bantu pengembangan! 💪
</p>
