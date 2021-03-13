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

### Mengetahui Perilaku `rest`

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

> Jika kita lihat objek kita, disana pada property `jamBuka` secara berurutan ada `kam`, `jum`, `sab` dan pada contoh diatas kita mengambil nilai `jum` yang berposisi di tengah tapi kali ini `kam` **diikutsertakan** dengan `sab` yang keduanya dianggap sebagai sisa.

## Penerapan rest pada function

```javascript
const angka = function (...angka) {
  console.log(angka);
};
angka(1, 2);
angka(1, 2, 3);
angka(1, 2, 3, 4);
```

### Tanpa (`...`)

```javascript
const angka = function (a) {
  console.log(a); // 1
  angka(1, 2, 3);
};
```

> Function ini akan mengembalikan hanya satu nilai saja walaupun diberikan banyak argumen karena function ini hanya memiliki 1 parameter saja yaitu `a`. Jadi yang hanya terbaca adalah 1

### Menggunakan rest parameter (`...`)

```javascript
const angka = function (...a) {
  console.log(...a);
};
angka(1, 2, 3); // 1,2,3
```

> Inilah fungsi dari spread operator, yaitu untuk mengurai/mengeluarkan data yang ada pada `array` kemudian mengirimkanya ke function `angka` diatas melalui parameter `...a`

```javascript
const t = [8, 3, 4];
angka(...t);
angka(1, 2, 3);
```

> `function` ini akan mengembalikan nilai yang dikirimkan oleh argumen kemudian diurai

### Penerapan lebih dalam

```javascript
const angka = function (...jmlAngka) {
  let jml = 0;
  for (let i = 0; i < jmlAngka.length; i++) jml += jmlAngka[i];
  console.log(jml);
};
angka(1, 2, 3); // 6
```

> Penggunaan rest parameters menggunakan looping untuk menjumlahkan nilai pada array

### Contoh kasus

Kita akan menggunakan objek yang sering kita pakai sebagai contoh kasus yaitu `rumahMakan`. dan kita akan membuat function untuk membuat menu baru, Katakanlah mie rebus dengan komposisi sebagai berikut

```javascript
mieRebus = function (sawi, bumbuLain) {
  console.log(sawi);
  console.log(...bumbuLain);
};
```

Hasilnya

```javascript
rumahMakan.mieRebus("sawi", "daun bawang", "sledri", "kobis", "telur"); // sawi // daun bawang sledri kobis telur
```

> sawi **_dan_** daun bawang, sledri, kobis, telur merupakan 2 arrays yang terpisah
