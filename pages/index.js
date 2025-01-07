import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", amount: "", email: "" });

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
    <html lang="id">
      <head>
        <title>Halaman Pembayaran</title>
      </head>
      <body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f9", margin: "0" }}>
        <header style={{ textAlign: "center", padding: "20px", backgroundColor: "#6200ea", color: "white" }}>
          <h1>Formulir Pembayaran</h1>
        </header>
        <main style={{ maxWidth: "600px", margin: "50px auto", padding: "20px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="name" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Nama:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="email" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="amount" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Jumlah (Rp):</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#6200ea",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4500b0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#6200ea")}
            >
              Bayar Sekarang
            </button>
          </form>
        </main>
        <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#6200ea", color: "white" }}>
          <p>&copy; 2025 FankyX Corp</p>
        </footer>
      </body>
    </html>
  );
}
