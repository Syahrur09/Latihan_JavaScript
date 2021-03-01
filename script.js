//console.log("Hello, World!!")

document.getElementById('heading').innerHTML = "Semangat Mas!!"

// Variable

/*
var name = "Syahrur";
console.log(name);

var lastname = "Romadlon";
console.log(lastname);

var age = 25;
console.log(age);

var fullname = name + ' ' + lastname;
console.log(fullname);

var fullname = true;
console.log(fullname);

var job = "Pengangguran";
console.log(job);

var bio = "Nama Saya " + name + " " + lastname + "," + " Umur Saya " + age + " dan Saya adalah Seorang " + job + " Ada yang TIDAK TERIMA!!";
console.log(bio);
*/

//Operator Aritmatics

/*

+   --> Penjumlahan
-   --> Pengurangan
*   --> Perkalian
/   --> Pembagian
%   --> Modulus
++  --> Increment
--  --> Decrement

*/

// Assigment Operator

/*

Operator    Contoh      Sama Seperti
=           x = y       x = y
+=          x += y      x = x + y
-=          x -= y      x = x - y
*=          x *= y      x = x * y
/=          x /= y      x = x / y
%=          x %= y      x = x % y

*/
// Contoh :

/*

var x = 10;
x += 5;
console.log(x);

// String Operator

text1 = "Syahrur";
text2 = "Romadlon";
text3 = text1 + " " + text2;
console.log(text3);

*/

// Comparation Operator

/*

==      equal to (value)
===     equal value and equal type
!=      not equal
!==     not equal value atau not equal type
>       greather than
<       less than 
>=      greather than atau equal to
<=      less than atau equal
?       ternary operator

*/

// Logical Operator

/*

&&      Logical and 
||      Logical or 
!       Logical not 

*/

// Type Operator

/*

typeof      return--> tipe 
instanceof  return--> boolean

*/

// Bitwise Operator

// & | ~ ^ << >> >>>

// if else Statement

/*

var nama = "Retno";
var age = 25;
var status = "Single";

if (status == "Kawin") {
    console.log("Retno masih Single")
} else {
    console.log("dia sudah Menikah")
}

var hour = 12;
if (hour < 12) {
    console.log("Sanjang Nggih")
} else {
    console.log("Sanjang Mboten")
}

var time = 20;
if (time < 10) {
    console.log("Sanjang Sanes")
} else if (time < 20) {
    console.log("Sanjang Ndean Nggih")
} else {
    console.log("Nggih Ngoten")
}

*/

/*----------------------------------------------------------------------------------*/

// TYPE DATA PRIMITIF (not object)
/*
* Number : float, decimmal, integer.
* String : Character, Text.
* Boolean : LLogical 2 nilai (True / False).
* Undefined : Variable yang belum memiliki nilai.
* Null : Non existant, memiliki nilai (null).
*/

/*----------------------------------------------------------------------------------*/

// Boolean
/*
- Yes or No
- On or Off
- True or False
*/

//Boolean(10 > 9)
/*
console.log(Boolean(10 > 9))
console.log(Boolean(10 > 19))
*/

// Comparation and Condition
/*
== equal        --> if (day == 'senin')
> greater than  --> if (gaji > 1.000.000)
< less than     --> if (age < 18)
*/

// Everything With a "Value" is True
/*
console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("Hello"));
console.log(Boolean("Rere"));
*/

/*
console.log(Boolean(false));
console.log(Boolean(true));
*/

// Everything With a "Value" is False

/*
var x = 0;
console.log(Boolean(x));

var y = "";
console.log(Boolean(y));

var z = "NaN";
console.log(Boolean(z));
*/

// Tools Debugging JS

/*
- console.log()
- alert()
- prompt()
*/

/*
var z = "NaN";
alert(Boolean(z));

var name = prompt("What is your name ?");
console.log(name);
alert(name);
*/

// Switch Condition

/*
var job = "Pengangguran";
job = prompt("Apa Pofesi Rere ?")

switch (job) {
    case 'Pengangguran':
        console.log("Rere adalah seorang Pengangguran");
        break;
    case 'Penjahit':
        console.log("Rere bisa menjahit tapi bukan seorang Penjahit");
        break;
    case 'Motivator':
        console.log("Rere adalah motivasi setiap orang, tapi bukan seorang Motivator");
        break;
    default:
        console.log("Pekerjaan yang anda cari tidak ada kaitannya dengan Rere");
}
*/
        
