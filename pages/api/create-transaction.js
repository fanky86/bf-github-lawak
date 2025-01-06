const midtransClient = require("midtrans-client");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, amount, email } = req.body;

    // Validasi data
    if (!name || !amount || amount <= 0 || !email) {
      return res.status(400).json({ error: "Data tidak valid." });
    }

    // Konfigurasi Midtrans
    const snap = new midtransClient.Snap({
      isProduction: true, // Ganti ke true untuk mode produksi
      serverKey: process.env.MIDTRANS_SERVER_KEY, // Gantilah dengan Server Key Anda
    });

    const transaction = {
      transaction_details: {
        order_id: `ORDER-${Date.now()}`, // ID pesanan unik
        gross_amount: parseInt(amount), // Jumlah pembayaran
      },
      customer_details: {
        first_name: name, // Nama pengguna
        email: email, // Email pengguna yang dikirim dari frontend
      },
    };

    try {
      // Membuat transaksi dengan Midtrans
      const transactionToken = await snap.createTransaction(transaction);
      // Kirim token transaksi ke frontend untuk diproses
      res.status(200).json({ token: transactionToken.token });
    } catch (error) {
      // Menampilkan detail error untuk membantu debugging
      console.error("Gagal membuat transaksi:", error);
      res.status(500).json({ error: `Gagal membuat transaksi: ${error.message}` });
    }
  } else {
    // Mengatur method yang diizinkan
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Metode ${req.method} tidak diizinkan.`);
  }
}
