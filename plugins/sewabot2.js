let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg'
let text = `━━❏〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕❏━⬣

┏┅═┅═❏ *SEWA BOT* ❏═┅═┅
┃
┃✾ 7 HARI 1ᴋ / Group
┃✾ 1 BULAN 5ᴋ / ɢʀᴏᴜᴘ
┃✾ 1 TAHUN 65ᴋ / ɢʀᴏᴜᴘ
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 100ᴋ / ɢʀᴏᴜᴘ 
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏┅═┅═❏ *PREM BOT* ❏═┅═┅
┃ 
┃✾ 7 HARI 5ᴋ 
┃✾ 1 BULAN 10ᴋ 
┃✾ 1 TAHUN 70ᴋ 
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 150ᴋ
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 450+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ *${author}* ꕥ━⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk SEWA', url: `https://wa.me/62856411142178?text=Hallo admin, saya tertarik untuk menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(masuk)$/i

export default handler
