let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://qu.ax/JrOF.jpg`
let purgatoriotxt = `
» 𝙈𝘼𝙋𝘼 𝘿𝙀 𝙋𝙐𝙍𝙂𝘼𝙏𝙊𝙍𝙄𝙊 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 ✅
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://qu.ax/JrOF.jpg', 'fantasy.jpg', purgatorio.trim(),
//En esta imagen vas a poner el url de la imagen grande
 fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `Free Fire`,
body: `vs`,
mediaType: 1,
sourceUrl: 'https://www.instagram.com/ricardoookadm_',
thumbnailUrl: 'https://qu.ax/JrOF.jpg'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(purgatorio|purgatorio)$/i
export default handler