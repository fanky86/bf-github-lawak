const MidtransClient = require('midtrans-client');

const serverKey = process.env.MIDTRANS_SERVER_KEY;
const client = new MidtransClient.CoreApi({
  isProduction: false,  // Gunakan false untuk mode sandbox
  serverKey: serverKey,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

module.exports = async (req, res) => {
  try {
    const chargeRequest = {
      payment_type: 'credit_card',
      transaction_details: {
        order_id: 'order-' + Math.floor(Math.random() * 1000000),
        gross_amount: 100000, // contoh nominal
      },
      credit_card: {
        secure: true,
      },
    };

    const chargeResponse = await client charge(chargeRequest);

    res.status(200).json(chargeResponse);
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat memproses pembayaran' });
  }
};
