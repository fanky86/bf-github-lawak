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
      isProduction: false, // Ganti ke true untuk produksi
      serverKey: process.env.MIDTRANS_SERVER_KEY,
    });

    const transaction = {
      transaction_details: {
        order_id: `ORDER-${Date.now()}`,
        gross_amount: parseInt(amount),
      },
      customer_details: {
        first_name: name,
        email: email,
      },
    };

    try {
      const transactionToken = await snap.createTransaction(transaction);
      res.status(200).json({ token: transactionToken.token });
    } catch (error) {
      console.error("Error membuat transaksi:", error);
      res.status(500).json({ error: "Gagal membuat transaksi." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Metode ${req.method} tidak diizinkan.`);
  }
}
