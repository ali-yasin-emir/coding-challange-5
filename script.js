// Dolphins
// Koalas

// 1. Her takımın toplam 3 maçının ortalama skorunu hesapla.
// 2. İki takımdan biri diğer takımın ortalama skorunu ikiye katlıyorsa kazanır.
//    Aksi takdirde hiçbir takım kazanamaz.

// 1. Arrow functionn oluştur calcAverage isminde ve 3 skorun ortalamasını hesaplat.
// 2. İki takımın ortalama skorunu hesaplayacak bir fonksiyon kullan.
// 3. checkWinner isminde bir fonksiyon oluştur ve bu fonksiyon,
// her takımın ortalama skorunun parametrelerini, isim olarak, avgDolphins ve avgKoalas
// alsın.
// 4. Ardından console.log ile, kazananı ve kazananların puanlarını yazdır yukarıdakü kurala göre.
//    Örnek olarak, Koalas win (30 vs 13)
// 5. checkWinner fonksiyonunu kazananı her DATA 1 ve DATA 2  için belirtmek üzere kullan.
// 6. Bu sefer beraberliği görmezden gel.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.

// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.

`use strict`;

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// const calc = (a, b, c, d) => a * b - (c + d);
// console.log(calc(1, 2, 3, 4));

// `use strict`;

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

const topla = function (a, b) {
  a + b;
};
console.log(topla);
