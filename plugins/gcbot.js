let handler = async m => m.reply(`
*⚠GRUP BOT⚠*

1. https://chat.whatsapp.com/IABh05rfP24JLGKWu8U5tE
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
