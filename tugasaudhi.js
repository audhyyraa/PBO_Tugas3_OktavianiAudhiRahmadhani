
class Kapal {
    constructor(nama, panjang, kapasitas) {
        this.nama = nama;
        this.panjang = panjang;
        this.kapasitas = kapasitas;
        this._status = "Di pelabuhan";
        this._kondisi = "Baik";  
    }


    berlayar() {
        this._status = "Berlayar";
        return `Kapal ${this.nama} sedang berlayar.`;
    }

    kembaliKePelabuhan() {
        this._status = "Di pelabuhan";
        return `Kapal ${this.nama} telah kembali ke pelabuhan.`;
    }

    getStatus() {
        return `Status kapal ${this.nama}: ${this._status}`;
    }

   
    getKondisi() {
        return `Kondisi kapal ${this.nama}: ${this._kondisi}`;
    }

    setKondisi(kondisiBaru) {
        this._kondisi = kondisiBaru;
        return `Kondisi kapal ${this.nama} telah diperbarui menjadi: ${this._kondisi}`;
    }
}


class KapalPenumpang extends Kapal {
    constructor(nama, panjang, kapasitas, hargaTiket) {
        super(nama, panjang, kapasitas);
        this.hargaTiket = hargaTiket;
    }

    infoTiket() {
        return `Harga tiket kapal penumpang ${this.nama}: Rp${this.hargaTiket}. Kapasitas: ${this.kapasitas} penumpang.`;
    }
}


class KapalKargo extends Kapal {
    constructor(nama, panjang, kapasitas, jenisMuatan) {
        super(nama, panjang, kapasitas);
        this.jenisMuatan = jenisMuatan;
    }

    infoMuatan() {
        return `Kapal kargo ${this.nama} mengangkut ${this.jenisMuatan} dengan kapasitas ${this.kapasitas} ton.`;
    }
}

let kapalPenumpang = new KapalPenumpang("Kapal Nusantara", 100, 500, 100000);
let kapalKargo = new KapalKargo("Kapal Samudra", 200, 1000, "barang kontainer");

console.log(kapalPenumpang.berlayar());
console.log(kapalPenumpang.infoTiket());
console.log(kapalPenumpang.getStatus());
console.log(kapalPenumpang.getKondisi());
console.log(kapalPenumpang.setKondisi("Perlu perawatan"));

console.log(kapalKargo.berlayar());
console.log(kapalKargo.infoMuatan());
console.log(kapalKargo.kembaliKePelabuhan());
console.log(kapalKargo.getStatus());
console.log(kapalKargo.getKondisi());
console.log(kapalKargo.setKondisi("Rusak"));
