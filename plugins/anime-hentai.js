import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/nsfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendFile(m.chat, json.url,"","", m)
}
handler.help = ['hentai']
handler.tags = ['internet']
handler.command = /^(hentai)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler