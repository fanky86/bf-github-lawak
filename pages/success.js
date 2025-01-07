import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    // Tambahkan animasi atau efek masuk saat halaman dimuat
    const successMessage = document.getElementById("success-message");
    successMessage.classList.add("fade-in");
  }, []);

  return (
    <div style={styles.container}>
      <div id="success-message" style={styles.messageContainer}>
        <h1 style={styles.title}>Pembayaran Berhasil!</h1>
        <p style={styles.description}>
          Terima kasih atas pembayaran Anda. Transaksi Anda telah berhasil diproses.
        </p>
        <button style={styles.button} onClick={() => (window.location.href = "/")}>
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}

// Gaya CSS dalam JavaScript
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff", // Warna latar belakang
    fontFamily: "Arial, sans-serif",
  },
  messageContainer: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    animation: "fadeIn 1s ease-in-out", // Animasi masuk
  },
  title: {
    fontSize: "2em",
    color: "#4caf50", // Warna hijau sukses
  },
  description: {
    fontSize: "1.2em",
    color: "#333333",
    marginTop: "10px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1em",
    color: "#ffffff",
    backgroundColor: "#4caf50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

// Tambahkan animasi CSS ke `globals.css`
/*
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
*/
