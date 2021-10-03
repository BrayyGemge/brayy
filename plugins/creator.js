let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '6281390658325@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '62895618626337', 'Owner Brayy', m)
  this.sendContact(m.chat, '6281328139682', 'Owner Fernazer', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
