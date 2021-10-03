let handler = async m => m.reply(`
╭─「 BUY GIFT CODE 」
│ 
│ > Keterangan :
│• Fitur Gift adalah fitur kode yang berisi
│hadiah! Anda bisa mendapatkan exp & limit
│sepuasnya! Hingga masa berlaku kodegiftnya habis!
│
│ > Harga :
│• 10K / Minggu (7 Hari)
│• 20K / Bulan (4 Minggu)
│• 50K / VIP (Permanen)
│
│ > Pembayaran :
│• Pulsa (Tri) :
│+62895618626337
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['buygift']
handler.tags = ['hadiah']
handler.command = /^(buygift)$/i

module.exports = handler
