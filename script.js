// ----- Penjelasan aad di deskripsi -----
/* SPREAD berada di sebelah kanan operator = */
const arr = [1, 2, ...[3, 4]];

/*REST berada disebelah kiri operator = */
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// ----- CONTOH KASUS -----
const rumahMakan = {
  nama: "Rumah makan berkah",
  lokasi: "Jalan merpati blok m",
  kategori: ["tradisional", "murah", "warteg"],
  makanan: ["soto", "gulai ikan", "rendang", "sate", "nasi goreng"],
  minuman: ["es teh", "es jeruk", "kopi"],
  jamBuka: {
    kam: {
      buka: 12,
      tutup: 22,
    },
    jum: {
      buka: 11,
      tutup: 23,
    },
    sab: {
      buka: 0,
      tutup: 24,
    },
  },
};
/* Tidak termasuk skipped elements hanya benar-benar sisa yang terbaca */
// ----- Perilaku Rest -----

/* Penerapan pada arrays */
const [soto, , rendang, ...makananLain] = [...rumahMakan.makanan];
console.log(soto, rendang, makananLain); // soto, rendang, [sate, nasi goreng]

/* Penerapan pada object */
const { jum, ...akhirPekan } = rumahMakan.jamBuka;
console.log(akhirPekan); // kam, sab
