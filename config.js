/* Xozen: pengaturan model AI. Dipakai oleh index.html (landing) dan ai.html (aplikasi).
   Ubah di sini saja. Nilai times / premium / hidden / tarif di Supabase (xozen_settings: xoz_models,
   xoz_cost_tiers, xoz_daily_cap, xoz_premium_bonus) harus sama, karena server yang memotong xoz. */
window.XOZEN = {
  appUrl: "ai.html",
  adminUrl: "https://wa.me/6289523042979",                 // link WhatsApp/Telegram admin untuk beli premium, mis. https://wa.me/62xxxx

  // Kredensial API AI (dikelola di config.js saja, tidak tampil di pengaturan pengguna)
  apiBaseUrl: "https://bandelbanget.xyz/v1",
  apiKey: "sk-qwen-0bbc0ee57721a6ea1ed5ef25025c2e679cfda2abeafae303",

  // Mode Alkitab (/alkitab -> alkitab.html): memakai model "auto" dan tidak menerima lampiran file
  alkitab: {
    url: "alkitab.html",
    model: "auto",
    allowFiles: false
  },

  // name = nama tampil sekaligus id (unik)
  // real = nama model asli ke API (tidak ditampilkan di landing)
  // times = pengali pengurangan xoz, premium = true hanya untuk akun premium
  // hidden = true hanya tampil untuk akun admin (kategori Hidden)
  // desc = deskripsi singkat di landing
  models: [
      { name: "XozenAi",         real: "auto",                times: 1,   premium: false, desc: "Cepat dan hemat. Cocok untuk tanya jawab harian." },
    { name: "Xozen Flash",         real: "mimo-v2.5-pro",                times: 1.5,   premium: false, desc: "cocok untuk pekerjaan ringan dan memilah data" },
    { name: "Xozen Pro", real: "deepseek-v4.1-flash",          times: 2, premium: false, hidden: false, desc: "Model premium untuk tugas panjang dan rumit." },
    { name: "Xozen Magnesium 2.0", real: "deepseek-v4.1-flash-1017", times: 2,   premium: true, hidden: false,desc: "Lebih teliti untuk tulisan, ringkasan, dan kode ringan." },
    { name: "Xozen Titanium",      real: "glm-5.3-flash-mod",            times: 3.5, premium: true,desc: "Model untuk tugas berat." },
    { name: "Xozen Lithium 3.0",   real: "gemini-4-argon",               times: 25,  premium: false, hidden: true, desc: "Model khusus admin untuk tugas panjang dan rumit." }
  ],

  // Saldo xoz (hanya untuk tampilan landing, hitungan asli di server)
  xoz: {
    INITIAL: 5000,    // bonus sekali saat daftar
    DAILY: 1500,      // jatah harian, terisi lagi sampai batas ini
    PREMIUM: 10000,   // bonus saat premium pertama kali diaktifkan
    // pesan di bawah max huruf (termasuk spasi): base + acak(lo..hi), lalu x times model
    TIERS: [
      { max: 10,  base: 100, lo: 30, hi: 70 },
      { max: 20,  base: 200, lo: 20, hi: 60 },
      { max: 50,  base: 400, lo: 30, hi: 70 },
      { max: 1e9, base: 700, lo: 40, hi: 100 }
    ]
  }
};