## Everything is Object

Ada 2 Type Data :

Primitive
---------
- number
- string
- boolean
- undefined
- null

Object
------
- Array
- Function
- Object
- Date

Object Oriented Programming
---------------------------

- Sesama object saling berinteraktif melalui method dan property
- Menggunakan store data, structure aplikasi ke dalam module dan keep code clean

contoh object :

var toyota = {
    nama : 'Avanza',
    tahun : '2020',
    warna : 'Putih',
}

var daihatsu = {
    nama : 'Xenia',
    tahun : '2018',
    warna : 'Hitam',
}

var honda = {
    nama : 'Mobilio',
    tahun : '2019',
    warna : 'Abu-abu',
}

car = {
    nama,
    tahun,
    pabrik,
    dsb
}

## Constructor atau Prototype

Dibeberapa language ini sering disebut class, didalam javascript disebut Constructor atau Prototype.

Constructor, kita bisa membuat banyak instance, contohnya cunstructor car bisa membuat object baru misalnya toyota, daihatsu, honda dsb.

## inheritance (turunan)

Apa turunan dari car ?

sport = {
    type,
    tahun,
    mesin,
    ukuran
}

family = {
    type,
    tahun,
    mesin,
    ukuran
}

car = {
    nama : 'Mitsubbishi';
    tahun : 2016;
    pabrik : 'Sunter';
    jenis : barang = {
        type : 'Solar';
        karoseri : 'Welehweleh';
        mesin : 2500;
        kapasitas : 15 ton
    }
}

## Constructor Function

function(){ ... }

Kenapa kita membutuhkan constructor function pada saat apa ?

Karena kita perlu membuat object-object baru, pada saat kita membutuhkan new instance - new instance maka kita membutuhkan function constructor. Instance atau copy dari blue print dari sebuah object/function/class.

function motor() { return object; }

Membuat Constuctor function

- function nama function menggunakan huruf besar.
- lewatkan (pass) parameter.
- akses parameter dengan this.
- gunakan new keyword untuk invoke/memanggil constructor function.
- menambahkan value untuk parameter diatas sebagai argumen.
- gunakan variable invoke untuk menyimpan new object tersebut.
- dengan demikian anda bisa memulai membuat instance baru dengan berbeda value, Instance (baca mengcopy).
- tampilkan pada console.

# DOM ( Document Object Model )
