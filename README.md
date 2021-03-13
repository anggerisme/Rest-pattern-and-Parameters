# Rest Pattern & Parameters

## Perbedaan SPREAD dan REST

Baik `spread` maupun `rest` memiliki persamaan dalam hal penulisan syntax yaitu menggunakan tanda titik 3 (`...`) Hanya penempatanya saja yang berbeda

```javascript
const arr = [1, 2, ...[3, 4]]; // Spread
```

> `SPREAD` berada di sebelah **_kanan_** operator =

```javascript
const [a, b, ...lainya] = [1, 2, 3, 4, 5]; // Rest
console.log(a, b, lainya);
```

> `REST` berada disebelah **_kiri_** operator =

Cara kerja dari `rest` yaitu mengelompokkan semua nilai yang tersisa menjadi satu array yang baru. Jika kita lihat contoh diatas ada 3 pengelompokkan nilai berdasarkan variabel yang _membungkusnya_ yaitu `a`,`b` dan `lainya`

## Contoh Kasus

Masih menggunakan objek `rumahMakan`

```javascript
const rumahMakan = {
  nama: "Rumah makan berkah",
  lokasi: "Jalan merpati blok m",
  kategori: ["tradisional", "murah", "warteg"],
  minuman: ["es teh", "es jeruk", "kopi"],
  makanan: ["soto", "gulai ikan", "rendang"],
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
```

### Mengetahui cara kerja `rest`

#### Penerapan pada arrays

```javascript
const [soto, , rendang, makananLain] = [
  ...rumahMakan.minuman,
  ...rumahMakan.makanan,
];
console.log(soto, rendang, makananLain); // soto, rendang, [sate, nasi goreng]
```

> Bisa kita lihat bahwa `rest` tidak mengikut-sertakan gulai ikan padahal kita tahu bahwa gulai ikan juga merupakan sisa. Bahwa ini menunjukkan `rest` bekerja dengan cara membaca elements/nilai yang paling terakhir tersisa yaitu sate dan nasi goreng. Itu saja! (_Rest elements must be last elements_)

#### Penerapan pada object

`rest` justru berperilaku berbeda jika kita terapkan pada object. Mari kita lihat contoh dibawah ini

```javascript
const {jum, akhirPekan} = {rumahMakan.jamBuka}
console.log(akhirPekan)// kam, sab

```

> Jika kita lihat objek kita, disana pada property `jamBuka` secara berurutan ada `kam`, `jum`, `sab` dan pada contoh diatas kita mengambil nilai `sab` yang berposisi di tengah tapi kali ini `kam` **diikutsertakan** dengan `sab` yang keduanya dianggap sebagai sisa.
