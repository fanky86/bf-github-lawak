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

  // CSS inline dalam objek
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "20px",
    },
    heading: {
      fontSize: "36px",
      marginBottom: "30px",
      animation: "fadeIn 1s ease-out",
    },
    form: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      animation: "slideIn 0.8s ease-out",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      fontSize: "16px",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      boxSizing: "border-box",
      transition: "background-color 0.3s",
    },
    submitButton: {
      padding: "10px 20px",
      backgroundColor: "#2575fc",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Pembayaran</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Jumlah (Rp):</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Bayar
        </button>
      </form>
    </div>
  );
}
