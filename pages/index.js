import { useState, useEffect } from "react";
import "./styles.css";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", amount: "", email: "" });

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
      window.snap.pay(result.token, {
        onSuccess: function () {
          alert("Pembayaran berhasil!");
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
      alert(result.error || "Gagal membuat transaksi.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY);
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Pembayaran</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Jumlah (Rp)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          Bayar
        </button>
      </form>
    </div>
  );
}
