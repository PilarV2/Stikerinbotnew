let handler = async m => m.reply(`
*「 LIST HARGA SEWA BOT 」*

❒ Sewa = _5k/grup (1 minggu)_
❒ Sewa = _10k/grup (1 bulan)_
❒ Sewa = _20k/grup (permanen)_
❒ Free = _1 hari menit Bot Masuk Ke Group Kalian Setelah Itu Bot Akan Keluar_

◪ *PEMBAYARAN BISA MELALUI*

❒ _PULSA_
❒ _GOPAY_
❒ _OVO_
❒ _DANA_

◪ 𝙆𝙀𝙐𝙉𝙏𝙐𝙉𝙂𝘼𝙉 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏

❒ *Fitur Premium Terbuka*
❒ *Limit UNLIMITED*
❒ *Bisa Menyuruh Bot Buka/Tutup Group*
❒ *Kick Orang*
❒ *Add Orang*
❒ *Anti Link On*
❒ *Fitur Game Banyak Sepuas Nya Main*
❒ *Bisa Memasukkan Bot Ke dalam Grup*

◪ *Jika Minat Hubungi owner kami*
Ingin Jadi Bot Seperti ini?
ketik #jadibot
`.trim())
handler.help = ['sewabot', 'premium','sewa']
handler.tags = ['main']
handler.command = /^(sewabot|premium|sewa)$/i

handler.limit = false

module.exports = handler
