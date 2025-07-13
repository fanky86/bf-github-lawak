<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>FANKY B-GITHUB - Brute Force GitHub</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #0d1117;
      color: #c9d1d9;
      line-height: 1.6;
      padding: 30px;
    }
    h1, h2, h3 {
      color: #58a6ff;
    }
    a {
      color: #58a6ff;
      text-decoration: none;
    }
    code {
      background-color: #161b22;
      padding: 2px 6px;
      border-radius: 4px;
      color: #d2a8ff;
    }
    pre {
      background-color: #161b22;
      padding: 10px;
      border-radius: 6px;
      overflow-x: auto;
    }
    .tag {
      background-color: #238636;
      padding: 2px 6px;
      border-radius: 4px;
      color: white;
      font-size: 0.8rem;
    }
    .warning {
      background-color: #d29922;
      padding: 10px;
      border-radius: 6px;
      color: black;
      font-weight: bold;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>

  <h1>🔐 FANKY B-GITHUB</h1>
  <p><span class="tag">Python 3.x</span> &nbsp; <span class="tag">CLI Tool</span> &nbsp; <span class="tag">Brute Force</span></p>

  <div class="warning">
    ⚠️ CATATAN: Tools ini masih dalam tahap pengembangan.<br>
    Jika hasil crack gagal semua atau tidak ada yang berhasil login, itu karena sistem keamanan GitHub saat ini sangat ketat dan hampir tidak bisa dibobol dengan metode ini.
  </div>

  <h2>📌 Deskripsi</h2>
  <p>FANKY B-GITHUB adalah tool berbasis Python untuk mencoba brute-force login akun GitHub berdasarkan daftar followers atau following dari target. Program ini menggabungkan scraping HTML, random password generator, dan eksekusi paralel multi-threading.</p>

  <h2>✨ Fitur</h2>
  <ul>
    <li>Ambil <code>followers</code> atau <code>following</code> dari target GitHub.</li>
    <li>Password otomatis berdasarkan nama depan dan variasi angka.</li>
    <li>Penggunaan <code>user-agent</code> acak mirip browser asli.</li>
    <li>Deteksi 2FA (checkpoint).</li>
    <li>Delay otomatis jika kena spam atau block sementara dari GitHub.</li>
    <li>Multi-threaded dengan ProgressBar dari <code>rich</code>.</li>
  </ul>

  <h2>🧩 Dependency</h2>
  <pre><code>pip install requests rich</code></pre>

  <h2>⚙️ Cara Penggunaan</h2>
  <pre><code>python3 script.py</code></pre>
  <p>Kamu akan diminta input username target GitHub, memilih followers/following, dan opsi brute semua atau akun tertentu.</p>

  <h3>Contoh:</h3>
  <pre><code>
👤 Target GitHub: torvalds
📌 Pilih 1 atau 2: 1
📋 Total akun ditemukan: 132
📌 Pilih mode (1/2): 1
  </code></pre>

  <h2>📁 Struktur Output</h2>
  <ul>
    <li><code>OK.txt</code> - Berisi akun yang berhasil login.</li>
    <li><code>CP.txt</code> - Berisi akun yang terkena 2FA atau checkpoint.</li>
  </ul>

  <h2>🛑 Disclaimer</h2>
  <p>
    Tool ini dibuat untuk tujuan edukasi dan riset keamanan. Penggunaan terhadap akun tanpa izin adalah tindakan ilegal. 
    <strong>Segala penyalahgunaan bukan tanggung jawab pembuat.</strong>
  </p>

  <h2>👨‍💻 Developer</h2>
  <ul>
    <li><strong>Nama:</strong> Fanky</li>
    <li><strong>Alias:</strong> Garuda Phantom</li>
    <li><strong>Github:</strong> <a href="https://github.com/fanky86" target="_blank">github.com/fanky86</a></li>
    <li><strong>Website:</strong> <a href="https://fankyxd.xyz" target="_blank">https://fankyxd.xyz</a></li>
  </ul>

</body>
</html>
