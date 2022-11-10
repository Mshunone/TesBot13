let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*✧───────···────────✧*\n*Hallo Juga Kak, Xia Kangen Nih* \n *Gimana Kabar Nya? >~<*', 'status@broadcast')
}
handler.customPrefix = /^(Hallo Xia|hi Xia|hai Xia|Xia chan)$/i
handler.command = new RegExp

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 
