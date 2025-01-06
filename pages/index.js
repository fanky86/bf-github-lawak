import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", amount: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/create-transaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.token) {
      // Redirect to Midtrans payment page
      window.snap.pay(result.token, {
        onSuccess: function () {
          window.location.href = "/success";
        },
        onPending: function () {
          alert("Menunggu pembayaran.");
        },
        onError: function () {
          alert("Terjadi kesalahan, coba lagi.");
        },
      });
    } else {
      alert("Gagal membuat transaksi.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Pembayaran</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Jumlah (Rp):</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Bayar</button>
      </form>
    </div>
  );
}
