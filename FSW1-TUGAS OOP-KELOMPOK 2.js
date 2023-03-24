// @ts-ignore
class bangunDatar {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log("Jenis Bangun Datar = " + this.name);
  }

  hasilLuas() {
    console.log("Luas " + this.name, "adalah ");
  }

  hasilKeliling() {
    console.log("Keliling " + this.name, "adalah ");
  }
}

class segitiga extends bangunDatar {
  constructor(name, alas, tinggi) {
    super(name);
    this.alas = alas;
    this.tinggi = tinggi;
  }

  segitigaSiku() {
    this.luas = (1 / 2) * this.alas * this.tinggi;
    this.keliling =
      this.alas +
      this.tinggi +
      Math.sqrt(this.alas * this.alas + this.tinggi * this.tinggi);
    this.introduce();
    // console.log("Luas =" + this.luas, "Keliling =" + this.keliling);
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }

  segitigaSisi() {
    this.luas = (1 / 2) * this.alas * this.tinggi;
    this.keliling =
      this.alas +
      this.tinggi +
      Math.sqrt(this.alas * this.alas + this.tinggi * this.tinggi);
    this.introduce();
    // console.log("Luas =" + this.luas, "Keliling =" + this.keliling);
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }

  segitigaKaki() {
    this.luas = (1 / 2) * this.alas * this.tinggi;
    this.keliling =
      this.alas +
      this.tinggi +
      Math.sqrt(this.alas * this.alas + this.tinggi * this.tinggi);
    this.introduce();
    // console.log("Luas =" + this.luas, "Keliling =" + this.keliling);
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }
}

class lingkaran extends bangunDatar {
  constructor(name, r) {
    super(name);
    this.r = r;
  }

  lingkaran() {
    this.luas = Math.PI * this.r * this.r;
    this.keliling = 2 * Math.PI * this.r;
    this.introduce();
    // console.log("Luas =" + this.luas, "Keliling =" + this.keliling);
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }
}

class segiEmpat extends bangunDatar {
  constructor(name, sisi, panjang, lebar) {
    super(name);
    this.sisi = sisi;
  }
  persegi() {
    this.luas = this.sisi * this.sisi;
    this.keliling = 4 * this.sisi;
    this.introduce();
    // console.log("Luas = " + this.luas, "Keliling = " + this.keliling);
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }

  persegiPanjang() {
    this.luas =  panjang * lebar;
    this.keliling = 2 * (this.panjang + this.lebar);
    this.introduce();
    
    // console.log("Luas =" + this.luas, "Keliling =" + this.keliling);
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }
}

class belahketupat extends bangunDatar {
  constructor(name, d1, d2, sisi) {
    super(name);
    this.d1 = d1;
    this.d2 = d2;
    this.sisi = sisi;
  }

  belahKetupat() {
    this.luas = (1 / 2) * (this.d1 * this.d2);
    this.keliling = 4 * this.sisi;
    this.introduce();
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  
  }
}

class jajargenjang extends bangunDatar {
  constructor(name, alas, tinggi, sisiMiring) {
    super(name);
    this.alas = alas;
    this.tinggi = tinggi;
    this.sisimiring = sisiMiring;
  }

  jajarGenjang() {
    this.luas = this.alas * this.tinggi;
    this.keliling = 2 * ( this.alas + this.sisimiring);
    this.introduce();
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }
}

class trapesium extends bangunDatar {
  constructor(name, sisiAlas, sisiAtas, tinggi, sisiKanan, sisiKiri) {
    super(name);
    this.sisiAlas = sisiAlas;
    this.sisiAtas = sisiAtas;
    this.tinggi = tinggi;
    this.sisiKanan = sisiKanan;
    this.sisiKiri = sisiKiri;
  }

  trapesiumSamaKaki() {
    this.luas = 0.5 * (this.sisiAlas + this.sisiAtas) * this.tinggi ;
    this.keliling = this.sisiAlas + this.sisiAtas + this.sisiKanan + this.sisiKiri;
    this.introduce();
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }

  TrapesiumSiku() {
    this.luas = 0.5 * (this.sisiAlas + this.sisiAtas) * this.tinggi ;
    this.keliling = this.sisiAlas + this.sisiAtas + this.sisiKanan + this.tinggi;
    this.introduce();
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }

  TrapesiumSembarang() {
    this.luas = 0.5 * (this.sisiAlas + this.sisiAtas) * this.tinggi ;
    this.keliling = this.sisiAlas + this.sisiAtas + this.sisiKanan + this.sisiKiri;
    this.introduce();
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }
}

class layangLayang extends bangunDatar {
  constructor(name, sisiMiring1, sisiMiring2, sisiMiring3, sisiMiring4, diameter1, diameter2) {
    super(name);
    this.sisiMiring1 = sisiMiring1;
    this.sisiMiring2 = sisiMiring2;
    this.sisiMiring3 = sisiMiring3;
    this.sisiMiring4 = sisiMiring4;
    this.diameter1 = diameter1;
    this.diameter2 = diameter2;
  }

  layang_layang() {
    this.luas = 0.5 * this.diameter1 * this.diameter2;
    this.keliling = this.sisiMiring1 + this.sisiMiring2 + this.sisiMiring3 + this.sisiMiring4;
    this.introduce();
    this.hasilLuas(), console.log(this.luas);
    this.hasilKeliling(), console.log(this.keliling);
  }
}


let rectangel = new segiEmpat("Persegi", 5);
rectangel.persegi();

console.log("----------");
console.log("----------");

let circle = new lingkaran("Lingkaran", 14);
circle.lingkaran();

console.log("----------");
console.log("----------");

let sideTriangle = new segitiga("Segitiga Sama Sisi", 5, 8);
sideTriangle.segitigaSisi();

console.log("----------");
console.log("----------");

let ketupat = new belahketupat("Belah ketupat", 8, 6, 4);
ketupat.belahKetupat();

console.log("----------");
console.log("----------");

let jajar = new jajargenjang("jajar Genjang", 10, 6, 4);
jajar.jajarGenjang();

console.log("----------");
console.log("----------");

let trapesium_siku = new trapesium("Trapesium Siku-Siku", 18, 12, 6, 10);
trapesium_siku.TrapesiumSiku();

console.log("----------");
console.log("----------");

let layang_2 = new layangLayang("Layang-Layang", 14, 20, 22, 22, 26, 26 );
layang_2.layang_layang();