// JavaScript Function

/*
- Function adalah Aspek yang penting dalam JavaScript dan bahasa Programming yang lain.
- Block of Code, untuk menjalankan task khusus dalam Programming.
- Function akan tereksekusi apabila dipanggil (Call).
- Function dibuat untuk mengurangi penulisan code secara berulang-ulang, mengembalikan return.
*/

// DRY = Do not Repeat Your self;

// Contoh Penulisan Function

/*
function rere() {
    console.log("Sayang !!")
}
rere();
*/

/*
function rere(name) {
    console.log(name)
}
rere("Retno");
*/

/*
var name = "Retno";

function rere() {
    console.log(name)
}
rere(name);
*/

/*
function rere(name, age) {
    console.log(name + " " + age)
}
rere("Retno", 25);
rere("Syahrur", 25);
rere("Rere", 17);
*/

/*
function tambah(setunggal, kalih){
    return setunggal + kalih;
}
console.log(tambah(3,8));
*/

// Function dengan Condition if

/*
function rere(name, age) {
    if (age > 35) {
        return name + ', Not that Old!';
    } else {
        return name + ', is still Young!';
    }
}
var name = rere('Rere', 25);
console.log(name);

//console.log(rere('Retno', 25));
*/

/*
function coba(a, b) {
    return a + b;
}
var njajal = coba("Ora Madhang", " is Kencot");
console.log(njajal);
document.getElementById('element1').innerHTML = njajal;
alert(njajal);
*/

/*--------------------------------------------------------------
Statement dan  Expression di dalam JavaScript
--------------------------------------------------------------*/

// Statement

/*
function myFunc() {
    //code
}

if (x === 5) {
    //Do something here
}
*/

// Expresssion

/*
3 + 5;
var x = 3;
*/

/*--------------------------------------------------------------
JavaScript Arrays
--------------------------------------------------------------*/

/*
var name = "Rere";
var lastname = "Ningsih";

var names = ["Rere", "Ningsih", 1995, "Pengangguran"]
*/

// Cara Akses sebuah Array

/*
console.log(names);
console.log(names[0]);
console.log(names[2]);
*/

// Mutation

/*
names[1] = "Yurwoningsih";
console.log(names);
*/

// Push

/*
names.push("Pusing");
console.log(names[4]);
*/

// UnShift

/*
names.unshift("Mbak");
console.log(names);
*/

// POP

/*
names.pop();
*/

// Shift

/*
names.shift();
*/

/*--------------------------------------------------------------
JavaScript Object
--------------------------------------------------------------*/

/*
var car = {
    color : 'blue',
    year : 2021,
    drive : function(){return 'drive'}    
};
*/

/*
var shopList = [
    'Apple', 
    'Orange', 
    'Pear'
]
*/

// TUGAS 1

/*
var rumah = [
    'mobil',
    'motor',
    'ruangtamu',
    'kamartidur',
    'dapur'
]
*/

// TUGAS 2

/*
var mobil = {
    warna : 'putih',
    tahun : 2020,
    merek : 'avanza',
    mesin : function(){return 'mesin'},
    transmisi : function(){return 'transmisi'}
};

var motor = {
    warna : 'putih',
    tahun : 2021,
    merek : 'PCX',
    mesin : function(){return 'mesin'},
    transmisi : function(){return 'tansmisi'}
};

var ruangtamu = {
    dinding : 'cream',
    dekorasi : 'foto-foto',
    jendela : 4,
    meja : function(){return 'meja'},
    kursi : function(){return 'kursi'}
};

var kamartidur = {
    dinding : 'putih',
    dekorasi : 'foto-foto',
    jendela : 1,
    kasur : function(){return 'kasur'},
    lemari : function(){return 'lemari'}
};

var dapur = {
    dinding : 'coklat',
    dekorasi : 'rak dinding',
    jendela : 2,
    meja : function(){return 'meja'},
    kompor : function(){return 'kompor'}
};
*/

/*--------------------------------------------------------------
Menyisipkan Array dan Object
--------------------------------------------------------------*/

/*
var mobil = {
    merek : 'Avanza',
    kecepatan : 160,
    mesin : {
        kapasitas : 2.3,
        merek : 'Toyota',
        bahanbakar : 'Pertalite',
        piston : [
            2018,
            {made : 'Japan'},
            {tipe : 'BoreUp'}
        ],
    },
    transmisi : function(){return 'manual'}
};
*/

