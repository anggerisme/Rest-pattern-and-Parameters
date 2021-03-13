/* SPREAD karena di sebelah kanan operator = */
const arr = [1, 2, ...[3, 4]];

/*REST karena disebelah kiri operator = */
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
