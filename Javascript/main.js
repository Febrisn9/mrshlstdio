let saldoPertama = 40000
let saldoKedua = 400234


const totalSaldo = saldoPertama + saldoKedua

alert(`Saya memiliki saldo awal sebanyak Rp.${saldoPertama} dan Saldo akhir saya sebanyak Rp.${saldoKedua} dan jika digabungkan total saldo saya sebanyak Rp.${totalSaldo}`)


let x = 4
let y = 9

const z = x * y

alert(z)


const namaGuru = ['Febri', 'Asep', 'Andri', 'andra']
for (let i = 1; i < namaGuru.length; i++) {
    console.log(namaGuru[i])
}


const namaTanggal = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']

let hari = new Date().getDay()
hari = namaTanggal[hari]
alert(`hari ini hari ${hari}`)

let saldoAwal = Number(prompt("saldo anda sekarang goceng berapa yg akan anda tambahkan?"))
let saldo = 5000
const saldoAkhir = saldo + saldoAwal

alert(`sekarang saldo anda Rp.${saldoAkhir}`)