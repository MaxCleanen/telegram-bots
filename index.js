const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const { getRandomNumbers } = require('randoms'); 

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply(`${getRandomNumbers()} | ${getRandomNumbers()} | ${getRandomNumbers()} | ${getRandomNumbers()}`));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));