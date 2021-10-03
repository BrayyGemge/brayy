let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TRI:* [0895-6186-26337]
┣➥ *Dana:* [0895-6186-26337]
┣➥ *Gopay:*[0895-6186-26337]
┣➥ *Donasi Buat Upgrade Hp Biar StikerGIF Ny Work:v* 
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/62895618626337*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
