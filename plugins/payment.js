import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`
  conn.sendButton(m.chat, `
┏━ꕥ〔 *DONASI • ALL PEYMENT* 〕ꕥ━⬣
┃✾ Donasi ya donasi suk
┃✾ Donasi lah bangsa
┃  Yg donasi boleh req foto 
┃  buat di pajang katalog bot 
┃  selama 7d + Free Prem user 7d
┃
┃✾> QRISH [ https://i.pinimg.com/564x/57/5c/8c/575c8cf89faea4a22e2bb0eacc12ffcc.jpg ]
┗━━━━ꕥ
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `Follow Tiktok My Bestie`, sourceUrl: 'https://www.tiktok.com/@raraharsita2', thumbnail: await (await fetch('https://i.ibb.co/jfZVKmC/babi2.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler
