let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `🔰 -----[ 「 *IKLAN* 」 ]----- 🔰

──────────────────────────────

◯ *DAFTAR SEWA & BUAT BOT :*

◯ *SEWA : 25K/GRUP (BULAN)*

◯ *BUAT : 100K (BISA JADI OWNER)*

◯ *PEMBAYARAN BISA MELALUI :*

◯ *DANA*

◯ *PULSA+10K*

──────────────────────────────
◯ *KEUNTUNGAN SEWA BOT :*

◯ *1. BISA MEMASUKAN BOT KE GROUP*

◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*

◯ *KEUNTUNGAN BUAT BOT :*

◯ *1. BISA MENJADI OWNER BOT SENDIRI*

◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*

◯ *3. BISA MEMBAWA BOT KE GROUP*

◯ *4. BISA MENGGUNAKAN COMMAND OWNER*

◯ *5. BISA MENYEWAKAN BOT KEMBALI*

──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*

◯ *HARAP HUBUNGI NOMOR DIBAWAH :*

◯ *wa.me/62895618626337*

──────────────────────────────

🔰 -----[「 *POWERED* 」]----- 🔰` 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['iklan'] 
handler.tags = ['info'] 
handler.command = /^(iklan)$/i

module.exports = handler