document.title = ('Febrian Siska Nurwahid')

const body = document.body
body.append('Hello World')


const namaKamu = document.createElement('b')
namaKamu.innerHTML = '<marquee>Febrian Siska Nurwahid</marquee>'
namaKamu.style.color = 'blue'
body.append(namaKamu)

const button1 = document.getElementById('button1')
button1.style.backgroundColor = 'Red'
button1.style.border = 'none'
button1.style.padding = '10px'
button1.style.borderRadius = '5px'


const button2 = document.getElementById('button2')
button2.style.backgroundColor = 'Aqua'
button2.style.border = 'solid 1px green'
button2.style.padding = '10px'
button2.style.borderRadius = '5px'

function clickButton() {
    button1.style.backgroundColor = 'aqua'
    const textBaru = document.createElement('p')
    textBaru.textContent = "AKU SAYANG KAMU"
    body.append(textBaru)
}

const defaultText = 'Coba Click'
button1.textContent = defaultText

function changeText() {
    button1.textContent = 'Nama Saya'
}

function oriText() {
    button1.textContent = defaultText
}

const defaultText2 = 'Nama Saya'
button2.textContent = defaultText2

function clickButton2() {
    button2.style.backgroundColor = 'red'
    button2.style.color = 'yellow'
}

function geserButton() {
    button2.textContent = 'Ganti Nama'
    const textBaru = document.createElement('h1')
    textBaru.textContent = "Febrian Siska Nurwahid"
    body.append(textBaru)
}

function originalText() {
    button2.textContent = defaultText2
    const textBaru = document.createElement('h1')
    textBaru.textContent = "Febrian Siska Nurwahid"
    body.append(textBaru)
    textBaru.style.color = 'red'
    textBaru.style.fontFamily = 'Inclusive Sans'
}


function clickButton3() {
    document.getElementById('day').innerHTML = Date()
}

const button3 = document.getElementById('button3')
button3.style.backgroundColor = 'red'
button3.style.borderRadius = '5px'
button3.style.padding = '10px'

const hariTanggal = document.getElementById('day')
hariTanggal.style.color = 'black'
hariTanggal.style.fontSize = '25px'
hariTanggal.style.fontWeight = '235px'

function clickYa() {
    document.open("text/html", "replace")
    document.write("<h1>Selamat Datang Pada Percobaan Pertama</h1>")
    document.close()
}