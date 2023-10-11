// const arraySaya = ['minggu', 'senin', 'selasa', {
//             namaSaya: function() { console.log('Febrian Siska Nurwahid') }
//         },
//         ['rabu', 'kamis', 'jumat', 'sabtu']
//     ]
// length = 7


// console.log(`hari ini adalah hari ${arraySaya[4][1]}`)


// const newArraySaya = Array.from(arraySaya)
// newArraySaya[1] = 'Anggota badan'
// console.log({ arraySaya })
// console.log({ newArraySaya })


// const senin = arraySaya.includes('senin')
// const pannjangHari = (arraySaya.length)
// console.log(pannjangHari)

// if ('senin') {
//     const posisiSenin = arraySaya.indexOf('senin')
//     const indexBefore = posisiSenin - 1
//     console.log(posisiSenin)
//     const indexAfter = posisiSenin + 1
//     const Before = arraySaya[indexBefore]
//     const After = arraySaya[indexAfter]


//     console.log(`Sebelum hari senin adalah hari ${Before}`)
//     console.log(`Sesudah hari senin adalah hari ${After}`)

//     const hariawal = arraySaya.shift()
//     console.log(hariawal)
//     const hariAwal = arraySaya[0]
//     console.log(`hari awal adalah hari ${hariAwal}`)
//     const hariAkhir = arraySaya[arraySaya.length - 1]
//     console.log(`hari ter-akhir adalah hari ${hariAkhir}`)
// } else {
//     console.log('Saya Tidak Tau')
// }



// const arrayNama = ['Febrian Siska Nurwahid', 'Anissa Marsiska']
// const arrayKamu = ['Jaka Mahendra', 'Andra']

// const mergeArray = arrayNama.concat(arrayKamu)

// mergeArray.map((value, index) => console.log(index, value))

// for (list of mergeArray)
//     console.log(list)


// const datas = [{
//         "namo": "Javascript",
//         "age": 34,
//         "requires": true,
//     },
//     {
//         "namo": "React",
//         "age": 32,
//         "requires": true,
//     }, {
//         "namo": "hatemel",
//         "age": 23,
//         "requires": true,
//     },
// ]

// datas
//     .sort((a, b) => a.age - b.age)
//     .filter((x) => x.age >= 30)
//     .map((values) => console.log(values))