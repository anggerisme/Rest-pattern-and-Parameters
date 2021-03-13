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

  mieRebus: function (sawi, ...bumbuLain) {
    console.log(sawi);
    console.log(...bumbuLain);
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

// ----- REST PARAMETERS PADA FUNCTION -----
/*Tanpa (...) */
const angka = function (...a) {
  console.log(...a);
};
/* */
const t = [8, 3, 4];
angka(...t);
angka(1, 2);
angka(1, 2, 3);
angka(1, 2, 3, 4);

/* Penerapan lebih dalam  */
const angka1 = function (...jmlAngka) {
  let jml = 0;
  for (let i = 0; i < jmlAngka.length; i++) jml += jmlAngka[i];
  console.log(jml);
};

angka1(1, 2);
angka1(1, 2, 3);
const [ax, ...bx] = [1, 2, 4, 5];
angka1(ax, ...bx);

const x = [2, 3, 5];
angka1(...x); // Spread mengeluarkan angka dari array menjadi 2,3,4 -> kemudian nilai-nilai ini akan dikirimkan ke function angka1
/* ----- Contoh Kasus ----- */

rumahMakan.mieRebus("sawi", "daun bawang", "sledri", "kobis", "telur"); // sawi // daun bawang sledri kobis telur
