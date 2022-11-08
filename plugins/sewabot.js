import fetch from 'node-fetch' 
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
     let name = db.data.users[m.sender].name 
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `${ucapan()}`,
    orderTitle: `${ucapan()}`,
    thumbnail:   await (await fetch(`https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg`)).buffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
  const sections = [ 
                 { 
                   "rows": [{ 
                     "title": `😎 Pemilik Bot`, 
                     "description": "Nomor Pemilik Bot (owner)", 
                     "rowId": `${usedPrefix}creator` 
                   }, { 
                     "title": "👾 Syarat Ketentuan dan Peraturan", 
                     "description": "Harap membaca Peraturan demi kenyamanan kita bersama", 
                     "rowId": `${usedPrefix}donasi` 
                   }, { 
                     "title": `🪐 Group Official ${namebot} Bot`, 
                     "description": "Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan", 
                     "rowId": `${usedPrefix}gcbot` 
                   }], 
                   "title": "Informasi Bot" 
                 }, { 
                   "rows": [{ 
                     "title": `🌹 Sewa?`, 
                     "description": "5k/Bulan dan seterus nya!", 
                     "rowId": `${usedPrefix}owner` 
                     }], 
                   "title": "────────「 Trial 」" 
                 }, { 
                     "rows": [{ 
                       "title": `🤑 Permanen ! Rp100.000`, 
                       "description": "Masukkan bot ke dalam group tanpa batasann waktu!", 
                       "rowId": ".masuk"
                   }], 
                     "title": "───────「 Permanent 」" 
                 } 
               ]
         const listMessage = {
      text: `*❏ SEWA BOT*
CHEK KATALOG BOT JIKA EMANG MAU TAU
cht owner jika serius.

=> BACA INI DULU SUK <=
1.➠ Sewa (Join Grup) harga 100K / Permanent dan apabila bot di kick dari grup sengaja atau tidak sengaja tidak bisa di join kan lagi (Hangus).

2.➠ Pembayaran saat ini hanya tersedia via Dana.

3.➠ Proses transaksi seperti pada umumnya, chat owner - Bayar - ss bukti - Done.

4.➠ *Penting!* sv no owner atau join grup official dibawah untuk mengetahui update nomor bot terbaru apabila ter-banned.

5.➠ Bot bisa di pindah pindah Grup (berlaku untuk yang sewa) kedalam grup lain (hanya 1 grup)

6.➠ Maaf untuk yang sudah Transfer tidak dapat di Refund/dibatalkan

7.➠ Membeli/Sewa berarti Setuju dalam Persyaratan tersebut`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Click Here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
    
    }
handler.command = /^(sewabot|sewa|belibot|buyprem)$/i

export default handler 

function ucapan() {
    let res = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = ('Hi')
  if (time >= 0) {
    res = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    res = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    res = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    res = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    res = ('Selamat Malam🌙')
  }
  return res
}
