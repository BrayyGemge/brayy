let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nSaya Brayy Bot\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok\n\n\n\n\nSubscribe Me\nhttps://youtube.com/channel/UCIlHwRyDBk3sr5lxHmUk_0w",
                        "description": "*©Brayy Bot BY Brayyy*\n*JANGAN HUJAT AKU BANG MASI PEMULA KOK*",
                        "buttonText": "PILIH SALAH SATU BEB",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nMelihat Download Menu",
                                        "rowId": ".downloadmenu"
                                       
                                    },{
                                    	"title": "Semua Menu",
                                        "description": "\nMelihat Semua Menu",
                                        "rowId": ".allmenu"  
                                                       
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nMelihat Jadibot Menu",
                                        "rowId": ".jadibotmenu"  
                                                       
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nMelihat Owner Menu",
                                        "rowId": ".ownermenu"                 
                                                                                                 
                                    },{
                                        "title": "Setting Grup Menu",
                                        "description": "\nMelihat Group Setting",
                                        "rowId": ".groupset"
                                                                        
                                    },{        
                                        "title": "Edukasi Menu",
                                        "description": "\nMelihat Edukasi Menu",
                                        "rowId": ".educationmenu"
                                        
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu','help']
handler.register = true
module.exports = handler