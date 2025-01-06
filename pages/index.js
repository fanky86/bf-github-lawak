import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", amount: "" });

  // Menangani perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/create-transaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.token) {
      window.snap.pay(result.token, {
        onSuccess: function () {
          window.location.href = "/success";
        },
        onPending: function () {
          alert("Pembayaran sedang diproses.");
        },
        onError: function () {
          alert("Terjadi kesalahan. Coba lagi.");
        },
      });
    } else {
      alert("Gagal membuat transaksi.");
    }
  };

  // Menambahkan script Snap Midtrans
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY);
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Pembayaran</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Jumlah (Rp):</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px" }}
          />
        </div>
        <button type="submit" style={{ padding: "5px 10px" }}>
          Bayar
        </button>
      </form>
    </div>
  );
}
