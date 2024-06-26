let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://qu.ax/BZfp.jpeg`
let cuadrilaterotxt = `
» 𝙈𝘼𝙋𝘼 𝘿𝙀 𝘾𝙐𝘼𝘿𝙍𝙄𝙇𝘼𝙏𝙀𝙍𝙊 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀✅
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://qu.ax/BZfp.jpeg', 'fantasy.jpg', cuadrilaterotxt.trim(),
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
thumbnailUrl: 'https://qu.ax/BZfp.jpeg'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(cuadrilatero|cuadri)$/i
export default handler