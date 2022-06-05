let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw `What Are You Looking For?`
    let res = await fetch(`https://x-restapi.herokuapp.com/api/amazon?q=${text}&apikey=BETA`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    m.reply(`
🔆 Item : ${json.item}
📊 Reviews : ${json.review}
🌟 Rating : ${json.rating}
💹 Price : ${json.price}
🔥 Score : ${json.score}
🌐 Url : ${json.url}

`.trim())
}
handler.help = ['amazon <item>']
handler.tags = ['internet']
handler.command = /^amazon$/i
module.exports = handler
