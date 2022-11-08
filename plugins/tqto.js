import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `*BIG THANKS TO*
    
Terutama Terimakasih Teruntuk:
=➸ @${'6283805685278'.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
=➸ 0@s.whatsapp.net

─────────────────────
• God
• My ortu
• SaxiaMD ( Me )
• Nurutomo
• Adiwajshing
• Atenabot
• Baka Botz
• ZeeoneOfc 
• Krizynofc
• Jarot
• AnaBot
• Penyedia Layanan API
• Orang-orang yang Berdonasi
─────────────────────`
  let buttonMessage= {
'document':{'url':'https://youtu.be/hklv-Ysqqac'},
'mimetype':global.ddocx,
'fileName':'「 ᴹᴿ᭄ King Of Bear ×፝֟͜× 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz',
'mediaType':2,
'previewType':'pdf',
'title':`💌 Owner: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
'body':` by ᴹᴿ Kaxell-XD`,
'thumbnail':await(await fetch('https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg')).buffer(),
'sourceUrl':'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'}},
'caption':cap,
'footer':`Ini Ucapan Terima Kasih Untuk Orang Yang Telah Berpatisipasi

${botdate}`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Mҽɳυ'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'Hαʅʅσ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['xp']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
