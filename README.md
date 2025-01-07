<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Pembayaran Online</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px;">

    <h1 style="color: #2c3e50;">Pembayaran Online dengan Midtrans</h1>

    <p>
        Aplikasi ini adalah proyek sederhana untuk memproses pembayaran online menggunakan integrasi 
        <strong>Midtrans Snap</strong>. Dibangun dengan framework <strong>Next.js</strong>.
    </p>

    <h2 style="color: #3498db;">Fitur</h2>
    <ul>
        <li>Formulir pembayaran dengan validasi.</li>
        <li>Integrasi dengan Midtrans (sandbox dan produksi).</li>
        <li>Desain responsif dan modern dengan animasi pada tombol.</li>
        <li>Dukungan aksesibilitas untuk semua pengguna.</li>
    </ul>

    <h2 style="color: #3498db;">Prasyarat</h2>
    <p>Sebelum menjalankan proyek ini, pastikan Anda telah memiliki:</p>
    <ol>
        <li><strong>Node.js</strong> (versi terbaru disarankan).</li>
        <li>Akun <strong>Midtrans</strong>:
            <ul>
                <li><a href="https://midtrans.com/" target="_blank">Daftar di Midtrans</a></li>
                <li>Ambil <code>Server Key</code> dan <code>Client Key</code> dari dashboard Midtrans.</li>
            </ul>
        </li>
        <li><strong>Next.js</strong> (terpasang melalui <code>package.json</code>).</li>
    </ol>

    <h2 style="color: #3498db;">Instalasi</h2>
    <h3>1. Clone Repository</h3>
    <pre style="background-color: #f4f4f4; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
git clone https://github.com/username/repo-name.git
cd repo-name
    </pre>

    <h3>2. Instal Dependensi</h3>
    <pre style="background-color: #f4f4f4; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
npm install
    </pre>

    <h3>3. Tambahkan Environment Variables</h3>
    <p>
        Buat file <code>.env.local</code> di root proyek Anda dan tambahkan variabel berikut:
    </p>
    <pre style="background-color: #f4f4f4; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
MIDTRANS_SERVER_KEY=your_server_key
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=your_client_key
    </pre>

    <h3>4. Jalankan Aplikasi</h3>
    <pre style="background-color: #f4f4f4; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
npm run dev
    </pre>
    <p>Akses aplikasi di <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>

    <h2 style="color: #3498db;">Lisensi</h2>
    <p>Proyek ini dilisensikan di bawah <strong>MIT License</strong>.</p>

</body>
</html>
