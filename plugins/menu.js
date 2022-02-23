let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
╭〔 ZeusBotz 〕
├ Hai, *%name!*
├ Limit: *%limit*
├ Role: *%role*
├ Xp: *%exp / %maxexp*
├ Total Xp: *%totalexp*
╰───
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
├ Mode: *${global.opts['self'] ? 'Private' : 'Publik'}*
├ Runtime: *%uptime (%muptime)*
├ Database: *%rtotalreg dari %totalreg*
├ Memory Used : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
└─────────────────
  header: `
⁙╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
⁙┃╭┈─────────────⩵꙰ཱི࿐
⁙┃╰─── %category ───➤ ↶↷*
⁙├☆─〔 ZeusBotz 〕──➤`,
  body: `⁙├〲 %cmd %islimit %isPremium`,
  footer: '⁙╰•☆°°°🕊°°°🕊°°°🕊°°°‹•━━╮',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'rpg', 'jadian', 'xp', 'stiker', 'kerangajaib', 'quotes', 'photo', 'editor', 'maker', 'textprome', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'dewasa', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': '𝗨𝘁𝗮𝗺𝗮',
    'game': '𝗚𝗮𝗺𝗲',
    'rpg': '𝗥𝗽𝗴',
    'jadian': '𝗝𝗮𝗱𝗶𝗮𝗻',
    'xp': '𝗘𝘅𝗽 & 𝗟𝗶𝗺𝗶𝘁',
    'sticker': '𝗦𝘁𝗶𝗸𝗲𝗿',
    'kerang': '𝗞𝗲𝗿𝗮𝗻𝗴 𝗔𝗷𝗮𝗶𝗯',
    'quotes': '𝗤𝘂𝗼𝘁𝗲𝘀',
    'ph': '𝗣𝗵𝗼𝘁𝗼𝗼𝘅𝘆',
    'ep': '𝗘𝗽𝗵𝗼𝘁𝗼',
    'editor': '𝗘𝗱𝗶𝘁𝗼𝗿',
    'maker': '𝗠𝗮𝗸𝗲𝗿',
    'te': '𝗧𝗲𝘅𝘁 𝗣𝗿𝗼 𝗠𝗲',
    'admin': `𝗔𝗱𝗺𝗶𝗻 ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': '𝗚𝗿𝘂𝗽',
    'premium': '𝗣𝗿𝗲𝗺𝗶𝘂𝗺',
    'internet': '𝗜𝗻𝘁𝗲𝗿𝗻𝗲𝘁',
    'anonymous': '𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗖𝗵𝗮𝘁',
    'nulis': '𝗠𝗮𝗴𝗲𝗿 𝗡𝘂𝗹𝗶𝘀 & 𝗟𝗼𝗴𝗼',
    'downloader': '𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿',
    'tools': '𝗧𝗼𝗼𝗹𝘀',
    'fun': '𝗙𝘂𝗻',
    'database': '𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲',
    'about': '𝗔𝗯𝗼𝘂𝘁',
    'vote': '𝗩𝗼𝘁𝗶𝗻𝗴',
    'absen': '𝗔𝗯𝘀𝗲𝗻',
    'quran': '𝗔𝗹 𝗤𝘂𝗿\'𝗮𝗻',
    'audio': '𝗔𝘂𝗱𝗶𝗼',
    'jadibot': '𝗝𝗮𝗱𝗶 𝗕𝗼𝘁',
    'info': '𝗜𝗻𝗳𝗼',
    'dewasa': '𝗗𝗲𝘄𝗮𝘀𝗮',
    '': '𝗧𝗮𝗻𝗽𝗮 𝗞𝗮𝘁𝗲𝗴𝗼𝗿𝗶',
  }
  if (teks == 'game') tags = {
    'game': '𝗚𝗮𝗺𝗲'
  }
  if (teks == 'rpg') tags = {
    'rpg': '𝗥𝗽𝗴'
  }
  if (teks == 'jadian') tags = {
    'jadian': '𝗝𝗮𝗱𝗶𝗮𝗻'
  }
  if (teks == 'xp') tags = {
    'xp': '𝗘𝘅𝗽 & 𝗟𝗶𝗺𝗶𝘁'
  }
  if (teks == 'stiker') tags = {
    'sticker': '𝗦𝘁𝗶𝗸𝗲𝗿'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': '𝗞𝗲𝗿𝗮𝗻𝗴 𝗔𝗷𝗮𝗶𝗯'
  }
  if (teks == 'quotes') tags = {
    'quotes': '𝗤𝘂𝗼𝘁𝗲𝘀'
  }
  if (teks == 'photo') tags = {
    'ph': '𝗣𝗵𝗼𝘁𝗼𝗼𝘅𝘆',
    'ep': '𝗘𝗽𝗵𝗼𝘁𝗼',
  }
  if (teks == 'editor') tags = {
    'editor': '𝗘𝗱𝗶𝘁𝗼𝗿'
  }
  if (teks == 'maker') tags = {
    'maker': '𝗠𝗮𝗸𝗲𝗿'
  }
  if (teks == 'textprome') tags = {
    'te': '𝗧𝗲𝘅𝘁 𝗣𝗿𝗼 𝗠𝗲'
  }
  if (teks == 'admin') tags = {
    'admin': `𝗔𝗱𝗺𝗶𝗻 ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': '𝗚𝗿𝘂𝗽'
  }
  if (teks == 'premium') tags = {
    'premium': '𝗣𝗿𝗲𝗺𝗶𝘂𝗺'
  }
  if (teks == 'internet') tags = {
    'internet': '𝗜𝗻𝘁𝗲𝗿𝗻𝗲𝘁'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': '𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗖𝗵𝗮𝘁'
  }
  if (teks == 'nulis') tags = {
    'nulis': '𝗠𝗮𝗴𝗲𝗿 𝗡𝘂𝗹𝗶𝘀 & 𝗟𝗼𝗴𝗼'
  }
  if (teks == 'downloader') tags = {
    'downloader': '𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿'
  }
  if (teks == 'tools') tags = {
    'tools': '𝗧𝗼𝗼𝗹𝘀'
  }
  if (teks == 'fun') tags = {
    'fun': '𝗙𝘂𝗻'
  }
  if (teks == 'database') tags = {
    'database': '𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲'
  }
  if (teks == 'vote') tags = {
    'vote': '𝗩𝗼𝘁𝗶𝗻𝗴',
    'absen': '𝗔𝗯𝘀𝗲𝗻'
  }
  if (teks == 'quran') tags = {
    'quran': '𝗔𝗹 𝗤𝘂𝗿\'𝗮𝗻'
  }
  if (teks == 'audio') tags = {
    'audio': '𝗔𝘂𝗱𝗶𝗼'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': '𝗝𝗮𝗱𝗶 𝗕𝗼𝘁'
  }
  if (teks == 'info') tags = {
    'info': '𝗜𝗻𝗳𝗼'
  }
  if (teks == 'dewasa') tags = {
    'dewasa': '𝗗𝗲𝘄𝗮𝘀𝗮'
  }
  if (teks == 'tanpakategori') tags = {
    '': '𝗧𝗮𝗻𝗽𝗮 𝗞𝗮𝘁𝗲𝗴𝗼𝗿𝗶'
  }
  if (teks == 'owner') tags = {
    'owner': '𝗢𝘄𝗻𝗲𝗿',
    'host': '𝗛𝗼𝘀𝘁',
    'advanced': '𝗔𝗱𝘃𝗲𝗻𝗰𝗲𝗱'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
    throw` *${ucapan()}, ${conn.getName(m.sender)} !*
${readMore}
*┌〔 𝗗𝗔𝗙𝗧𝗔𝗥 𝗠𝗘𝗡𝗨 〕─•*
*├❏ Aktif selama ${uptime}*
*├❏ ${Object.keys(global.db.data.users).length} Pengguna*
*├❏ ${totaljadibot.length} Jadibot*
*├❏ ${conn.blocklist.length} Terblock*
*├❏ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} Pengguna Terbanned*
*├❏ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned*
├❏ ${_p + command} all
├❏ ${_p + command} game
├❏ ${_p + command} rpg 
├❏ ${_p + command} jadian
├❏ ${_p + command} xp
├❏ ${_p + command} stiker
├❏ ${_p + command} kerangajaib
├❏ ${_p + command} photo
├❏ ${_p + command} quotes
├❏ ${_p + command} admin
├❏ ${_p + command} grup
├❏ ${_p + command} premium
├❏ ${_p + command} internet
├❏ ${_p + command} anonymous
├❏ ${_p + command} nulis
├❏ ${_p + command} downloader
├❏ ${_p + command} tools
├❏ ${_p + command} fun
├❏ ${_p + command} database
├❏ ${_p + command} vote
├❏ ${_p + command} quran
├❏ ${_p + command} audio
├❏ ${_p + command} jadibot
├❏ ${_p + command} info
├❏ ${_p + command} tanpakategori
├❏ ${_p + command} owner
└────•
`.trim()
}

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length)
    await conn.send2ButtonLoc(m.chat, await (await fetch(fla + text)).buffer(), text.trim(), wate
  } catch (e) {
  //conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m|menu|help|\?)$/i
handler.register = true
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗗𝗶𝗻𝗶 𝗛𝗮𝗿𝗶"
  if (time >= 4) {
    res = "𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗣𝗮𝗴𝗶"
  }
  if (time > 10) {
    res = "𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗦𝗶𝗮𝗻𝗴"
  }
  if (time >= 15) {
    res = "𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗦𝗼𝗿𝗲"
  }
  if (time >= 18) {
    res = "𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗠𝗮𝗹𝗮𝗺"
  }
  return res
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
