import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('November 4 2022 00:0:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `_Pilih Mode bot nya kak..._\n_Off atau On di group_\n`,wm + '\n\n' + botdate, thumbdoc, [['ON','.boton'],['OFF','botoff']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `💌 Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Join Gc Official yak`,          previewType: 0,
                        thumbnail: await (await fetch(`https://i.pinimg.com/originals/50/3a/f4/503af49701fa85b7c938d8e54ffa1549.jpg`)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'
                      }}
})
}


handler.help = ['botmode']
handler.tags = ['group']
handler.command = /^(botmode)$/i

handler.admin = true
handler.group = true

export default handler
