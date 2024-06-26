const handler = async (m, {conn}) => {
  m.reply(global.Donar);
};
handler.command = /^(Donar|Apoyar)$/i;
export default handler;

global.Donar = `
*Si Deseas Apoyar Al Staff De Proyecto R.A 🕷️*

*Paypal*

*Pichincha :* +593979133620
*Paypal :* https://paypal.me/RicardoSilva18160
`;