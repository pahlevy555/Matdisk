console.log("===========================================");
console.log("-------------- ORDO 3X3 -------------------");
console.log("===========================================");
console.log("PENJUMLAHAN");
console.log("===========================================");
var data_a = [2,7,5];
var data_b = [4,8,6];
var data_c = [1,2,4];

var hasil_1 = data_a[0] + data_b[0] + data_c[0];
var hasil_2 = data_a[1] + data_b[1] + data_c[1];
var hasil_3 = data_a[2] + data_b[2] + data_c[2];

console.log("Penjumlahan Dari ORDO 3X3: ");
console.log(data_a[0],data_a[1],data_a[2]);
console.log(data_b[0],data_b[1],data_b[2]);
console.log(data_c[0],data_c[1],data_c[2]);
console.log("\n");

console.log(hasil_1,hasil_2,hasil_3);
console.log("===========================================");
console.log("PERKURANGAN");
console.log("===========================================");

var hasil_1 = data_a[0] - data_b[0] - data_c[0];
var hasil_2 = data_a[1] - data_b[1] - data_c[1];
var hasil_3 = data_a[2] - data_b[2] - data_c[2];

console.log("Perkurangan Dari ORDO 3X3: ");
console.log(data_a[0],data_a[1],data_a[2]);
console.log(data_b[0],data_b[1],data_b[2]);
console.log(data_c[0],data_c[1],data_c[2]); 
console.log("\n");

console.log(hasil_1,hasil_2,hasil_3);
console.log("===========================================");
console.log("PERKALIAN");
console.log("===========================================");

var hasil_1 = data_a[0] * data_b[0] * data_c[0];
var hasil_2 = data_a[1] * data_b[1] * data_c[1];
var hasil_3 = data_a[2] * data_b[2] * data_c[2];

console.log("Perkalian Dari ORDO 3X3: ");
console.log(data_a[0],data_a[1],data_a[2]);
console.log(data_b[0],data_b[1],data_b[2]);
console.log(data_c[0],data_c[1],data_c[2]);
console.log("\n");

console.log(hasil_1,hasil_2,hasil_3);
console.log("===========================================");
console.log("DETERMINAN");
console.log("===========================================");

var hasil_1 = data_a[0] * data_b[1] * data_c[2] + data_a[1] * data_b[2] * data_c[0] + data_a[2] * data_b[0] * data_c[1];
var hasil_2 = data_c[0] * data_b[1] * data_a[2] + data_c[1] * data_b[2] * data_a[0] + data_c[2] * data_b[0] * data_a[1];

console.log(data_a[0] +" * "+ data_b[1] +" * "+ data_c[2]+" + "+data_a[1] +" * "+ data_b[2] +" * "+ data_c[0] +" + " + data_a[2] +" * "+ data_b[0] +" * "+ data_c[1]);
console.log(data_c[0] +" * "+ data_b[1] +" * "+ data_a[2] +" + "+ data_c[1] +" * "+ data_b[2] +" * "+ data_a[0] +" + "+ data_c[2] +" * "+ data_b[0] +" * "+ data_a[1]);
console.log("Hasil = "+hasil_1+" - "+ hasil_2);
var hasil_final = hasil_1 - hasil_2;
console.log(hasil_final);
console.log("===========================================");
console.log("INVERS");
console.log("===========================================");

console.log(":: invers dari matrik ::");
console.log(data_a[0],data_a[1],data_a[2]);
console.log(data_b[0],data_b[1],data_b[2]);
console.log(data_c[0],data_c[1],data_c[2]);
console.log("\n:: Adalah ::\n");
//KOLOM 1
var hasil_1 = (data_b[1] * data_c[2])-(data_c[1] * data_b[2]);
var hasil_2 = (data_b[0] * data_c[2])-(data_c[0] * data_b[2]);
var hasil_3 = (data_b[0] * data_c[1])-(data_c[0] * data_b[1]);

//KOLOM 2
var hasil_4 = (data_a[1] * data_c[2])-(data_c[1] * data_a[2]);
var hasil_5 = (data_a[0] * data_c[2])-(data_c[0] * data_a[2]);
var hasil_6 = (data_a[0] * data_c[1])-(data_c[0] * data_a[1]);

//KOLOM 3
var hasil_7 = (data_a[1] * data_b[2])-(data_b[1] * data_a[2]);
var hasil_8 = (data_a[0] * data_b[2])-(data_b[0] * data_a[2]);
var hasil_9 = (data_a[0] * data_b[1])-(data_b[0] * data_a[1]);

console.log(hasil_1,hasil_2,hasil_3);
console.log(hasil_4,hasil_5,hasil_6);
console.log(hasil_7,hasil_8,hasil_9);
console.log("===========================================");