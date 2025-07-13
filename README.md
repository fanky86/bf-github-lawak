<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>FANKY B‑GITHUB</title>
  <style>
    body { font-family: sans-serif; padding: 2rem; background: #f6f8fa; color: #24292e; }
    h1,h2,h3 { color: #0366d6; }
    pre { background: #e1e4e8; padding: 1rem; overflow-x: auto; }
    table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
    th,td { border: 1px solid #d1d5da; padding: 0.5rem; text-align: left; }
    .warning { background: #ffd33d; padding: 1rem; margin-bottom: 1rem; border-left: 4px solid #f66a0a; }
  </style>
</head>
<body>

<h1>🔐 FANKY B‑GITHUB</h1>

<div class="warning">
  ⚠️ <strong>CATATAN:</strong> Tools ini <em>masih dalam tahap pengembangan</em>. Jika crack gagal semua, itu karena <strong>sistem keamanan GitHub saat ini sangat ketat</strong> dan brute-force semakin sulit.
</div>

<h2>📌 Deskripsi</h2>
<p>Script Python untuk mencoba brute-force login akun GitHub dari daftar <em>followers</em> atau <em>following</em> target. Sangat berguna untuk edukasi dan riset keamanan.</p>

<h2>✨ Fitur</h2>
<ul>
  <li>Scrape followers/following akun target</li>
  <li>Generator password otomatis (nama depan + kombinasi angka)</li>
  <li>Random <code>User‑Agent</code> dan header ala browser</li>
  <li>Multi-threaded (30 thread) dengan progress bar interaktif</li>
  <li>Deteksi 2FA (Checkpoint)</li>
  <li>Delay otomatis jika ada blok/spam (10 detik)</li>
  <li>Menyimpan output ke <code>OK.txt</code> & <code>CP.txt</code></li>
</ul>

<h2>🧩 Instalasi</h2>
<pre><code>pip install requests rich</code></pre>

<h2>⚙️ Penggunaan</h2>
<pre><code>python3 script.py</code></pre>
<p>Lalu ikuti prompt selanjutnya:</p>
<pre><code>
👤 Target GitHub: torvalds
1. Followers
2. Following
📌 Pilih 1 atau 2: 1
📋 Total akun ditemukan: ...
📌 Pilih mode (1/2): 1
</code></pre>

<h2>📁 Output</h2>
<table>
  <tr><th>File</th><th>Keterangan</th></tr>
  <tr><td><code>OK.txt</code></td><td>Akun berhasil login</td></tr>
  <tr><td><code>CP.txt</code></td><td>Akun kena Checkpoint (2FA)</td></tr>
</table>

<h2>📜 Catatan</h2>
<ul>
  <li>GitHub sangat membatasi brute-force — hasilnya tidak selalu berhasil.</li>
  <li>Gunakan untuk belajar dan testing akun milik sendiri.</li>
  <li>Script hanya mencatat sukses/CP; gagal tidak disimpan.</li>
</ul>

<h2>🛑 Disclaimer</h2>
<p>Tool ini hanya untuk **pembelajaran & riset keamanan pribadi**. Jangan gunakan untuk login akun orang lain tanpa izin—itu ilegal. Penulis tidak bertanggung jawab atas penyalahgunaan.</p>

<h2>👨‍💻 Developer</h2>
<ul>
  <li>Nama: Fanky (Garuda Phantom)</li>
  <li>GitHub: <a href="https://github.com/fanky86">fanky86</a></li>
  <li>Website: <a href="https://fankyxd.xyz">fankyxd.xyz</a></li>
  <li>Email: radenmanis123@gmail.com</li>
</ul>

<hr>
<p>⭐ Kalau suka, kasih Star. Fork project ini untuk bantu kembangkan! 💪</p>

</body>
</html>
