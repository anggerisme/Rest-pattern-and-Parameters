# Rest Pattern & Parameters

## Perbedaan SPREAD dan REST

Baik `spread` maupun `rest` memiliki persamaan dalam hal penulisan syntax yaitu menggunakan tanda titik 3 (...) Hanya penempatanya saja yang berbeda

```javascript
const arr = [1, 2, ...[3, 4]]; // Spread
```

> `SPREAD` berada di sebelah kanan operator =

```javascript
const [a, b, ...lainya] = [1, 2, 3, 4, 5]; // Rest
console.log(a, b, lainya);
```

> `REST` berada disebelah kiri operator =

Cara kerja dari `rest` yaitu mengelompokkan semua nilai yang tersisa menjadi satu array yang baru. Jika kita lihat contoh diatas ada 3 pengelompokkan nilai berdasarkan variabel yang _membungkusnya_ yaitu `a`,`b` dan `lainya`
