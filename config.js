let fs = require('fs')
global.DeveloperMode = 'false' //true Or false
global.linkGC = ['']
//kalo mau ubah nama owner nya ubah di ../plugins/creator.js
global.owner = ['62896255561617','6289625556161'] //Letakan nomor kamu disini
global.mods = [''] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  amel: 'https://melcanz.com',
  amell: 'https://melcanz.net',
  Dehan: 'https://dhnjing.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'APIKEYLU',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://api.lolhuman.xyz': 'APIKEYLU',
  'https://leyscoders-api.herokuapp.com': 'DestaPrasApi',
  'https://melcanz.com': 'beli bang',
  'https://melcanz.net': 'gratisan',
  'https://dhnjing.xyz': 'LitRHap',
}
//sosmed owner
global.yt = 'https://youtube.com/channel/UCVv3wC5Q7_juw-d9HepjpOQ' //UBAH JADI LINK YT LU
global.ig = `https://instagram.com/not_pilar` //UBAH JADI LINK IG LU

//donasi
global.donate = `
╭─「  Donasi • Pulsa 」
├❒ tre [+6289625556161]
╰────

╭─「  Donasi • Non Pulsa 」
├❒ Dana [089625556161]
├❒ Ovo [089625556161]
╰────

╭─「  Hubungi 」
├❒ Ingin donasi? Wa.me/6289625556161
╰────` //UBAH JADI NOMER DAN LINK SAWERIA MU

//Rules bot
global.rules = `
╭─ *「 RULES BOT」*
│
├❒ DILARANG CHAT PRIBADI KE BOT
├❒ DILARANG TOXIC
├❒ DILARANG SPAM COMMAND BOT
├❒ DILARANG KIRIM VIRTEX
├❒ DILARANG KIRIM 18+ APAPUN ITU
├❒ DILARANG TELPON / VC KEBOT
├❒ DILARANG CULIK BOT KE GRUP
├❒ DILARANG PROMOSI KE BOT
├❒ BOT TIDAK MENERIMA SAVE KONTAK
│
├❏ KALO MELANGGAR AKAN LANGSUNG DIBAN DAN DI BLOKIR TANPA TOLERANSI SEDIKIT PUN
│
└─ *「 RULES BOT」*` //Ubah jadi semau mu

// Sticker WM
global.packname = 'ZeusBotz'
global.author = 'ZeusBotz'
global.wm = '© ZeusBotz' //UBAH JADI NAMAMU
global.botwm = '© ZeusBotzNew' //UBAH JADI NAMAMU

global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.CanvasAPI = '';

global.multiplier = 130 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
