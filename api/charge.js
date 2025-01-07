// /api/charge.js
const midtransClient = require('midtrans-client');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Ambil environment variables
      const serverKey = process.env.MIDTRANS_SERVER_KEY;
      const clientKey = process.env.MIDTRANS_CLIENT_KEY;

      // Inisialisasi Midtrans API
      const snap = new midtransClient.Snap({
        isProduction: false, // Ganti ke true jika sudah siap production
        serverKey: serverKey,
        clientKey: clientKey,
      });

      // Parameter transaksi yang dikirim ke Midtrans
      const parameter = {
        transaction_details: {
          order_id: 'ORDER-' + new Date().getTime(),
          gross_amount: 100000, // Ganti dengan jumlah yang sesuai
        },
        credit_card: {
          secure: true,
        },
      };

      // Membuat transaksi
      const transaction = await snap.createTransaction(parameter);

      // Mengirimkan response transaksi
      res.status(200).json(transaction);
    } catch (error) {
      console.error(error);
      res.status(500).send('Terjadi kesalahan: ' + error.message);
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