/*
var array = [
    'string',
    100,
    [true, 100],
    {name : 'Rere'},
    function() { return 'sayangku';}
];
*/

// TUGAS

/*
var rumah = [
    'Rumahku',
    27,
    ['Apakah Rumah Nomor 27 ?', true],
    {warna : 'putih'},
    function() { return 'rumah'}    
];
*/

/*--------------------------------------------------------------
Mengakses Array dan Object
--------------------------------------------------------------*/

// TUGAS

/*
var rumah = [
    'Rumahku',
    27,
    ['Apakah Rumah Nomor 27 ?', true],
    {warna : 'putih'},
    function() { return 'rumah'}    
];
*/

/*
console.log(rumah);
console.log(rumah[0]);
console.log(rumah[1]);

console.log(rumah[2]);
console.log(rumah[2][0]);
console.log(rumah[2][1]);

console.log(rumah[3]);
console.log(rumah[3]['warna']);

console.log(rumah[4]);
console.log(rumah[4]());
*/

/*
var mobil = {
    merek : 'Avanza',
    kecepatan : 160,
    mesin : {
        kapasitas : 2.3,
        merek : 'Toyota',
        bahanbakar : 'Pertalite',
        piston : [
            2018,
            {made : 'Japan'},
            {tipe : 'BoreUp'}
        ],
    },
    transmisi : function(){return 'manual'}
};
*/

//Cara Tradisional

/*
console.log(mobil);
console.log(mobil.merek);
console.log(mobil.kecepatan);

console.log(mobil.mesin);
console.log(mobil.mesin.kapasitas);
console.log(mobil.mesin.merek);
console.log(mobil.mesin.bahanbakar);

console.log(mobil.mesin.piston);
console.log(mobil.mesin.piston[0]);
console.log(mobil.mesin.piston[1].made);
console.log(mobil.mesin.piston[2].tipe);

console.log(mobil.transmisi());
*/

//Cara Bracket

/*
console.log(mobil);
console.log(mobil['merek']);
console.log(mobil['kecepatan']);

console.log(mobil['mesin']);
console.log(mobil['mesin']['kapasitas']);
console.log(mobil['mesin']['merek']);
console.log(mobil['mesin']['bahanbakar']);

console.log(mobil['mesin']['piston']);
console.log(mobil['mesin']['piston'][0]);
console.log(mobil['mesin']['piston'][1]['made']);
console.log(mobil['mesin']['piston'][2]['tipe']);

console.log(mobil['transmisi']());
*/

/*--------------------------------------------------------------
Create, Asign & Delete Member Array dan Object
--------------------------------------------------------------*/

/*
var mobil = {
    merek : 'Avanza',
    velg : 'ring-16',
    kecepatan : 160,
    mesin : {
        kapasitas : 2.3,
        merek : 'Toyota',
        bahanbakar : 'Pertalite',
        piston : [
            2018,
            {made : 'Japan'},
            {tipe : 'BoreUp'}
        ],
    },
    transmisi : function(){return 'manual'}
};
*/

/*
console.log(mobil.merek = 'Fortunner');
console.log(mobil.warna = 'putih');
console.log(delete mobil.velg);
console.log(mobil.kecepatan += 20);
console.log(mobil.mesin.kapasitas += 1.0);
console.log(mobil.mesin.bahanbakar = 'Solar');
console.log(mobil.mesin.piston[0] += 2);
console.log(mobil.audio = function(){return 'Double din'});
*/

// Setelah dilakukan Create, Asign & Delete pada member Object diatas :

/*
var mobil = {
    merek : 'Fortunner',
    warna : 'Putih',
    kecepatan : 180,
    mesin : {
        kapasitas : 3.3,
        merek : 'Toyota',
        bahanbakar : 'Solar',
        piston : [
            2020,
            {made : 'Japan'},
            {tipe : 'BoreUp'}
        ],
    },
    transmisi : function(){return 'manual'}
    audio : function() {return 'Double din'}
};
*/

/*--------------------------------------------------------------
Prebuilt Method
--------------------------------------------------------------*/

/*
var array = [
    'string',
    100,
    [true, 100],
    {name : 'Rere'},
    function() { return 'sayangku';}
];
*/

