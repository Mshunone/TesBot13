import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('November 8 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`
  conn.sendButton(m.chat, `
┌─「 Donasi • Scan!! 」
│ https://wa.me/p/6025335327476607/6283111136642
❏────
┌─「 Donasi • Non Pulsa 」
│ • Chek Katalog
┃ Ingin donasi? Chek katalog
┃ _Hasil donasi akan digunakan buat sewa_
┃ _atau beli *RDP/PANEL* agar bot ttp on_
┃ _24jam tanpa kendala_
┗━━━━•
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Owner : Donasi suuuk`, body: `Join GC Xia ya`, sourceUrl: 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz', thumbnail: await (await fetch('https://i.pinimg.com/originals/50/3a/f4/503af49701fa85b7c938d8e54ffa1549.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
