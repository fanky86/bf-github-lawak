import { useState, useEffect } from "react";
import styles from "./Home.module.css"; // Import CSS module untuk styling

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
    <div className={styles.container}>
      <h1 className={styles.heading}>Pembayaran</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Jumlah (Rp):</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Bayar
        </button>
      </form>
    </div>
  );
}