// ** shift --> untuk menghapus element pertama pada array

/*
array
(5) ["string", 100, Array(2), {…}, ƒ]
array.shift();
"string"
array
(4) [100, Array(2), {…}, ƒ]
*/

// ** pop --> untuk menghapus element terakhir pada array

/*
array
(4) [100, Array(2), {…}, ƒ]
array.pop();
ƒ () { return 'sayangku';}
array
(3) [100, Array(2), {…}]
*/

// ** unshift --> untuk menambahkan element pertama pada array

/*
array
(5) ["string", 100, Array(2), {…}, ƒ]
array.unshift('tambah item','item baru');
7
array
(7) ["tambah item", "item baru", "string", 100, Array(2), {…}, ƒ]
*/

// ** push --> untuk menambahkan element terakhir pada array

/*
array
(5) ["string", 100, Array(2), {…}, ƒ]
array.push('tambah item','item baru');
7
array
(7) ["string", 100, Array(2), {…}, ƒ, "tambah item", "item baru"]
*/

// ** splice --> untuk menambahkan atau mengurangi element pada array

// 1. Menghapus element

/*
array.splice(1,2);

(1,...) --> menghapus element mulai dari index ke 1
(...,2) --> jumlah element yang akan dihapus.
*/

/*
rray
(5) ["string", 100, Array(2), {…}, ƒ]
array.splice(1,2);
(2) [100, Array(2)]
array
(3) ["string", {…}, ƒ]
*/

// 2. Menambahkan element diantara element yang ada

/*
array.splice(2, 0, 'tambah item', 2020);

(2, ..., ..., ...) --> menambahkan element mulai dari index ke 2
(..., 0, ..., ...) --> jumlah element yang akan dihapus
(..., ..., 'tambah item', 2020) --> element yang ditambahkan
*/

/*
array
(5) ["string", 100, Array(2), {…}, ƒ]
array.splice(2, 0, 'tambah item', 2020);
[]length: 0__proto__: Array(0)
array
(7) ["string", 100, "tambah item", 2020, Array(2), {…}, ƒ]
*/

// 3. Merubah dan menghapus element

/*
array.splice(2, 3, 'Selamat Belajar', 'Syahrur', 2021);

(2, ..., ..., ..., ...) --> menambahkan element mulai dari index ke 2
(..., 3, ..., ..., ...) --> jumlah element yang akan dihapus
(..., ..., 'Selamat Belajar', 'Syahrur', 2021) --> element yang ditambahkan
*/

/*
array
(5) ["string", 100, Array(2), {…}, ƒ]
array.splice(2, 3, 'Selamat Belajar', 'Syahrur', 2021);
(3) [Array(2), {…}, ƒ]
array
(5) ["string", 100, "Selamat Belajar", "Syahrur", 2021]
*/

/*--------------------------------------------------------------
JavaScript Loops
--------------------------------------------------------------*/

/*
var i;

for(i=1; i<=10; i++){
    
    console.log(i);
}
*/

/*
var family = [
    'Bapak',
    'Ibu',
    'Kakak',
    'Adik'
]
*/

/*
var i;

for(i=0; i<family.length; i++){
    
    console.log(family[i]);
}
*/

/*
var i;

for(i=family.length-1; i>=0; i--){
    
    console.log(family[i]);
}
*/

// JavaScript While Loops

/*
var i=0;
while (i<family.length){
    console.log(family[i]);
    i++;
}
*/

// function constuctor

/*
function Mobil(merek, tahun, pabrikan, kapasitas){
    this.merek = merek;
    this.tahun = tahun;
    this.pabrikan = pabrikan;
    this.kapasitas = kapasitas;
}
*/

/*
var Mobil1 = new Mobil('Avanza', 2020, 'Toyota', 1300);
var Mobil2 = new Mobil('Brio', 2021, 'Honda', 1200);
var Mobil3 = new Mobil('Panther', 2016, 'Izusu', 2500);
*/

/*
Mobil1
Mobil {merek: "Avanza", tahun: 2020, pabrikan: "Toyota", kapasitas: 1300}
Mobil2
Mobil {merek: "Brio", tahun: 2021, pabrikan: "Honda", kapasitas: 1200}
Mobil3
Mobil {merek: "Panther", tahun: 2016, pabrikan: "Izusu", kapasitas: 2500}
*/

