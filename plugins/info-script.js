//Credits Jangan Dihapus
//Thanks To Papah-Chan
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtube.com/channel/UCRPy0bAbyIGTFWLhbhREhEw(Wajib Subs Kalau Ga subs Gw Doain Error Mampus lu)

Pengen base script bot ini?\nNih ada santai bro...\nhttps://github.com/ImYanXiao/Elaina-MultiDevice

Pengen yang udah di recode owner?\nNanti aja yað¦`
let wibu = `https://hadi-api.herokuapp.com/api/loli` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'á´á´','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/irfaanabdulhafizh",
    title: 'ð´ ð ð ð ð ð© ð ð ð ',
    body: 'want source code?',
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
