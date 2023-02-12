import db from '../lib/database.js'

let confirm = {}

async function handler(m, { conn, args }) {
    //if (!isROwner) throw 'Dalam perbaikan'
        let user = db.data.users[m.sender]
        let count = (args[0] && number(parseInt(args[0])) ? Math.max(parseInt(args[0]), 1) : /all/i.test(args[0]) ? Math.floor(parseInt(user.money)) : 1) * 1
        if ((user.money * 1) < count) return m.reply('💵Uang kamu tidak cukup!!')
            confirm[m.sender] = {
                sender: m.sender,
                message:m,
                count
          }
      
}

handler.before = async m => {
  if (!(m.sender in confirm)) return
    if (m.isBaileys) return
    let { count } = confirm[m.sender]
    let user = db.data.users[m.sender]
    let moneyDulu = user.money * 1
            let Bot = (Math.ceil(Math.random() * 8)) * 1
            let Kamu = (Math.floor(Math.random() * 12)) * 1
            let status = 'Kalah'
            if (Bot < Kamu) {
                user.money += count * 1
                status = 'Menang'
            } else if (Bot > Kamu) {
                user.money -= count * 1
            } else {
                status = 'Seri'
                user.money += (Math.floor(count / 1.5)) * 1
            }
            m.reply(`
Bot roll: *${Bot}*
Kamu roll: *${Kamu}*

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*` : status == 'Kalah' ? `Kehilangan *-${count * 1}*` : `Mendapatkan *+${Math.floor(count / 1.5)}*`} 💵Money
    `.trim())
            delete confirm[m.sender]       
          

}

handler.help = ['judi [jumlah]']
handler.tags = ['rpg']
handler.command = /^(judi|bet)$/i

export default handler

/**
 * Detect if thats number
 * @param {Number} x 
 * @returns Boolean
 */
function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
                                                                     }